import React from "react";
import calculateWinRate from "../logic/calculateWinRate";

function Stats({winLostTab}) {

    return (
        <div>
            <div>Games won: {winLostTab[0]}</div>
            <div>Games lost: {winLostTab[1]}</div>
            <div>You have won {calculateWinRate(winLostTab)}% games.</div>
        </div>
    );
}

export default Stats;