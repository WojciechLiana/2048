import React from "react";
import MenuButton from "./MenuButton";

function Menu() {

    return (
        <div>
            <MenuButton label='New Game'/>
            <MenuButton label='Rules'/>
            <MenuButton label='History'/>
            <MenuButton label='About'/>
            <MenuButton label='Exit' action={()=>window.close()}/>
        </div>
    );
}

export default Menu;