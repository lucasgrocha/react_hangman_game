import React, { useState, Fragment } from 'react'
import Letters from './Letters'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Lives from './Lives'

const StyledLivesCounter = styled.div`
  
`

const StyledLetters = styled.div`
  text-align: center;
  width: 75vw;
`

const Game = props => {
  const [lives, setLives] = useState(4)

  const handleLives = count => {
    setLives(count)
  }

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <StyledLivesCounter>
            <Lives lives={lives} />
          </StyledLivesCounter>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <StyledLetters>
            <Letters
              word={props.word}
              lives={lives}
              changeLives={handleLives} />
          </StyledLetters>
        </Col>
      </Row>
    </Container>
  )
}

export default Game
