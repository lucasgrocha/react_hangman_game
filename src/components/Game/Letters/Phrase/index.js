import React, { useEffect, useState } from 'react'

const Phrase = props => {
  const [word, setWord] = useState([])

  useEffect(() => {
    let buildedWord = []
    buildedWord.push(
      props.letters.map((value, index) => {
        return value.status === 'correct' ?
          <span key={index}>{value.letter}</span> :
          <span key={index}>_</span>
      })
    )

    setWord(buildedWord)
  }, [props.letters])

  return word
}

export default Phrase