import {describe, expect} from "@jest/globals";
import sumCellsLeft from "./sumCellsLeft";

const board = [[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]];
const output = [[4, 4, 4, 4], [null, null, null, null], [4, 4, 4, 4], [null, null, null, null]];
const boardWithNoCellsToSum = [[2, 2, 2, 2], [4, 4, 4, 4], [6, 6, 6, 6], [8, 8, 8, 8]];

describe("Sum cells left", () => {

    test("Sum cells", () => {
        expect(sumCellsLeft(board)).toEqual(output);
    });

    test("No sum", () => {
        expect(sumCellsLeft(boardWithNoCellsToSum)).toEqual(boardWithNoCellsToSum)
    });
});