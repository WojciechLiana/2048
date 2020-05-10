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
            previousBoard: this.initialState
        };
    }

    clickHandler(handlingFunctionChangingState) {
        this.setState({previousBoard: this.state.board});
        this.setState({board: handlingFunctionChangingState(this.state.board)});
    };

    resetGameHandler() {
        this.setState({
            board: this.initialState,
            previousBoard: this.initialState
        });
        this.props.increaseLosts();
    }

    tryAgainFnc() {
        localStorage.removeItem('board');
        this.setState({
            board: this.initialState,
            previousBoard: this.initialState
        });
        this.props.setGameOver(false);
    }

    componentDidMount() {
        this.setState({
            board: JSON.parse(localStorage.getItem('board')) || this.state.board,
            previousBoard: JSON.parse(localStorage.getItem('previousBoard')) || this.state.previousBoard
        });
    }

    componentWillUnmount() {
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
                        <div tabIndex={0} onKeyDown={(e) => {
                            this.props.setGameOver(false);
                            this.setState(
                                {previousBoard: this.state.board});
                            this.setState(
                                {board: handleKeyboardArrows(e.nativeEvent.code, this.state.board)})
                        }}>
                            <Board board={this.state.board}/>
                            <div className='bottomPanel'>
                                <ArrowsPanel clickHandler={(handlingFunction) => {
                                    this.props.setGameOver(false);
                                    this.clickHandler(handlingFunction)
                                }}/>
                                <Undo undo={() => this.setState({board: this.state.previousBoard})}/>
                                <ResetBtn resetFunction={() => this.resetGameHandler()}/>
                            </div>
                        </div>
                )
        );
    }
}

export default NewGame;