import React, { useState, useEffect, Fragment } from 'react'
import Letter from './Letter'
import styled from 'styled-components';
import Phrase from './Phrase'
import { Row, Col } from 'react-bootstrap'
const _ = require('lodash')

const LetterWrapper = styled.div`
  margin-right: 3px;
  margin-left: 3px;
  margin-bottom: 5px;
  display: inline-block;
`

const Letters = props => {
  const [word] = useState(_.toUpper(props.word))
  const [correctedWord, setCorrectedWord] = useState([])
  const [mixedRandomLetters, setMixedRandomLetters] = useState([])
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const currentBuiltWord = correctedWord
      .filter((value) => value.status === 'correct')
      .map((value) => value.letter).join('')

    if (currentBuiltWord === word) {
      setFinished(true)
    }
  }, [correctedWord])

  useEffect(() => {
    if (props.lives === 0) {
      setFinished(true)
    }
  }, [props.lives])

  useEffect(() => {
    let wordAndLetters = _.toUpper(word + 'ZYXÇQ')
    wordAndLetters = removeDuplicates(wordAndLetters)

    setCorrectedWord(lettersFactory(word))
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
    classifyLetters(letter, randomLetterIndex)
  }

  const doCorrection = (array, searchedLetter) => {
    const letterObj = [...array]
    for (let index of getIndices(array, searchedLetter)) {
      letterObj[index].status = 'correct'
    }
    return letterObj
  }

  const classifyLetters = (letter, randomLetterIndex) => {
    let tmpMixed = [...mixedRandomLetters]
    let tmpCorrect = [...correctedWord]
    if (word.split('').includes(letter)) {
      tmpMixed = doCorrection(mixedRandomLetters, letter)
      tmpCorrect = doCorrection(correctedWord, letter)
    } else {
      if (tmpMixed[randomLetterIndex].status !== 'incorrect') {
        tmpMixed[randomLetterIndex].status = 'incorrect'
        props.changeLives(props.lives - 1)
      }
    }
    setCorrectedWord(tmpCorrect)
    setMixedRandomLetters(tmpMixed)
  }

  const lettersFactory = word => {
    return word.split('').map((letter) => ({ letter: letter, status: null }))
  }

  return (
    <Fragment>
      <Row>
        <Col sm={12}>
          <Phrase letters={correctedWord} />
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
                  finished={finished}
                  letterIndex={index}
                  clicked={handleClickedLetter}
                />
              </LetterWrapper>
            ))
          }
        </Col>
      </Row>
    </Fragment>
  )
}

export default Letters
