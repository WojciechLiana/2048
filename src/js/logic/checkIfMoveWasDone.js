const checkIfMoveWasDone = (prevState, currState) => {
    for (let row = 0; row < 5; row++) {
        for (let cell = 0; cell < 5; cell++) {
            if (prevState[row][cell] !== currState[row][cell]) {
                return true;
            }
        }
    }
    return false;
};

export default checkIfMoveWasDone;