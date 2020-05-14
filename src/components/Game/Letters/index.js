import React from 'react'
import Letter from './Letter'
import styled from 'styled-components';

const LetterWrapper = styled.div`
  margin-right: 10px;
  margin-left: 10px;
`;

const Letters = props => {
  return(
    props.word.split('').map((letter, index) => (
      <LetterWrapper key={index}>
        <Letter letter={letter}/>
      </LetterWrapper>
    ))
  )
}

export default Letters