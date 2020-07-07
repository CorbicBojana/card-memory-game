import React from "react";

import "./start-game.css";

function StartGame(props) {
    const { handleStartClick } = props;

    return(
        <div className="overlay-text visible">
            <h1 className="page-title page-title-small">Card Memory Game</h1>
            <button className="button" onClick={handleStartClick}>Click to Start</button>
        </div>
    )
}

export default StartGame;