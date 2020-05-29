import {describe, expect} from "@jest/globals";
import calculateWinRate from "./calculateWinRate.js";


const noGamesPlayed = calculateWinRate(0, 0);
const input = calculateWinRate(1, 1);
const output = 50;

describe("Calculate win rate", () => {
    test("No played Games", () => {
        expect(noGamesPlayed).toBe(0);
    });
    test("Calculate rate", () => {
        expect(input).toBe(output);
    });
});
