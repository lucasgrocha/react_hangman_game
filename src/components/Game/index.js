import React, { useState } from 'react'
import Letters from './Letters'

const Game = props => {
  const [lives, setLives] = useState(4)

  const handleLives = count => {
    setLives(count)
  }

  return (
    <Letters
      word={props.word}
      lives={lives}
      changeLives={handleLives} />
  )
}

export default Game
