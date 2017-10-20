import React, { Component } from 'react'
import './game.css'

class GameForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numberOfCards: 4,
      playerName: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose number of cards:
          <select name="numberOfCards" default={this.state.numberOfCards} onChange={this.handleInputChange}>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="18">18</option>
          </select>
        </label>
        <label>
          Name:
          <input
            required
            type="text"
            name="playerName"
            value={this.state.playerName}
            onChange={this.handleInputChange} />
        </label>
        <input
          type="submit"
          className="resetButton w3-animate-opacity"
          value="Let's play!" />
      </form>
    )
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    this.props.playNewGame(this.state.numberOfCards, this.state.playerName)
    event.preventDefault();
  }

}

export default GameForm
