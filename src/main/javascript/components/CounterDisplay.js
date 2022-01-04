import React from 'react';
import { useSelector } from 'react-redux'

function CounterDisplay() {
    const counter = useSelector((state) => state.value);
    return (
        <div style={{ fontSize: '75px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{counter}</div>
    )
}

export default CounterDisplay;
