import React from "react";

function Arrow({direction, onClick}) {
    return (
        <button onClick={()=> onClick()}>{direction}</button>
    );
}

export default Arrow;