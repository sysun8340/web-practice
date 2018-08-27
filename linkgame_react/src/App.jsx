import React, { Component } from 'react'
import GameBoard from './components/GameBoard'
import gameBoard from './styles/gameBoard.css'

class App extends Component {

  render() {
    const parameter = {
      row: 10,
      column: 10,
      pictures: 16
    }
    const picArray = Array(16).map((_, index) => index + 1)
    console.log(picArray)
    return (
      <div>
        <GameBoard style={gameBoard} parameter={parameter} />
      </div>
    )
  }
}

export default App
