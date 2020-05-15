import React, {useEffect} from "react";
import TryAgain from "./TryAgain";

function Lost({increaseLosts, tryAgainFnc}) {

    useEffect(() => increaseLosts());
    useEffect(() => window.onkeydown = undefined);
    useEffect(() => window.ontouchstart = undefined);
    useEffect(() => window.ontouchend = undefined);

    return (
        <div className='lost'>
            <span>You Lost!</span>
            <TryAgain tryAgain={() => tryAgainFnc()} label='Try Again'/>
        </div>)
}

export default Lost;