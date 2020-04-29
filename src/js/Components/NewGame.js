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

    clickHandler(handlingFunctionChangingState) {
        this.setState({board: handlingFunctionChangingState(this.state.board)});
    }

    render() {

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
                                    <Arrow direction='up' onClick={() => this.clickHandler(moveUpHandler)}/>
                                </div>
                                <div>
                                    <Arrow direction='left' onClick={() => this.clickHandler(moveLeftHandler)}/>
                                    <Arrow direction='right' onClick={() => this.clickHandler(moveRightHandler)}/>
                                </div>
                                <div>
                                    <Arrow direction='down' onClick={() => this.clickHandler(moveDownHandler)}/>
                                </div>
                            </div>
                    )
                }
            </div>
        );
    }
}

export default NewGame;