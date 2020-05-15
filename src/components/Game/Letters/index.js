import React, { useState, useEffect } from 'react'
import Letter from './Letter'
import styled from 'styled-components';
import Phrase from './Phrase'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const _ = require('lodash')

const LetterWrapper = styled.div`
  margin-right: 3px;
  margin-left: 3px;
  margin-bottom: 5px;
  display: inline-block;
`

const Letters = props => {
  const [word, setWord] = useState(_.toUpper(props.word))
  const [randomLetters, setRandomLetters] = useState([])
  const [mixedRandomLetters, setMixedRandomLetters] = useState([])

  useEffect(() => {
    let wordAndLetters = _.toUpper(word + 'ZYXXX')
    wordAndLetters = removeDuplicates(wordAndLetters)
    setRandomLetters(lettersFactory(wordAndLetters))
    setMixedRandomLetters(lettersFactory(_.shuffle(wordAndLetters.split('')).join('')))
  }, [word])

  const removeDuplicates = word => {
    return [...new Set(word.split(''))].join('')
  }

  const getIndices = (array, letter) => {
    const indices = [];
    array = array.map((value) => value.letter)
    let idx = array.indexOf(letter)
    while (idx !== -1) {
      indices.push(idx)
      idx = array.indexOf(letter, idx + 1)
    }

    return indices
  }

  const handleClickedLetter = (letter, randomLetterIndex) => {
    const tmpMixed = [...mixedRandomLetters]
    if (word.split('').includes(letter)) {
      for (let index of getIndices(mixedRandomLetters, letter)) {
        tmpMixed[index].status = 'correct'
      }
    } else {
      tmpMixed[randomLetterIndex].status = 'incorrect'
    }
    console.clear()
    console.log("Word: " + word)
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
          <Phrase letters={mixedRandomLetters} />
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