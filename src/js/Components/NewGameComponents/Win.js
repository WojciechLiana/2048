import React, {useEffect} from "react";
import TryAgain from "./TryAgain";

function Win({increaseWins, tryAgainFnc}) {

    useEffect(() => increaseWins());

    return (
        <div>
            You Win!
            <TryAgain tryAgain={()=>tryAgainFnc()}/>
        </div>)
}

export default Win;