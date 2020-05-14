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
  display: inline-block;
`;

const Letters = props => {
  const [splittedWord] = useState(_.toUpper(props.word).split(''))
  const [lettersObj, setLettersObj] = useState([])

  useEffect(() => {
    lettersFactory(splittedWord)
  }, [splittedWord])

  const handleClickedLetter = letter => {
    const letters = lettersObj.map((value) => {
      if (value.letter === letter) {
        value.status = 'correct'
      }
      return value
    })

    setLettersObj(letters)
  }

  const lettersFactory = word => {
    let obj = []
    word.map((letter) => {
      obj.push({ letter: letter, status: 'secondary' })
    })
    setLettersObj(obj)
  }

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Phrase letters={lettersObj} />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          {lettersObj.map((value, index) => (
            <LetterWrapper key={index}>
              <Letter letter={value.letter} clicked={handleClickedLetter} status={value.status} />
            </LetterWrapper>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Letters