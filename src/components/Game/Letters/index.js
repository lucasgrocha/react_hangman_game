import React, { useState, useEffect, Fragment } from 'react'
import Letter from './Letter'
import styled from 'styled-components';
import Phrase from './Phrase'
const _ = require('lodash');

const LetterWrapper = styled.div`
  margin-right: 10px;
  margin-left: 10px;
`;

const Letters = props => {
  const [splittedWord] = useState(props.word.split(''))
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
      obj.push({ letter: letter, status: null })
    })
    setLettersObj(obj)
  }

  return (
    <Fragment>
      <Phrase letters={lettersObj} />
      {lettersObj.map((value, index) => (
        <LetterWrapper key={index}>
          <Letter letter={value.letter} clicked={handleClickedLetter} status={value.status} />
        </LetterWrapper>
      ))}
    </Fragment>
  )
}

export default Letters