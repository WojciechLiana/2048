import React, {useEffect} from "react";
import TryAgain from "./TryAgain";

function Win({increaseWins, tryAgainFnc}) {

    useEffect(() => {
        increaseWins();
        window.onkeydown = null;}
)
    ;

    return (
        <div className='win'>
            <span>You Win!</span>
            <TryAgain tryAgain={() => tryAgainFnc()} label='Play Again'/>
        </div>)
}

export default Win;