import React from 'react'
import Button from '@material-ui/core/Button';

const Letter = props => (
  <Button variant="contained" color="primary">
    {props.letter}
  </Button>
)

export default Letter