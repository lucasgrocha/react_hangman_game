import React, { useState } from 'react'
import Letter from './Letter'
import styled from 'styled-components';
import { useEffect } from 'react';

const LetterWrapper = styled.div`
  margin-right: 10px;
  margin-left: 10px;
`;

const Letters = props => {
  const [word, setWord] = useState('')

  useEffect(() => {
    setWord(props.word)
  }, [props.word])

  const handleClickedLetter = letter => {
    console.log(`${letter} ${word.includes(letter)}`)
  }

  return(
    word.split('').map((letter, index) => (
      <LetterWrapper key={index}>
        <Letter letter={letter} clicked={handleClickedLetter}/>
      </LetterWrapper>
    ))
  )
}

export default Letters