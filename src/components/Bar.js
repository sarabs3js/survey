import React from 'react';
import './bar.css'

const Bar = ({ text, result, color }) => {
    return (
        <div className='barGraph'>
            <div className='graph' style={{ height: `${result}%`, background: color }}></div>
            <div className='text'>{text} ({result})</div>
        </div>
    )
};

export default Bar;
