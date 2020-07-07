import React from "react";

import "./end-game.css";

function EndGame(props) {
    const { handleStartClick } = props;
    
    return(
        <div className="overlay-text visible">
            <h1 className="page-title page-title-small">Game Over</h1>
            <button className="button" onClick={handleStartClick}>Click to Start</button>
        </div>
    )
}

export default EndGame;