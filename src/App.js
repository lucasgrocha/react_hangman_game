import React from 'react';
import classes from './App.module.css';
import Game from './components/Game'
import styled from 'styled-components';

const StyledBoard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 75vw;
  margin: auto;
  display: flex;
  justify-content: center;
`;


const App = _ => {
  return (
    <div className={classes.App}>
      <StyledBoard>
        <Game word={'lucas'} />
      </StyledBoard>
    </div>
  );
}

export default App;
