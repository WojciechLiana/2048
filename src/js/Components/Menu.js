import React from "react";
import ButtonsPanel from "./ButtonsPanel";
import Title from "./Title";
import "../../css/menu.sass"

function Menu() {

    return (
        <div className='menu'>
            <Title/>
            <ButtonsPanel/>
        </div>
    );
}

export default Menu;