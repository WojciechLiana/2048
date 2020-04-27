import moveLeftHandler from "./moveLeftHandler";
import moveRightHandler from "./moveRightHandler";
import moveDownHandler from "./moveDownHandler";
import moveUpHandler from "./moveUpHandler";

const handleKeyboardArrows = (keyPressed, board) => {

    switch (keyPressed) {
        case 'ArrowUp' :
            return moveUpHandler(board);
        case 'ArrowDown' :
            return moveDownHandler(board);
        case 'ArrowLeft' :
            return moveLeftHandler(board);
        case 'ArrowRight' :
            return moveRightHandler(board);
        default :
            return board;
    }
};

export default handleKeyboardArrows;