import {describe, expect} from "@jest/globals";
import {sumCellsUp} from "./sumCellsUp";
import {updateRowAfterSum} from "./sumCellsUp";

const board = [[null, null, null, null], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]];
const output = [[null, null, null, null], [4, 4, null, null], [4, 4, null, null], [4, 4, null, null]];

describe("Sum cells up", () => {

    test("sum up", () => {
        expect(sumCellsUp(board)).toEqual(output);
    });

    test("update row to 4 cells", () => {
       expect(updateRowAfterSum([2])).toEqual([2, null, null, null])
    });

    test("update row to 4 cells", () => {
        expect(updateRowAfterSum([2, 2, 2, 2])).toEqual([2, 2, 2, 2])
    });
});