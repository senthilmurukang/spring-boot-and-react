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
            <Button onClick={decrement} style={{ margin: '50px 15px' }} type={'outline'}>Decrement</Button>
            <Button onClick={increment} style={{ margin: '50px 15px' }} type={'outline'}>Increment</Button>
        </div>
    )
}

export default Counter;