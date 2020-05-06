import React from "react";

function ResetBtn({resetFunction}) {
    return (
        <button className='resetBtn' onClick={() => resetFunction()}>Reset Game</button>
    );
}

export default ResetBtn;