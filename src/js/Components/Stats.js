import React from "react";
import calculateWinRate from "../logic/calculateWinRate";

function Stats({wins, losts, resetStats}) {

    return (
        <div className='stats'>
            <div className='statsFrame'>
                <div>Games won: {wins}</div>
                <div>Games lost: {losts}</div>
                <div>You have won {calculateWinRate(wins, losts)}% games.</div>
                <button onClick={() => {
                    resetStats();
                    localStorage.removeItem('wins');
                    localStorage.removeItem('losts');
                }}>Reset Statistics</button>
            </div>
        </div>
    );
}

export default Stats;