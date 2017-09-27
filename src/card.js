import React from 'react'
import './card.css' // Just normal css, react injects it into the <head> component

// Defining a card component which inherits functions from React.Component
class Card extends React.Component {

  // Invoked when mounting the component
  render() {
    // Render function needs to return JSX
    // We render this card in Game.js by using <Card />
    // Props become an object so, classname "foo" becomes { className: "foo" }
    // on this.props, and onClick becomes { onClick: () => {} }
    return (
      <div className="card" onClick={this.handleClick}>
        <img src={this.props.src} alt="" />
      </div>
    )
  }
  // fat arrows keeps the scope of 'this' (es6)
  handleClick = () => {
    this.props.onClick(this.props.src)
  }
}

export default Card
