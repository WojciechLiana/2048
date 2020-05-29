import {describe, expect} from "@jest/globals";
import moveCellsLeft from "./moveCellsLeft";

const boardWithNoMove = [[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]];
const board = [[null, null, null, null], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]];
const output = [[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [null, null, null, null]];

describe("Move left", () => {

    test("no move", () => {
        expect(moveCellsLeft(boardWithNoMove)).toEqual(boardWithNoMove);
    });

    test("move left", () => {
        expect(moveCellsLeft(board)).toEqual(output);
    });
});