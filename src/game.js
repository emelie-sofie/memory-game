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

let numberOfCardsFlipped = 0

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
    //get card by id, toggle class 'flipped'
    const changedStateArray = this.state.cards.map(card => {
      if (cardId === card.uuid) {
        card.isFlipped = true
        //card.isFlipped ? (card.isFlipped = false) : (card.isFlipped = true)
        //card.isMatched ? (card.isMatched = false) : (card.isMatched = true)
        console.log("change class of this card")
      }
      return card
    })
    console.log("setting state first time...")
    this.setState({cards: changedStateArray}, this.checkIfCardsMatch)
  }

  checkIfCardsMatch = () => {
    const flippedCards = this.state.cards.filter(card => (
      card.isFlipped
    ))
    if (flippedCards.length === 2) {
      if (flippedCards[0].src === flippedCards[1].src) {
        flippedCards[0].isMatched = true
        flippedCards[1].isMatched = true
      }
      setTimeout(this.flipAllCardsBackOver, 800);
    }
  }

  flipAllCardsBackOver = () => {
    const flippedCards = this.state.cards.map(card => {
      card.isFlipped = false
      return card
    })
    this.setState({cards: flippedCards}, this.isGameFinished)
  }

  isGameFinished = () => {
    const cardsLeftToMatch = this.state.cards.filter(card => {
      return !card.isMatched
    })
    if (cardsLeftToMatch.length === 0) {
      this.setupGame();
    }
  }

}

export default Game
