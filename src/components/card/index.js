import React from "react";

import "./card.css";

function Card(props) {
    const { id, type, flipped, solved, disabled, handleClick } = props;

    return(
        <div className={flipped || solved ? "card visible" : "card"} onClick={() => disabled ? null : handleClick(id)}>
            <div className="card-back card-face">
                <img className="star star-top-left" src={require("../../assets/images/star.svg")} alt="star" />
                <img className="star star-top-right" src={require("../../assets/images/star.svg")} alt="star" />
                <img className="star star-bottom-left" src={require("../../assets/images/star.svg")} alt="star" />
                <img className="star star-bottom-right" src={require("../../assets/images/star.svg")} alt="star" />
                <img className="tinkerbell" src={require("../../assets/images/tinkerbell.svg")} alt="tinkerbell" />
            </div>
            <div className="card-front card-face">
            <img className="star star-top-left" src={require("../../assets/images/star.svg")} alt="star" />
                <img className="star star-top-right" src={require("../../assets/images/star.svg")} alt="star" />
                <img className="star star-bottom-left" src={require("../../assets/images/star.svg")} alt="star" />
                <img className="star star-bottom-right" src={require("../../assets/images/star.svg")} alt="star" />
                <img className="card-value" src={require(`../../assets/images/${type}.png`)} alt={type} />
            </div>
        </div>
    )
}

export default Card;