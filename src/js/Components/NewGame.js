import React from "react";
import Board from "./NewGameComponents/Board";
import ArrowsPanel from "./NewGameComponents/ArrowsPanel";
import Win from "./NewGameComponents/Win";
import checkIfGameIsLost from "../logic/checkIfGameIsLost";
import isGameWon from "../logic/isGameWon";
import handleKeyboardArrows from "../logic/handleKeyboardArrows";
import Lost from "./NewGameComponents/Lost";
import Undo from "./NewGameComponents/Undo";
import ResetBtn from "./NewGameComponents/ResetBtn";

class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = [
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, 2, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null]
        ];
        this.state = {
            board: this.initialState
        };
    }

    clickHandler(handlingFunctionChangingState) {
        this.setState({board: handlingFunctionChangingState(this.state.board)});
    };

    resetGameHandler() {
        this.setState({board: this.initialState});
        this.props.increaseLosts();
    }

    componentDidMount() {
        localStorage.removeItem('board');
        this.setState({board: JSON.parse(localStorage.getItem('board')) || this.state.board});
    }

    componentWillUnmount() {
        localStorage.setItem('board', JSON.stringify(this.state.board));
    }

    render() {

        return (
            checkIfGameIsLost(this.state.board) ?
                <Lost increaseLosts={() => this.props.increaseLosts}/> :
                (isGameWon(this.state.board) ?
                        <Win increaseWins={() => this.props.increaseWins}/> :
                        <div tabIndex={0} onKeyDown={(e) => this.setState(
                            {board: handleKeyboardArrows(e.nativeEvent.code, this.state.board)})}>
                            <Board board={this.state.board}/>
                            <div className='bottomPanel'>
                                <ArrowsPanel clickHandler={(handlingFunction) => this.clickHandler(handlingFunction)}/>
                                <Undo/>
                                <ResetBtn resetFunction={() => this.resetGameHandler()}/>
                            </div>
                        </div>
                )
        );
    }
}

export default NewGame;