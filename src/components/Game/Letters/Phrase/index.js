import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const StyledHeading = styled.h3`
  display: inline-block;
  color: ${props => props.children === '__' ? 'blue' : 'black'};
`;


const Phrase = props => {
  const [word, setWord] = useState([])

  useEffect(() => {
    let buildedWord = []
    buildedWord.push(
      props.letters.map((value, index) => (
        <StyledHeading
          key={index}>
          { value.status === 'correct' ? value.letter : '__' }
        </StyledHeading>
      ))
    )

    setWord(buildedWord)
  }, [props.letters])

  return word
}

export default Phrase