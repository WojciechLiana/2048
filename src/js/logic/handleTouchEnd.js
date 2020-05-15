import moveLeftHandler from "./moveLeftHandler";
import moveRightHandler from "./moveRightHandler";
import moveUpHandler from "./moveUpHandler";
import moveDownHandler from "./moveDownHandler";

function handleTouchEnd(event, distanceX, distanceY) {
    if (Math.abs(distanceX) > Math.abs(distanceY)) {
        if (this.state.touchStart.X > event.changedTouches[0].clientX) {
            this.clickHandler(moveLeftHandler)
        } else {
            this.clickHandler(moveRightHandler)
        }
    } else if (Math.abs(distanceX) < Math.abs(distanceY)) {
        if (this.state.touchStart.Y > event.changedTouches[0].clientY) {
            this.clickHandler(moveUpHandler)
        } else {
            this.clickHandler(moveDownHandler)
        }
    }
}

export default handleTouchEnd;