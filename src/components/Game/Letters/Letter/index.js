import React from 'react'
import Button from '@material-ui/core/Button';

const Letter = props => {
  return (
    <Button
      variant="contained"
      color={props.status === 'correct' ? 'primary' : 'secondary'}
      onClick={() => props.clicked(props.letter)}>
      {props.letter}
    </Button>
  )
}

export default Letter