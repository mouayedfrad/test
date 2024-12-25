// src/controller/GameController.js
import React, { useState, useEffect } from 'react';
import GameModel from '../model/GameModel';
import Card from '../component/Card';

// Updated initialCards with icons
const initialCards = [
    { id: 1, matched: false, value: '🌟' },
    { id: 2, matched: false, value: '🌟' },
    { id: 3, matched: false, value: '🌙' },
    { id: 4, matched: false, value: '🌙' },
    { id: 5, matched: false, value: '🌍' },
    { id: 6, matched: false, value: '🌍' },
    { id: 7, matched: false, value: '🌈' },
    { id: 8, matched: false, value: '🌈' },
    { id: 9, matched: false, value: '🍎' },
    { id: 10, matched: false, value: '🍎' },
    { id: 11, matched: false, value: '🎈' },
    { id: 12, matched: false, value: '🎈' },
    { id: 13, matched: false, value: '🎨' },
    { id: 14, matched: false, value: '🎨' },
    { id: 15, matched: false, value: '🎭' },
    { id: 16, matched: false, value: '🎭' },
];

export default function GameController() {
    const [model] = useState(new GameModel(initialCards));
    const [cards, setCards] = useState(model.cards);
    const [score, setScore] = useState(model.score);
    const [highScore, setHighScore] = useState(model.highScore);

    useEffect(() => {
        setCards(model.cards);
        setScore(model.score);
        setHighScore(model.highScore);
    }, [model]);

    const flipCard = (cardId) => {
        model.flipCard(cardId);
        setCards([...model.cards]);
        setScore(model.score);
        setHighScore(model.highScore);
    };

    const resetGame = () => {
        model.resetGame(); // Reset the model state
        setCards([...model.cards]); // Update the cards state
        setScore(model.score); // Reset score
        setHighScore(model.highScore); // Reset high score
    };

    return (
        <>
            <div className="scoreboard">
                <div>Score: {score}</div>
                <div>High Score: {highScore}</div>
                <button onClick={resetGame}>Reset Game</button>
            </div>
            <div className="board">
                {cards.map(card => (
                    <Card key={card.id} card={card} onClick={() => flipCard(card.id)} />
                ))}
            </div>
        </>
    );
}