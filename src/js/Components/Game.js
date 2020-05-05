import React from "react";
import GameContent from "./GameContent";
import Title from "./Title";
import "../../css/main.sass"

function Game2048() {

    return (
        <div className='game'>
            <Title/>
            <GameContent/>
        </div>
    );
}

export default Game2048;