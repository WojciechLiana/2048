import React from "react";
import Cell from "./NewGameComponents/Cell";
import "../../css/cell.sass"

function TitleCell({value}){
    return(
        <Cell value={value}/>
    );
}

export default TitleCell;