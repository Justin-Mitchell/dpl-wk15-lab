import React, { useState } from 'react'
import Board from './Board'
import { makeInitialBoard } from '../utils/helpers'
import { BOARD_SIZE, WALL, EMPTY, PIECE } from '../utils/constants'
import '../assets/css/game.css'

const Game = () => {
  const initialBoard = makeInitialBoard(BOARD_SIZE)
  const [history, setHistory] = useState([{ squares: initialBoard }])
  const [stepNumber, setStepNumber] = useState(0)
  const [selectedSquares, setSelectedSquares] = useState([-1,-1])

  const handleClick = (currentRow,currentCol) => {
    // Copy data points from STATE
    const cpHistory     = history.slice(0, stepNumber + 1)  // => Array of board history
    const currentBoard  = cpHistory[cpHistory.length -1]    // => Object of current board state { squares: [<board-matrix>]}
    const previousRow = selectedSquares[0]
    const previousCol = selectedSquares[1]
    const hasPreviousSelection = (previousRow !== -1 && previousCol !== -1)

    // the slice method does a "shallow copy" of multidemensional array
    const squares = currentBoard.squares.map((arr) => {
      return arr.slice() // => Make shallow copy of array
    })

    // 1)
    // If the user selects a piece, updates the state
    // of the game with the selected piece and return
    if (squares[currentRow][currentCol] == PIECE) {
      // If the user clicks on the same piece, deselect it.
      if (currentRow === previousRow && currentCol === previousCol) {
        setSelectedSquares([-1,-1])
      } 
      else {
        setSelectedSquares([currentRow, currentCol])
      }
    }
  } 
  
  return (
    <div className='game'>
      <div className='game-board'>
        <Board 
          squares={history[stepNumber].squares}
          selectedSquares={selectedSquares}
          onClick={(r,c) => handleClick(r,c)}
        />
      </div>
    </div>
  )
}

export default Game