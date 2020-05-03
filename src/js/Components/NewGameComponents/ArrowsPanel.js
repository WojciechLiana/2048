import React from "react";
import Arrow from "./Arrow";
import moveUpHandler from "../../logic/moveUpHandler";
import moveLeftHandler from "../../logic/moveLeftHandler";
import moveRightHandler from "../../logic/moveRightHandler";
import moveDownHandler from "../../logic/moveDownHandler";

function ArrowsPanel({clickHandler}) {

    return (
        <div>
            <div>
                <Arrow direction='up' onClick={() => clickHandler(moveUpHandler)}/>
            </div>
            <div>
                <Arrow direction='left' onClick={() => clickHandler(moveLeftHandler)}/>
                <Arrow direction='right' onClick={() => clickHandler(moveRightHandler)}/>
            </div>
            <div>
                <Arrow direction='down' onClick={() => clickHandler(moveDownHandler)}/>
            </div>

        </div>
    );
}

export default ArrowsPanel;