import moveCellsLeft from "./moveCellsLeft";
import sumCellsLeft from "./sumCellsLeft";
import updateTableWithRandomCell from "./updateTableWithRandomCell";
import findRandomEmptyCell from "./findRandomEmptyCell";

const moveLeftHandler = (board) => {

    const cellsMoved = moveCellsLeft(board);
    const summedEqualCells = sumCellsLeft(cellsMoved);
    return updateTableWithRandomCell(summedEqualCells, findRandomEmptyCell(summedEqualCells));
};

export default moveLeftHandler;