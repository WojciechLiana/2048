import {describe, expect} from "@jest/globals";
import put2inRandomEmptyCell from "./put2inRandomEmptyCell";

const board = [[null, null, null, null], [null, null, null, null],
    [null, null, null, null], [null, null, null, null]];

const coordinates = [1,1];

const output = [[null, null, null, null], [null, 2, null, null],
    [null, null, null, null], [null, null, null, null]];

describe("Add 2 in random cell", ()=>{
   test("Add 2", ()=>{
       expect(put2inRandomEmptyCell(board, coordinates)).toEqual(output);
   }) ;
});
