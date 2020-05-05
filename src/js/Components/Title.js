import React from "react";
import TitleCell from "./TitleCell";

function Title() {
    return (

        <div className='title'>
            <TitleCell value={2}/>
            <TitleCell value={0}/>
            <TitleCell value={4}/>
            <TitleCell value={8}/>
        </div>
    );
}

export default Title;