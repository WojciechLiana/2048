import React from "react";
import Board from "./NewGameComponents/Board";
import Arrow from "./NewGameComponents/Arrow";

class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [[null, null, null, null, null],
                [null, null, null, null, null],
                [null, null, 2, null, null],
                [null, null, null, null, null],
                [null, null, null, null, null]]
        };
    }

    render() {
        return (
            <div>
                <Board board={this.state.board}/>
                <div><Arrow direction='up'/></div>
                <div><Arrow direction='left'/><Arrow direction='right'/></div>
                <div><Arrow direction='down'/></div>
            </div>
        );
    }

}

export default NewGame;