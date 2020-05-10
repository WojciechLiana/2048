import React from "react";

function TryAgain({tryAgain, label}) {

    return (
        <button onClick={() => tryAgain()}>{label}</button>
    );
}

export default TryAgain;