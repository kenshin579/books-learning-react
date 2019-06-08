import React from 'react';
import logo from './logo.svg';
import styles from './App.css';

console.log("styles", styles);

function App() {
  return (
    <div className={[styles.box, styles.blue].join(' ')}>

    </div>
  );
}

export default App;
