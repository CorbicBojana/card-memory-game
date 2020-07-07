import React from "react";

import "./board.css";

import Card from "../card";

function Board(props) {
    const { cards, flipped, disabled, solved, time, handleClick } = props;

    return(
        <div className="game">
            <h1 className="page-title">Card Memory Game</h1>
            <div className="game-container">
                <div className="game-info-container">
                    <div className="game-info">
                        Time <span id="time-remaining">{time}</span>
                    </div>
                    <div className="game-info">
                        Flips <span id="flips">0</span>
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