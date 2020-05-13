import React from "react";
import "../../../css/cell.sass"

function Cell({value}) {

    const cellValue = (value) => value > 2048 ? 4096: value;

    return (
        <div className={`cell cell${cellValue(value)}`}>
            {value}
        </div>
    );
}

export default Cell;