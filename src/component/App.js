// src/component/App.js
import React from 'react';
import GameController from '../controller/GameController';
import '../index.css'; // Corrected path to index.css

export default function App() {
    return (
        <div>
            <h1>Flip Card Game</h1>
            <GameController />
        </div>
    );
}