import React from 'react'
import Card from './card'
import './game.css'

const photos = [
  "/images/kitten-1.jpg",
  "/images/kitten-2.jpg",
  "/images/kitten-3.jpg",
  "/images/kitten-4.jpg",
  "/images/kitten-5.jpg",
  "/images/kitten-6.jpg"
]

class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: this.setupGame()
    }
  }

  setupGame = () => {
    const duplicatedPhotos = photos.concat(photos)
    return this.shuffleArray(
      duplicatedPhotos.map((url, index) => {
        return {
          key: index,
          src: url,
          isFlipped: false,
          isMatched: false
        }
      })
    )
  }

  shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {
    return (
      <div className="game">
        <h1>Memory Game</h1>
        {this.state.cards.map(this.renderCard)}
      </div>
    )
  }

  renderCard(card) {
    return <Card
      key={card.key}
      src={card.src}
      isFlipped={card.isFlipped}
      isMatched={card.isMatched}
    />
  }
}

export default Game
