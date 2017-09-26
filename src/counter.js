import React from 'react'

class Counter extends React.Component {

  state = {
    count: 0
  }

  handleIncreamentButtonClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleDecreamentButtonClick2 = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.handleIncreamentButtonClick}>Count up!</button>
        <button onClick={this.handleDecreamentButtonClick2}>Count down!</button>
      </div>
    )
  }
}

export default Counter
