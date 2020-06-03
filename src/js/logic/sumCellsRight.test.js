import {describe, expect} from "@jest/globals";
import sumCellsRight from "./sumCellsRight";

const board = [[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]];
const output = [[null, null, null, null], [4, 4, 4, 4], [null, null, null, null], [4, 4, 4, 4]];
const boardWithNoCellsToSum = [[2, 2, 2, 2], [4, 4, 4, 4], [2, 2, 2, 2], [4, 4, 4, 4]];

describe("Sum cells right", () => {

    test("Sum cells", () => {
        expect(sumCellsRight(board)).toEqual(output);
    });

    test("No sum", () => {
        expect(sumCellsRight(boardWithNoCellsToSum)).toEqual(boardWithNoCellsToSum)
    });
});