import React from "react";

function Stats({wins, losts}) {

    const winRate = (wins, losts) => wins / (wins + losts) * 100;

    return (
        <div>
            <div>Games won: {wins}</div>
            <div>Games lost: {losts}</div>
            <div>You have won {winRate(wins, losts)}% games.</div>
        </div>
    );
}

export default Stats;