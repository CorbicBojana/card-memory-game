import React from "react";

import "./start-game.css";

function StartGame(props) {
    const { handleChange, handleStartClick } = props;

    return(
        <div className="overlay-text visible">
            <h1 className="page-title page-title-small">Card Memory Game</h1>
            <select className="select" onChange={handleChange}>
                <option className="select-option" value="easy">Easy</option>
                <option className="select-option" value="medium">Medium</option>
                <option className="select-option" value="hard">Hard</option>
            </select>
            <button className="button" onClick={handleStartClick}>Click to Start</button>
        </div>
    )
}

export default StartGame;