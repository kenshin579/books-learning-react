import React, {Component} from 'react';
import styles from './App.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles); //bind 기능으로 styles.을 생략할 수 있음.

console.log("styles", styles);

class App extends Component {
    render() {
        const isBlue = true;

        return (
            <div className={cx('box', {
                blue: isBlue
            })}>
                <div className={cx('box-inside')}>

                </div>

            </div>
        );
    }
}

export default App;
