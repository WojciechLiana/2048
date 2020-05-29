import {describe, expect} from "@jest/globals";
import moveCellsRight from "./moveCellsRight";

const boardWithNoMove = [[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]];
const output = [[null, null, null, null], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]];
const board = [[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [null, null, null, null]];

describe("Move right", () => {

    test("no move", () => {
        expect(moveCellsRight(boardWithNoMove)).toEqual(boardWithNoMove);
    });

    test("move right", () => {
        expect(moveCellsRight(board)).toEqual(output);
    });
});