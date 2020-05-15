import React, { useState, useEffect } from 'react'
import Letter from './Letter'
import styled from 'styled-components';
// import Phrase from './Phrase'
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
  const [word, setWord] = useState(_.toUpper(props.word))
  const [randomLetters, setRandomLetters] = useState([])
  const [mixedRandomLetters, setMixedRandomLetters] = useState([])

  useEffect(() => {
    const wordAndLetters = _.toUpper(word + 'ZYX')
    setRandomLetters(lettersFactory(wordAndLetters))
    setMixedRandomLetters(lettersFactory(_.shuffle(wordAndLetters.split('')).join('')))
  }, [word])

  const handleClickedLetter = (letter, randomLetterIndex) => {
    const tmpMixed = [...mixedRandomLetters]
    if (word.split('').includes(letter)) {
      const indices = [];
      const array = mixedRandomLetters.map((value) => value.letter)
      const elemento = letter;
      var idx = array.indexOf(elemento);
      while (idx != -1) {
        indices.push(idx);
        idx = array.indexOf(elemento, idx + 1);
      }
      for (let index of indices) {
        tmpMixed[index].status = 'correct'
      }
    } else {
      tmpMixed[randomLetterIndex].status = 'incorrect'
    }
    console.clear()
    console.table(tmpMixed)
    setMixedRandomLetters(tmpMixed)
  }

  const lettersFactory = word => {
    return word.split('').map((letter) => ({ letter: letter, status: null }))
  }

  return (
    <Container>
      <Row>
        <Col sm={12}>
          {/* <Phrase letters={correctLetters} /> */}
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          {
            mixedRandomLetters.map((value, index) => (
              <LetterWrapper key={index}>
                <Letter
                  letter={value.letter}
                  status={value.status}
                  letterIndex={index}
                  clicked={handleClickedLetter}
                />
              </LetterWrapper>
            ))
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Letters