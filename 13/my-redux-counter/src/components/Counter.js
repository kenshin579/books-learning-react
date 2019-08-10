import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}) => {
    console.log("[FRANK] Counter :: number", number, "color", color);
    return (
        <div className="Counter"
             onClick={() => onIncrement(index)}
             onContextMenu={(e) => {
                 e.preventDefault();
                 onDecrement(index);
             }}
             onDoubleClick={() => onSetColor(index)}
             style={{
                 backgroundColor: color
             }}>
            {number}
        </div>
    );
};

//기본 props 타입 지정
Counter.propTypes = {
    index: PropTypes.number,
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

//props의 기본값 설정
Counter.defaultProps = {
    index: 0,
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;
