import React, { useState, useEffect } from 'react'
import Letters from './Letters'
import { Container, Button } from 'react-bootstrap'
import styled from 'styled-components'
import Lives from './Lives'
import RowCol from '../boostrap/RowCol'

const StyledLivesCounter = styled.div`
  color: red;
  svg {
    font-size: 190%;
    margin: 0.5%;
  }
`

const StyledLetters = styled.div`
  text-align: center;
  width: 75vw;
  margin: auto;
`

const Game = props => {
  const [lives, setLives] = useState(4)
  const [won, setWon] = useState(false)
  const [lost, setLost] = useState(false)

  useEffect(() => {
    if (lives === 0) {
      setLost(true)
    }
  }, [lives])

  const handleLives = lives => {
    setLives(lives)
  }

  const handleVictory = _ => {
    setWon(true)
  }

  const restartGame = _ => {
    if (lost) {
      alert(`The secret word was: ${props.word}`)
    }

    props.changeWord()
    setWon(false)
    setLost(false)
    setLives(4)
  }

  return (
    <Container>
      <RowCol colSize={12}>
        <StyledLivesCounter>
          <Lives lives={lives} />
        </StyledLivesCounter>
      </RowCol>
      <RowCol colSize={12}>
        <StyledLetters>
          <Letters
            word={props.word}
            lives={lives}
            won={handleVictory}
            changeLives={handleLives} />
        </StyledLetters>
      </RowCol>
      {
        (won || lost) &&
        <Button onClick={() => restartGame()}>
          Reload Page
        </Button>
      }
    </Container>
  )
}

export default Game
