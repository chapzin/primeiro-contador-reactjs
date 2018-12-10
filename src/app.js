import React, { Component } from 'react'

export default class App extends Component {
  state = {
    contador: 0
  }

  increment = () => {
    this.setState({ contador: this.state.contador + 1 })
  }
  decrement = () => {
    this.setState({ contador: this.state.contador - 1 })
  }

  clear = () => {
    this.setState({ contador: 0 })
  }

  render() {
    return (
      <div className="App">
        <h1>O poder do contador</h1>
        <h2>O contador gosta de contar</h2>
        <h3> Valor: {this.state.contador} </h3>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.clear}>Clear</button>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
