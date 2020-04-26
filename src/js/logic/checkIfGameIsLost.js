import checkEmptyCells from "./checkEmptyCells";
import checkPossibleMovesLeftRight from "./checkPossibleMovesLeftRight";
import checkPossibleMovesUpDown from "./checkPossibleMovesUpDown";

const checkIfGameIsLost = (board) => {
    return (
        !checkEmptyCells(board) &&
        !checkPossibleMovesLeftRight(board) &&
        !checkPossibleMovesUpDown(board)
    );
};

export default checkIfGameIsLost;