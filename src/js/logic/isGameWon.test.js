import {describe, expect} from "@jest/globals";
import isGameWon from "./isGameWon";

const boardWon = [[2, 2048, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]];
const board = [[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]];

describe("Check if game is won", () => {

    test("Game won", () => {
        expect(isGameWon(boardWon)).toBeTruthy();
    });
    test("Game not won", () => {
        expect(isGameWon(board)).toBeFalsy();
    });
});