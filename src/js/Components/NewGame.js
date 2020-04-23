import React from "react";
import Board from "./NewGameComponents/Board";
import Arrow from "./NewGameComponents/Arrow";
import checkEmptyCells from "../logic/checkEmptyCells";
import moveUpHandler from "../logic/moveUpHandler";

class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [[null, null, null, null, null],
                [null, null, null, 2, null],
                [null, null, 2, null, 2],
                [null, null, null, null, null],
                [null, null, null, null, null]],
        };
    }

    render() {

        const moveUpClickHandler = () => {
            this.setState({board: moveUpHandler(this.state.board)});

        };

        return (
            <div>
                {checkEmptyCells(this.state.board) ?
                    <div>
                        <Board board={this.state.board}/>
                        <div>
                            <Arrow direction='up' onClick={() => moveUpClickHandler()}/>
                        </div>
                        <div>
                            <Arrow direction='left' onClick={() => moveUpClickHandler()}/>
                            <Arrow direction='right' onClick={() => moveUpClickHandler()}/>
                        </div>
                        <div>
                            <Arrow direction='down' onClick={() => moveUpClickHandler()}/>
                        </div>
                    </div> :
                    <div>Game over</div>}
            </div>
        );
    }

}

export default NewGame;