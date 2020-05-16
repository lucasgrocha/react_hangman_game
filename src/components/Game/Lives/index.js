import React from 'react'
import Life from './Life'

const Lives = props => {
  const lives = []
  for (let c = 0; c < props.lives; c++) {
    lives.push(<Life key={c} />)
  }
  return lives
}

export default Lives