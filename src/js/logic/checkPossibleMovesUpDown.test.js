import {describe, expect} from "@jest/globals";
import checkPossibleMovesUpDown from "./checkPossibleMovesUpDown";

const boardWithPossibleMoves= [[0, 5, 3, null],[2, 5, 3, 6],[1, 1, 2, 4],[9, 5, 3, 4]];
const boardWithNoPossibleMoves= [[0, 5, 3, 5],[2, 4, 7, 6],[1, 3, 2, 4],[9, 5, 3, 1]];

describe("Check possible moves", () => {
    test("up down possible", () => {
        expect(checkPossibleMovesUpDown(boardWithPossibleMoves)).toBeTruthy();

    });
    test("up down not possible", () => {
        expect(checkPossibleMovesUpDown(boardWithNoPossibleMoves)).toBeFalsy();

    });
});