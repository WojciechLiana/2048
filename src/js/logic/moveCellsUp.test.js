import {describe, expect} from "@jest/globals";
import moveCellsUp from "./moveCellsUp";

const boardWithNoMove = [[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]];
const board = [[null, 2, 2, 2], [null, 2, 2, 2], [null, 2, 2, 2], [null, 2, 2, 2]];
const output = [[2, 2, 2, null], [2, 2, 2, null], [2, 2, 2, null], [2, 2, 2, null]];

describe("Move up", () => {

    test("no move", () => {
        expect(moveCellsUp(boardWithNoMove)).toEqual(boardWithNoMove);
    });

    test("move up", () => {
        expect(moveCellsUp(board)).toEqual(output);
    });
});