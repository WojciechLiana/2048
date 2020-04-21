import React from "react";
import Board from "./NewGameComponents/Board";
import Arrow from "./NewGameComponents/Arrow";

function NewGame() {

    return (
        <div>
            <Board/>
            <div><Arrow direction='up'/> </div>
            <div><Arrow direction='left'/><Arrow direction='right'/></div>
            <div><Arrow direction='down'/></div>
        </div>
    );
}

export default NewGame;