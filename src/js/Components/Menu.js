import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import NewGame from "./NewGame";
import About from "./About";
import Rules from "./Rules";
import Stats from "./Stats";
import MenuButton from "./MenuButton";
import Navbar from "./Navbar";

function Menu() {

    const [wins, setWins] = React.useState(0);
    const [losts, setLosts] = React.useState(0);


    return (
        <Router>
            <Navbar/>
            <Link to="/newGame"><MenuButton label='New Game'/></Link>
            <Link to="/rules"><MenuButton label='Rules'/></Link>
            <Link to="/stats"><MenuButton label='Stats'/></Link>
            <Link to="/about"><MenuButton label='About'/></Link>
            <button onClick={() => window.close()}>Exit</button>

            <Route path="/newGame" render={() => <NewGame
                increaseLosts={() =>setLosts(losts +1)}
                increaseWins={() =>setWins(wins +1)}
            />}
            />
            <Route path="/about" component={About}/>
            <Route path="/rules" component={Rules}/>
            <Route path="/stats" render={() => <Stats wins={wins} losts={losts}/>}/>
        </Router>
    );
}

export default Menu;