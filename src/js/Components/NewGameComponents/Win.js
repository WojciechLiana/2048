import React, {useEffect} from "react";

function Win({increaseWins}) {

    useEffect(() => increaseWins());

    return (
        <div>
            You Win!
        </div>)
}

export default Win;