import React from "react";
import {Link} from "react-router-dom";
import MenuButton from "./MenuButton";

function MenuPanel() {

    return(
        <div className='menuButtons'>
            <Link to="/newGame"><MenuButton label='New Game'/></Link>
            <Link to="/rules"><MenuButton label='Rules'/></Link>
            <Link to="/stats"><MenuButton label='Stats'/></Link>
            <Link to="/about"><MenuButton label='About'/></Link>
            <button onClick={() => window.close()}>Exit</button>
        </div>
    );
}

export default MenuPanel;