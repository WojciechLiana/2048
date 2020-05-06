import React from "react";

function Arrow({direction, onClick}) {
    return (
        <button className={`arrow ${direction}`} onClick={()=> onClick()}>{direction}</button>
    );
}

export default Arrow;