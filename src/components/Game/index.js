import React, { useState, Fragment } from 'react'
import Letters from './Letters'
import { Container, Row, Col } from 'react-bootstrap'

const Game = props => {
  const [lives, setLives] = useState(4)

  const handleLives = count => {
    setLives(count)
  }

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h1>{lives}</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Letters
            word={props.word}
            lives={lives}
            changeLives={handleLives} />
        </Col>
      </Row>
    </Container>
  )
}

export default Game
