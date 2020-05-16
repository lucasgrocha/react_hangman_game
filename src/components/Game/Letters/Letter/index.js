import React from 'react'
import { Button } from 'react-bootstrap';

const Letter = props => {
  return (
    <Button
      disabled={props.finished}
      variant={props.status === 'correct' ? 'success' : props.status === 'incorrect' ? 'danger' : 'secondary'}
      onClick={() => props.clicked(props.letter, props.letterIndex)}>
      {props.letter}
    </Button>
  )
}

export default Letter