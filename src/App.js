import React, { useState } from 'react';
import classes from './App.module.css';
import Game from './components/Game'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
const randomWords = require('random-words');

const StyledBoard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const App = _ => {
  const [secretWord, setSecretWord] = useState(randomWords())

  const changeWord = _ => { setSecretWord(randomWords()) }

  return (
    <div className={classes.App}>
      <StyledBoard>
        <Game word={secretWord} changeWord={changeWord} />
      </StyledBoard>
    </div>
  );
}

export default App;
