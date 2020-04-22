import React from "react";
import Cell from "./Cell.js";

function Row({row}) {
    return (
        <div className="row">
            {row.map((cell, id)=><Cell key={id} value={cell}/>)}
        </div>
    );
}

export default Row;