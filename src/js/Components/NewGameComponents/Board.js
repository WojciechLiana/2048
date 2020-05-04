import React from "react";
import Row from "./Row.js";
import "../../../css/board.sass"

function Board({board}) {
    return (
        <div className='board'>
            {board.map((row, id) => <Row key={id} row={row}/>)}
        </div>
    );
}

export default Board;