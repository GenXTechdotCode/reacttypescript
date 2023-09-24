import { count } from "console";
import { useReducer } from "react";
import { Button } from "../Button";

type CounterState = {
    count: number
}
type CounterAction ={
    type: string
    payload: number
}

const initiateState = { count: 0 }

function reducer(state: CounterState , action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initiateState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10})}>Increment 10</button> 
            <button onClick={() => dispatch({ type: 'decrement', payload: 10})}>decrement 10</button> 
        </>
    )
}