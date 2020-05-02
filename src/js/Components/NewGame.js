import React from "react";
import Board from "./NewGameComponents/Board";
import Arrow from "./NewGameComponents/Arrow";
import Win from "./NewGameComponents/Win";
import moveUpHandler from "../logic/moveUpHandler";
import moveDownHandler from "../logic/moveDownHandler";
import moveRightHandler from "../logic/moveRightHandler";
import moveLeftHandler from "../logic/moveLeftHandler";
import checkIfGameIsLost from "../logic/checkIfGameIsLost";
import isGameWon from "../logic/isGameWon";
import handleKeyboardArrows from "../logic/handleKeyboardArrows";
import Lost from "./NewGameComponents/Lost";

class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = [
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, 2, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null]
        ];
        this.state = {
            board: this.initialState
        };
    }

    clickHandler(handlingFunctionChangingState) {
        this.setState({board: handlingFunctionChangingState(this.state.board)});
    };

    componentDidMount() {
        this.setState({board: JSON.parse(localStorage.getItem('board')) || this.state.board});
    }

    componentWillUnmount() {
        localStorage.setItem('board', JSON.stringify(this.state.board));
    }

    render() {

        return (
            checkIfGameIsLost(this.state.board) ?
                <Lost increaseLosts={() => this.props.increaseLosts}/> :
                (isGameWon(this.state.board) ?
                        <Win increaseWins={() => this.props.increaseWins}/> :
                        <div tabIndex={0} onKeyDown={(e) => this.setState(
                            {board: handleKeyboardArrows(e.nativeEvent.code, this.state.board)})}>
                            <Board board={this.state.board}/>
                            <div>
                                <Arrow direction='up' onClick={() => this.clickHandler(moveUpHandler)}/>
                            </div>
                            <div>
                                <Arrow direction='left' onClick={() => this.clickHandler(moveLeftHandler)}/>
                                <Arrow direction='right' onClick={() => this.clickHandler(moveRightHandler)}/>
                            </div>
                            <div>
                                <Arrow direction='down' onClick={() => this.clickHandler(moveDownHandler)}/>
                            </div>
                            <button onClick={() => {
                                localStorage.removeItem('board');
                                this.setState({board: this.initialState});
                                this.props.increaseLosts();
                            }}>Reset Game
                            </button>
                        </div>
                )
        );
    }
}

export default NewGame;