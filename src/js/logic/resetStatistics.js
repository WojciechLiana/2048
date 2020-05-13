const resetStatistics = (setWinsTo, setLosesTo) => {
    setWinsTo(0);
    setLosesTo(0);
    localStorage.removeItem('wins');
    localStorage.removeItem('losts');
};

export default resetStatistics;