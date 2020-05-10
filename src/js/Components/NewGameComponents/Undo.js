import React from "react";

function Undo({undo}){
    return(
        <button className='undoBtn' onClick={()=>undo()}>Undo</button>
    );
}

export default Undo;