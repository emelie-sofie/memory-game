import React from 'react'
import Card from './card'
import shuffle from 'shuffle-array'
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
    //const duplicatedPhotos = photos.concat(photos)
    const duplicatedPhotos = [...photos, ...photos]
    const shuffledPhotos = shuffle(duplicatedPhotos)

    return shuffledPhotos.map((url, index) => ({
      id: index,
      src: url
    }))
  }

  render() {
    return (
      <div className="game">
        <h1>Memory Game</h1>
        {this.state.cards.map(this.renderCard)}
      </div>
    )
  }

  /* Create a new instance of the Card component */

  renderCard = (card) => {
    return <Card
      id={card.id}
      key={card.id}
      src={card.src}
      isFlipped={false}
      isMatched={false}
      whenFlipped={this.handleCardFlip}
    />
  }

  // Called from Card passing the card id
  handleCardFlip = (cardId) => {
    alert("Card was flipped: " + cardId)
  }

}

export default Game
