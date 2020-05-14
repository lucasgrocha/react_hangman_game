import React from 'react';
import classes from './App.module.css';
import Game from './components/Game'
const App = _ => {
  return (
    <div className={classes.App}>
      <Game />
    </div>
  );
}

export default App;
