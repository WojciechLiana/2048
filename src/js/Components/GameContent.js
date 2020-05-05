import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import NewGame from "./NewGame";
import About from "./About";
import Rules from "./Rules";
import Stats from "./Stats";
import resetStatistics from "../logic/resetStatistics";
import MenuPanel from "./MenuPanel";

function GameContent() {

    const [wins, setWins] = React.useState(0);
    const [losts, setLosts] = React.useState(0);

    return (
        <Router>
            <MenuPanel/>

            <Route path="/newGame" render={() =>
                <NewGame
                    increaseLosts={() => setLosts(losts + 1)}
                    increaseWins={() => setWins(wins + 1)}
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