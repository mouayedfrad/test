// src/component/Card.js
import React from 'react';

const Card = ({ card, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            {card.flipped ? card.value : "?"}
        </div>
    );
};

export default Card;