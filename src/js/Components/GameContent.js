import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import NewGame from "./NewGame";
import About from "./About";
import Rules from "./Rules";
import Stats from "./Stats";
import resetStatistics from "../logic/resetStatistics";
import MenuPanel from "./MenuPanel";

function GameContent() {

    const [wins, setWins] = React.useState(localStorage.getItem('wins')? JSON.parse(localStorage.getItem('wins')): 0);
    const [losts, setLosts] = React.useState(localStorage.getItem('losts')? JSON.parse(localStorage.getItem('losts')): 0);

    return (
        <Router>
            <MenuPanel/>

            <Route path="/newGame" render={() =>
                <NewGame
                    increaseLosts={() => {
                        setLosts(losts + 1);
                        localStorage.setItem('losts', losts.toString());
                    }}
                    increaseWins={() => {
                        setWins(wins + 1);
                        localStorage.setItem('wins', wins.toString());
                    }}
                />
            }/>
            <Route path="/about" component={About}/>
            <Route path="/rules" component={Rules}/>
            <Route path="/stats" render={() =>
                <Stats
                    wins={wins}
                    losts={losts}
                    resetStats={() => resetStatistics(setWins, setLosts)}
                />
            }/>
        </Router>
    );
}

export default GameContent;