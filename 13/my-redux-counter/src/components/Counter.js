import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    console.log("[FRANK] Counter :: number", number, "color", color);
    return (
        <div className="Counter"
             onClick={onIncrement}
             onContextMenu={(e) => {
                 e.preventDefault();
                 onDecrement();
             }}
             onDoubleClick={onSetColor}
             style={{
                 backgroundColor: color
             }}>
            {number}
        </div>
    );
};

//기본 props 타입 지정
Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

//props의 기본값 설정
Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;
