import moveCellsUp from "./moveCellsUp";
import updateTableWithRandomCell from "./updateTableWithRandomCell";
import findRandomEmptyCell from "./findRandomEmptyCell";

const moveUpHandler = (board)=> {
    const cellsMovedUp = moveCellsUp(board);
    return updateTableWithRandomCell(cellsMovedUp, findRandomEmptyCell(cellsMovedUp));
};

export default moveUpHandler;