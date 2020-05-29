import {describe, expect} from "@jest/globals";
import checkPossibleMovesLeftRight from "./checkPossibleMovesLeftRight";

const boardWithPossibleMoves = [[0, 5, 3, null], [2, 5, 3, 6], [1, 1, 2, 4], [9, 5, 3, 4]];
const boardWithNoPossibleMoves = [[0, 5, 3, 5], [2, 4, 7, 6], [1, 1, 2, 4], [9, 5, 3, 1]];

describe("Check possible moves", () => {

    test("left right possible", () => {
        expect(checkPossibleMovesLeftRight(boardWithPossibleMoves)).toBeTruthy();
    });

    test("left right not possible", () => {
        expect(checkPossibleMovesLeftRight(boardWithNoPossibleMoves)).toBeFalsy();

    });
});