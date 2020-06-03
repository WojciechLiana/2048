import {describe, expect} from "@jest/globals";
import {sumCellsDown} from "./sumCellsDown";
import {updateRowAfterSum} from "./sumCellsDown";

const board = [[null, null, null, null], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]];
const output = [[null, null, null, null], [null, null, 4, 4], [null, null, 4, 4], [null, null, 4, 4]];

describe("Sum cells up", () => {

    test("sum up", () => {
        expect(sumCellsDown(board)).toEqual(output);
    });

    test("update row to 4 cells", () => {
        expect(updateRowAfterSum([2, 4])).toEqual([null, null, 2, 4])
    });

    test("update row to 4 cells", () => {
        expect(updateRowAfterSum([2, 2, 2, 2])).toEqual([2, 2, 2, 2])
    });
});