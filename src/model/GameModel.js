// src/model/GameModel.js
class GameModel {
    constructor(initialCards) {
        this.initialCards = initialCards;
        this.cards = [];
        this.firstCard = null;
        this.secondCard = null;
        this.lockBoard = false;
        this.score = 0;
        this.highScore = 0;
        this.resetGame();
    }

    shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    resetGame() {
        this.cards = this.shuffleArray(this.initialCards.map(card => ({
            ...card,
            flipped: false, // Reset flipped state
            matched: false // Reset matched state
        })));
        this.score = 0;
        this.firstCard = null;
        this.secondCard = null;
        this.lockBoard = false;
    }

    flipCard(cardId) {
        if (this.lockBoard) return;
        const card = this.cards.find(c => c.id === cardId);
        if (!card || card.flipped) return;

        if (!this.firstCard) {
            this.firstCard = card;
            card.flipped = true;
            return;
        }

        this.secondCard = card;
        card.flipped = true;
        this.lockBoard = true;

        if (this.firstCard.value === this.secondCard.value) {
            this.firstCard.matched = true;
            this.secondCard.matched = true;
            this.score += 10;
            if (this.score > this.highScore) {
                this.highScore = this.score;
            }
            this.resetBoard();
        } else {
            setTimeout(() => {
                this.firstCard.flipped = false;
                this.secondCard.flipped = false;
                this.resetBoard();
            }, 1000);
        }
    }

    resetBoard() {
        this.firstCard = null;
        this.secondCard = null;
        this.lockBoard = false;
    }
}

export default GameModel;