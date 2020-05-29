import {describe, expect} from "@jest/globals";
import moveCellsDown from "./moveCellsDown";

const boardWithNoMove = [[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]];
const board = [[2, 2, 2, null], [2, 2, 2, null], [2, 2, 2, null], [2, 2, 2, null]];
const output = [[null, 2, 2, 2], [null, 2, 2, 2], [null, 2, 2, 2], [null, 2, 2, 2]];

describe("Move down", () => {

    test("no move", () => {
        expect(moveCellsDown(boardWithNoMove)).toEqual(boardWithNoMove);
    });

    test("move down", () => {
        expect(moveCellsDown(board)).toEqual(output);
    });
});