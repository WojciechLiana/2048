import moveCellsUp from "./moveCellsUp";
import put2inRandomEmptyCell from "./put2inRandomEmptyCell";
import findRandomEmptyCell from "./findRandomEmptyCell";
import {sumCellsUp} from "./sumCellsUp";
import checkIfMoveWasDone from "./checkIfMoveWasDone";

const moveUpHandler = (board) => {
    const cellsMovedUp = moveCellsUp(board);
    const summedEqualCells = sumCellsUp(cellsMovedUp);

    return checkIfMoveWasDone(board, summedEqualCells) ?
        put2inRandomEmptyCell(summedEqualCells, findRandomEmptyCell(summedEqualCells)) :
        board;
};

export default moveUpHandler;