import React, {useEffect} from "react";
import TryAgain from "./TryAgain";

function Lost({increaseLosts, tryAgainFnc}) {

    useEffect(() => increaseLosts());

    return (
        <div className='lost'>
            You Lost!
            <TryAgain tryAgain={()=>tryAgainFnc()}/>
        </div>)
}

export default Lost;