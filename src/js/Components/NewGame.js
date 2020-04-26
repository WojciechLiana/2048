import React from "react";
import Board from "./NewGameComponents/Board";
import Arrow from "./NewGameComponents/Arrow";
import checkEmptyCells from "../logic/checkEmptyCells";
import moveUpHandler from "../logic/moveUpHandler";
import moveDownHandler from "../logic/moveDownHandler";
import moveRightHandler from "../logic/moveRightHandler";
import moveLeftHandler from "../logic/moveLeftHandler";

class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [[2, null, null, null, null],
                [null, null, null, null, null],
                [null, null, 2, null, null],
                [null, null, null, null, null],
                [4, null, 2, null, null]],
        };
    }

    render() {

        const moveUpClickHandler = () => {
            this.setState({board: moveUpHandler(this.state.board)});
        };
        const moveDownClickHandler = () => {
            this.setState({board: moveDownHandler(this.state.board)});
        };
        const moveRightClickHandler = () =>
            this.setState({board: moveRightHandler(this.state.board)});

        const moveLeftClickHandler = () =>
            this.setState({board: moveLeftHandler(this.state.board)});

        return (
            <div>
                {checkEmptyCells(this.state.board) ?
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
                    </div> :
                    <div>Game over</div>}
            </div>
        );
    }

}

export default NewGame;