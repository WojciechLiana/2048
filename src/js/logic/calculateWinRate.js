const calculateWinRate = (winLostTab) => winLostTab[1] !== 0 ?
    winLostTab[0] / (winLostTab[0] + winLostTab[1]) * 100 :
    0;

export default calculateWinRate;