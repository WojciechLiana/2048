import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import NewGame from "./NewGame";
import About from "./About";
import Rules from "./Rules";
import Stats from "./Stats";
import MenuButton from "./MenuButton";
import Navbar from "./Navbar";

function Menu(){

    return (
        <Router>
            <Navbar/>
            <Link to="/newGame"><MenuButton label='New Game'/></Link>
            <Link to="/rules"><MenuButton label='Rules'/></Link>
            <Link to="/stats"><MenuButton label='Stats'/></Link>
            <Link to="/about"><MenuButton label='About'/></Link>
            <MenuButton label='Exit' action={() => window.close()}/>

            <Route path="/newGame" component={NewGame}/>
            <Route path="/about" component={About}/>
            <Route path="/rules" component={Rules}/>
            <Route path="/stats" component={Stats}/>
        </Router>
    );
}

export default Menu;