import React from 'react'
import Card from './card'
import shuffle from 'shuffle-array'
import uuidv4 from 'uuid/v4'
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

    // These objects in the array ends up on the state
    return shuffledPhotos.map(url => ({
      uuid: uuidv4(),
      key: uuidv4(),
      src: url,
      isFlipped: false,
      isMatched: false
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
      uuid={card.uuid}
      key={card.key}
      src={card.src}
      isFlipped={card.isFlipped}
      isMatched={card.isMatched}
      whenFlipped={this.handleCardFlip}
    />
  }

  // Called from Card passing the card id
  handleCardFlip = (cardId) => {
    //console.log(this.state.cards[cardId])
    alert("Card was flipped: " + cardId)
  }

}

export default Game
