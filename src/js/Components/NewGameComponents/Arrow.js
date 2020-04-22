import React from "react";

function Arrow({direction, addRandomCell}) {
    return (
        <button onClick={()=>addRandomCell()}>{direction}</button>
    );
}

export default Arrow;