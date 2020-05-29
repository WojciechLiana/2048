import {describe, expect} from "@jest/globals";

import checkGame from "./checkIfGameIsLost";

const boardLost = [[1, 2, 3, 4],
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8]];

const boardNotLost = [[1, 2, 3, 4], [null, 1, 2, 3], [4, 2, 1, 2], [null, 4, 3, 2]];

describe('Check if Game is Lost', () => {
    test('Lost board', () => {
        expect(checkGame(boardLost)).toBeTruthy();
    });
    test('Board not lost', () => {
        expect(checkGame(boardNotLost)).toBeFalsy();
    });
});