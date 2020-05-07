import React from "react";

function TryAgain({tryAgain}) {

    return(
        <button onClick={()=>tryAgain()}>Try Again</button>
    );
}

export default TryAgain;