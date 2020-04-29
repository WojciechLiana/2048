import React from "react";
import calculateWinRate from "../logic/calculateWinRate";

function Stats({wins, losts, resetStats}) {

    return (
        <div>
            <div>Games won: {wins}</div>
            <div>Games lost: {losts}</div>
            <div>You have won {calculateWinRate(wins, losts)}% games.</div>
            <button onClick={()=>resetStats()}>Reset Statistics</button>
        </div>
    );
}

export default Stats;