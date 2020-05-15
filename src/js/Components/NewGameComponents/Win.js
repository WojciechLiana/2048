import React, {useEffect} from "react";
import TryAgain from "./TryAgain";

function Win({increaseWins, tryAgainFnc}) {

    useEffect(() => increaseWins());
    useEffect(() => window.onkeydown = undefined);
    useEffect(() => window.ontouchstart = undefined);
    useEffect(() => window.ontouchend = undefined);

    return (
        <div className='win'>
            <span>You Win!</span>
            <TryAgain tryAgain={() => tryAgainFnc()} label='Play Again'/>
        </div>)
}

export default Win;