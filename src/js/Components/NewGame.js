import React from "react";
import Board from "./NewGameComponents/Board";
import ArrowsPanel from "./NewGameComponents/ArrowsPanel";
import Win from "./NewGameComponents/Win";
import checkIfGameIsLost from "../logic/checkIfGameIsLost";
import isGameWon from "../logic/isGameWon";
import handleKeyboardArrows from "../logic/handleKeyboardArrows";
import Lost from "./NewGameComponents/Lost";
import Undo from "./NewGameComponents/Undo";
import ResetBtn from "./NewGameComponents/ResetBtn";
import checkIfSlideNotClick from "../logic/checkIfSlideNotClick";
import checkIfMoveWasDone from "../logic/checkIfMoveWasDone";
import moveLeftHandler from "../logic/moveLeftHandler";
import moveRightHandler from "../logic/moveRightHandler";
import moveUpHandler from "../logic/moveUpHandler";
import moveDownHandler from "../logic/moveDownHandler";

class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, 2, null],
            [null, null, null, null]
        ];
        this.state = {
            board: this.initialState,
            previousBoard: this.initialState,
            touchStart: {X: 0, Y: 0}
        };
    }

    clickHandler(handlingFunctionChangingState) {

        const boardBeforeMove = this.state.board;
        this.props.setGameOver(false);
        this.setState({board: handlingFunctionChangingState(this.state.board)});
        checkIfMoveWasDone(boardBeforeMove, this.state.board) ?
            this.setState({previousBoard: boardBeforeMove}) :
            false;
    };

    resetGameHandler() {
        this.setState({
            board: this.initialState,
            previousBoard: this.initialState
        });
        this.props.increaseLosts();
    }

    tryAgainFnc() {
        window.onkeydown = this.globalKeyEvent.bind(this);
        window.ontouchstart = (event) => this.handleTouchStart(event);
        window.ontouchend = (event) => this.handleTouchEnd(event);
        localStorage.removeItem('board');
        this.setState({
            board: this.initialState,
            previousBoard: this.initialState
        });
        this.props.setGameOver(false);
    }

    globalKeyEvent(e) {

        const boardBeforeMove = this.state.board;
        this.props.setGameOver(false);
        this.setState(
            {board: handleKeyboardArrows(e.code, this.state.board)});
        checkIfMoveWasDone(boardBeforeMove, this.state.board) ?
            this.setState({previousBoard: boardBeforeMove}) :
            false;
    };

    handleTouchStart(event) {

        this.setState({
            touchStart: {
                X: event.touches[0].clientX,
                Y: event.touches[0].clientY
            }
        })
    };

    handleTouch(event) {

        const distanceX = event.changedTouches[0].clientX - this.state.touchStart.X;
        const distanceY = event.changedTouches[0].clientY - this.state.touchStart.Y;

        checkIfSlideNotClick(distanceX, distanceY) ? this.handleTouchEnd(event, distanceX, distanceY) : false;
    }

    handleTouchEnd(event, distanceX, distanceY) {
        if (Math.abs(distanceX) > Math.abs(distanceY)) {
            if (this.state.touchStart.X > event.changedTouches[0].clientX) {
                this.clickHandler(moveLeftHandler)
            } else {
                this.clickHandler(moveRightHandler)
            }
        } else if (Math.abs(distanceX) < Math.abs(distanceY)) {
            if (this.state.touchStart.Y > event.changedTouches[0].clientY) {
                this.clickHandler(moveUpHandler)
            } else {
                this.clickHandler(moveDownHandler)
            }
        }
    }

    componentDidMount() {

        window.onkeydown = this.globalKeyEvent.bind(this);
        window.ontouchstart = (event) => this.handleTouchStart(event);
        window.ontouchend = (event) => this.handleTouch(event);
        window.ontouchmove = (event) => event.preventDefault;

        this.setState({
            board: JSON.parse(localStorage.getItem('board')) || this.state.board,
            previousBoard: JSON.parse(localStorage.getItem('previousBoard')) || this.state.previousBoard
        });
    }

    componentWillUnmount() {

        window.onkeydown = null;
        window.ontouchstart = null;
        window.ontouchend = null;

        localStorage.setItem('board', JSON.stringify(this.state.board));
        localStorage.setItem('previousBoard', JSON.stringify(this.state.previousBoard));
    }

    render() {

        return (
            checkIfGameIsLost(this.state.board) ?
                <div className='gameOver'>
                    <Board board={this.state.board}/>
                    <Lost increaseLosts={() => this.props.increaseLosts} tryAgainFnc={() => this.tryAgainFnc()}/>
                </div> :
                (isGameWon(this.state.board) ?
                        <div className='gameOver'>
                            <Board board={this.state.board}/>
                            <Win increaseWins={() => this.props.increaseWins} tryAgainFnc={() => this.tryAgainFnc()}/>
                        </div> :
                        <div>
                            <Board board={this.state.board}/>
                            <div className='bottomPanel'>
                                <ArrowsPanel clickHandler={(handlingFunction) => this.clickHandler(handlingFunction)}/>
                                <Undo undo={() => this.setState({board: this.state.previousBoard})}/>
                                <ResetBtn resetFunction={() => this.resetGameHandler()}/>
                            </div>
                        </div>
                )
        );
    }
}

export default NewGame;