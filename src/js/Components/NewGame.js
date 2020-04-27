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
        this.state = {
            board: [[null, null, null, null, null],
                [null, null, null, null, null],
                [null, null, 2, null, null],
                [null, null, null, null, null],
                [null, null, null, null, null]],
        };
    }

    render() {

        const moveUpClickHandler = () =>
            this.setState({board: moveUpHandler(this.state.board)});

        const moveDownClickHandler = () =>
            this.setState({board: moveDownHandler(this.state.board)});

        const moveRightClickHandler = () =>
            this.setState({board: moveRightHandler(this.state.board)});

        const moveLeftClickHandler = () =>
            this.setState({board: moveLeftHandler(this.state.board)});

        return (
            <div tabIndex={0} onKeyDown={(e) => this.setState(
                {board: handleKeyboardArrows(e.nativeEvent.code, this.state.board)})}>
                {checkIfGameIsLost(this.state.board) ?
                    <Lost increaseLosts={() => this.props.increaseLosts}/> :
                    (isGameWon(this.state.board) ?
                            <Win increaseWins={() => this.props.increaseWins}/> :
                            <div>
                                <Board board={this.state.board}/>
                                <div>
                                    <Arrow direction='up' onClick={() => moveUpClickHandler()}/>
                                </div>
                                <div>
                                    <Arrow direction='left' onClick={() => moveLeftClickHandler()}/>
                                    <Arrow direction='right' onClick={() => moveRightClickHandler()}/>
                                </div>
                                <div>
                                    <Arrow direction='down' onClick={() => moveDownClickHandler()}/>
                                </div>
                            </div>
                    )
                }
            </div>
        );
    }
}

export default NewGame;