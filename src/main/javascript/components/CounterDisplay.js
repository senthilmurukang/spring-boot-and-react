import React from 'react';
import { useSelector } from 'react-redux'

function CounterDisplay() {
    const counter = useSelector((state) => state.value);
    return (
        <div>
            Value: {counter}
        </div>
    )
}

export default CounterDisplay;
