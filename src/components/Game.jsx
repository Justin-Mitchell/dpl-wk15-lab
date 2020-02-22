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
  
  return (
    <div className='game'>
      <div className='game-board'>
        <Board 
          squares={history[stepNumber].squares}
          selectedSquares={selectedSquares}
        />
      </div>
    </div>
  )
}

export default Game