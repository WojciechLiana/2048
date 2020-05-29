import {describe, expect} from "@jest/globals";
import handleKeyboardArrows from "./handleKeyboardArrows";

const board = [[1,null,0,2],[null, null, 2, 0],[2,2,2,2],[null,2,null,2]];

const keyW = 'KeyW';

describe("Check possible moves", () => {
    test("left right possible", () => {

        expect(typeof handleKeyboardArrows(keyW, board)).toEqual('object');

    });
});