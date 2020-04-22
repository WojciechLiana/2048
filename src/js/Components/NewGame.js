import React from "react";
import Board from "./NewGameComponents/Board";
import Arrow from "./NewGameComponents/Arrow";
import checkEmptyCells from "../logic/checkEmptyCells";
import updateTable from "../logic/updateTable";
import findRandomEmptyCell from "../logic/findRandomEmptyCell";

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

        const onAddRandomCell = () => {
            this.setState({board: updateTable(this.state.board, findRandomEmptyCell(this.state.board))})
        };

        return (
            <div>
                {checkEmptyCells(this.state.board) ?
                    <div>
                        <Board board={this.state.board}/>
                        <div>
                            <Arrow direction='up' addRandomCell={() => onAddRandomCell()}/>
                        </div>
                        <div>
                            <Arrow direction='left' addRandomCell={() => onAddRandomCell()}/>
                            <Arrow direction='right' addRandomCell={() => onAddRandomCell()}/>
                        </div>
                        <div>
                            <Arrow direction='down' addRandomCell={() => onAddRandomCell()}/>
                        </div>
                    </div> :
                    <div>Game over</div>}
            </div>
        );
    }

}

export default NewGame;