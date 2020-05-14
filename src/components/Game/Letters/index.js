import React, { useState, useEffect, Fragment } from 'react'
import Letter from './Letter'
import styled from 'styled-components';
import Phrase from './Phrase'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const _ = require('lodash');

const LetterWrapper = styled.div`
  margin-right: 3px;
  margin-left: 3px;
  margin-bottom: 5px;
  display: inline-block;
`;

const Letters = props => {
  const [splittedWord] = useState(_.toUpper(props.word).split(''))
  const [correctLetters, setCorrectLetters] = useState([])
  const [incorrectLetters, setIncorrectLetters] = useState([])

  useEffect(() => {
    setCorrectLetters(lettersFactory(splittedWord))
  }, [splittedWord])

  useEffect(() => {
    setIncorrectLetters(lettersFactory([...splittedWord, ...['U', 'Y', 'Z']]))
  }, [splittedWord])

  const handleClickedLetter = letter => {
    const letters = correctLetters.map((value) => {
      if (value.letter === letter) {
        value.status = 'correct'
      }
      return value
    })

    setCorrectLetters(letters)
  }

  const lettersFactory = word => (
    word.map((letter) => ({ letter: letter, status: 'secondary' }))
  )

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Phrase letters={correctLetters} />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          {correctLetters.map((value, index) => (
            <LetterWrapper key={index}>
              <Letter
                letter={value.letter}
                clicked={handleClickedLetter}
                status={value.status} />
            </LetterWrapper>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Letters