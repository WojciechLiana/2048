const calculateWinRate = (wins, losts) => wins + losts !== 0 ?
    Math.round(wins / (losts + wins) * 100) :
    0;

export default calculateWinRate;