import React from "react";
import "../../../css/cell.sass"

function Cell({value}) {

    const classValue = (value) => value > 2048 ? 4096: value;

    return (
        <div className={`cell cell${classValue(value)}`}>
            {value}
        </div>
    );
}

export default Cell;