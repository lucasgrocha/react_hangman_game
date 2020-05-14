import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const StyledHeading = styled.h3`
  display: inline-block;
`;


const Phrase = props => {
  const [word, setWord] = useState([])

  useEffect(() => {
    let buildedWord = []
    buildedWord.push(
      props.letters.map((value, index) => (
        <StyledHeading
          key={index}>
          { value.status === 'correct' ? value.letter : '_' }
        </StyledHeading>
      ))
    )

    setWord(buildedWord)
  }, [props.letters])

  return word
}

export default Phrase