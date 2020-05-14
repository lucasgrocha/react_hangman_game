import React from 'react'
import { Button } from 'react-bootstrap';

const Letter = props => {
  return (
    <Button variant="success"
      variant={props.status === 'correct' ? 'success' : props.status === 'incorrect' ? 'danger' : 'secondary'}
      onClick={() => props.clicked(props.letter)}>
      {props.letter}
    </Button>
  )
}

export default Letter