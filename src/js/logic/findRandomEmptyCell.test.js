import {describe, expect} from "@jest/globals";
import findRandomEmptyCell from "./findRandomEmptyCell";


const boardWithPossibleMoves = [[0, 5, null, null], [null, 5, null, 6], [1, null, 2, null], [9, null, 3, 4]];

describe("Find random empty cell", () => {
    test("find null", () => {
        for (let i = 0; i < 30; i++) {
            const output = findRandomEmptyCell(boardWithPossibleMoves);
            expect(boardWithPossibleMoves[output[0]][output[1]]).toBe(null);
        }
    });
});