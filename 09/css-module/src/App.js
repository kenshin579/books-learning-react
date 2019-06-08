import React from 'react';
import logo from './logo.svg';
import styles from './App.css';
import classNames from 'classnames';

console.log("styles", styles);

function App() {
  return (
    <div className={classNames(styles.box,styles.blue)}>

    </div>
  );
}

export default App;
