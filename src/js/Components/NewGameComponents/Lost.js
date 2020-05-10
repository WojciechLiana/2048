import React, {useEffect} from "react";
import TryAgain from "./TryAgain";

function Lost({increaseLosts, tryAgainFnc}) {

    useEffect(() => increaseLosts());

    return (
        <div className='lost'>
            <span>You Lost!</span>
            <TryAgain tryAgain={() => tryAgainFnc()} label='Try Again'/>
        </div>)
}

export default Lost;