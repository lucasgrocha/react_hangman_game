import React from 'react'
import { Button } from 'react-bootstrap';

const Letter = props => {
  return (
    <Button variant="success"
      variant={props.status === 'correct' ? 'success' : props.status === 'secondary' ? 'secondary' : 'danger'}
      onClick={() => props.clicked(props.letter)}>
      {props.letter}
    </Button>
  )
}

export default Letter