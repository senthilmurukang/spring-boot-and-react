import React from 'react';
import { useDispatch } from 'react-redux'

import Button from './button/Button'

import { incremented, decremented } from '../reducers/counterReducer'

function Counter() {
    const dispatch = useDispatch()

    const increment = () => {
        dispatch(incremented());
    }

    const decrement = () => {
        dispatch(decremented());
    }

    return (
        <div>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    )
}

export default Counter;