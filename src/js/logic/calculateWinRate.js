const calculateWinRate = (wins, losts) => wins + losts !== 0 ?
    wins / (losts + wins) * 100 :
    0;

export default calculateWinRate;