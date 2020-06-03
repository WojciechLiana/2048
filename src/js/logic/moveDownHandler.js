import moveCellsDown from "./moveCellsDown";
import {sumCellsDown} from "./sumCellsDown";
import put2inRandomEmptyCell from "./put2inRandomEmptyCell";
import findRandomEmptyCell from "./findRandomEmptyCell";
import checkIfMoveWasDone from "./checkIfMoveWasDone";

const moveDownHandler = (board) => {
    const cellsMoved = moveCellsDown(board);
    const summedEqualCells = sumCellsDown(cellsMoved);

    return checkIfMoveWasDone(board, summedEqualCells) ?
        put2inRandomEmptyCell(summedEqualCells, findRandomEmptyCell(summedEqualCells)) :
        board;
};

export default moveDownHandler;