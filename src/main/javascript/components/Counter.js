import React from 'react';
import { useDispatch } from 'react-redux'

import { incremented } from '../reducers/counterReducer'

function Counter() {
    const dispatch = useDispatch()

    const increment = () => {
        dispatch(incremented());
    }

    return (
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;