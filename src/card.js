import React, { Component } from 'react'
import './card.css' // Just normal css, react injects it into the <head> component

// Defining a card component which inherits functions from React.Component
class Card extends Component {

  // Invoked when mounting the component
  render() {
    /* Render function needs to return JSX
       We render this card in Game.js by using <Card />
       Props become an object so, classname "foo" becomes { className: "foo" }
       on this.props, and onClick becomes { onClick: () => {} } */
    return (
      <div className={this.setClassName()} onClick={this.handleClick}>
        <img src={this.props.src} alt="" />
      </div>
    )
  }
  // fat arrows keeps the scope of 'this' (es6)
  handleClick = () => {
    this.props.whenFlipped(this.props.uuid)
  }

  setClassName = () => {
    if (this.props.isFlipped) {
      return "card flipped"
    } else if (this.props.isMatched) {
      return "card matched"
    } else {
      return "card not-flipped"
    }
  }
}

export default Card
