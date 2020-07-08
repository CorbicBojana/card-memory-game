import React from "react";

import "./board.css";

import Card from "../card";

function Board(props) {
    const { cards, flipped, disabled, solved, time, flip, handleClick } = props;

    return(
        <div className="board">
            <h1 className="page-title">Card Memory Game</h1>
            <div className="game-container">
                <div className="game-info-container">
                    <div className="game-info">
                        Time <span>{time}</span>
                    </div>
                    <div className="game-info">
                        Flip <span>{flip}</span>
                    </div>
                </div>
                {cards.map((card) => (
                    <Card 
                    key={card.id}
                    id={card.id}
                    type={card.type}
                    flipped={flipped.includes(card.id)}
                    disabled={disabled || solved.includes(card.id)}
                    solved={solved.includes(card.id)}
                    handleClick={handleClick}
                    />
                ))}
            </div>
        </div>
    )
}

export default Board;