function checkIfSlideNotClick(directionX, directionY) {

    return Math.abs(directionX) > window.innerWidth / 4 || Math.abs(directionY) > window.innerWidth / 4;

}

export default checkIfSlideNotClick;