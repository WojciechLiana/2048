import {describe, expect} from "@jest/globals";
import checkEmptyCells from "./checkEmptyCells";

const inputWithNull = [[0, null, 3, 5],[2, null, null, 6],[1, 1, 2, 4],[9, 5, 3, 4]];
const inputWithoutNull = [[0, 5, 3, 5],[2, 5, 3, 6],[1, 1, 2, 4],[9, 5, 3, 4]];

describe("Check empty cell", () => {
    test("testWithNull", () => {
        expect(checkEmptyCells(inputWithNull)).toBeTruthy();
    });

    test("testWithoutNull", () => {
        expect(checkEmptyCells(inputWithoutNull)).toBeFalsy();
    });
});