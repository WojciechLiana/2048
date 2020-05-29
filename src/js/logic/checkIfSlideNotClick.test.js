import {describe, expect} from "@jest/globals";
import checkIfSlideNotClick from "./checkIfSlideNotClick";

const moveX = 30;
const moveY = -50;
const slideMinMove = window.innerWidth/4;

describe("Check empty cell", () => {
    test("click", () => {
        if(Math.abs(moveX) > slideMinMove || Math.abs(moveY) > slideMinMove){
            expect(checkIfSlideNotClick(moveX, moveY)).toBeTruthy();
        } else {
            expect(checkIfSlideNotClick(moveX, moveY)).toBeFalsy();
        }
    });

});