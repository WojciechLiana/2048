import {describe, expect} from "@jest/globals";
import checkIfMoveWasDone from "./checkIfMoveWasDone";

const inputTable = [[2,2,2,2],[null, null, null, null],[null, null, null, null],[null, null, null, null]];
const outputEqualInput = [[2,2,2,2],[null, null, null, null],[null, null, null, null],[null, null, null, null]];
const output = [[null, null, null, null],[2,2,2,2],[null, null, null, null],[null, null, null, null]];

describe("Check if move was done", () => {
  test("No move", ()=>{
     expect(checkIfMoveWasDone(inputTable, outputEqualInput)).toBeFalsy();
  });
    test("Move", ()=>{
        expect(checkIfMoveWasDone(inputTable, output)).toBeTruthy();
    });
});