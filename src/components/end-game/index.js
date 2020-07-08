import React from "react";

import "./end-game.css";

function EndGame(props) {
    const { cards, solved, restart, time, handleRestartClick } = props;
    
    return(
        <div className={cards.length === solved?.length || time === 0 || restart  ? "overlay-text visible" : "overlay-text"}>
            <h1 className="page-title page-title-small">Game Over</h1>
            {cards.length === solved?.length &&
                <div className="game-info">
                    Congratulations
                </div>
            }
            <button className="button" onClick={handleRestartClick}>Click to Restart Game</button>
        </div>
    )
}

export default EndGame;