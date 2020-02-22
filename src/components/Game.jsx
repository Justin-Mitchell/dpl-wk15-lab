import React, { useState } from 'react'
import Board from './Board'
import { initialBoard } from '../utils/helpers'
import { BOARD_SIZE, WALL, EMPTY, PIECE } from '../utils/constants'
import '../assets/css/game.css'

const Game = () => {
  const [history, setHistory] = useState([{ squares: initialBoard }])
  const [stepNumber, setStepNumber] = useState(0)
  const [selectedSquares, setSelectedSquares] = useState([-1,-1])
  
  return (
    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
    </div>
  )
}

export default Game