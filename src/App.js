import React, { useState, useEffect } from "react";

import "./App.css";

import StartGame from "./components/start-game";
import Board from "./components/board";
import EndGame from "./components/end-game";

import { initialCards, initialCardsMedium, initialCardsHard } from "./initialCards";

function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [start, setStart] = useState(false);
  const [restart, setRestart] = useState(false);
  const [time, setTime] = useState(100);
  const [flip, setFlip] = useState(0);
  const [gameLevel, setGameLevel] = useState("easy");

  useEffect(() => {
    setCards(initialCards());
    if (gameLevel === "medium") {
      setCards(initialCardsMedium())
    }
    if (gameLevel === "hard") {
      setCards(initialCardsHard())
    }
  },[gameLevel]);

  useEffect(() => {
    preloadImages()
  }, [cards]);

  useEffect(() => {
    if(!start) return

    let interval = null;
    
    if(interval) return false
    interval = setInterval(() => {
        setTime(time => time - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start, time]);

  const handleChange = e => {
    const level = e.target.value;
    setGameLevel(level);
  }

  const handleStartClick = () => {
    setStart(true);
  }

  const handleRestartClick = () => {
    setCards(initialCards());
    setSolved([]);
    setRestart(true);
    setTime(100);
    setFlip(0);
  }

  const handleClick = id => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      setFlip(flip => flip + 1)
      if (sameCardClicked(id)) return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 2000)
      }
    }
  }

  const sameCardClicked = id => flipped.includes(id);

  const isMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type
  }  

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  }

  const preloadImages = () => {
    cards.map(card => {
      const src = `/img/${card.type}.png`
      console.log(src)
      new Image().src = src
    })
  }

  return(
    <>
      {
        start ?
        <Board 
        cards={cards} 
        flipped={flipped} 
        disabled={disabled} 
        solved={solved} 
        time={time}
        flip={flip}
        handleClick={handleClick} 
        /> :
        <StartGame
        handleChange={handleChange} 
        handleStartClick={handleStartClick}/>
      }
      {
        (time === 0 || cards.length === solved?.length) && <EndGame cards={cards} solved={solved} restart={restart} time={time} handleRestartClick={handleRestartClick} />
      }
    </>
  )
}

export default App;