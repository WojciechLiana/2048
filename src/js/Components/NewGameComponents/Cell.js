import React from "react";
import "../../../css/cell.sass"

function Cell({value}) {
    return (
        <div className='cell'>
            {value}
        </div>
    );
}

export default Cell;