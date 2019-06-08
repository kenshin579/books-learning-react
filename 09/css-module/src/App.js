import React from 'react';
import logo from './logo.svg';
import styles from './App.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles); //bind 기능으로 styles.을 생략할 수 있음.

console.log("styles", styles);

function App() {
  return (
    <div className={cx('box', 'blue')}>

    </div>
  );
}

export default App;
