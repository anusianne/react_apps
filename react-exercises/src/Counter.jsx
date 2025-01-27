import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    const reset = () => {
        setCount(c => c = 0)
    }
    return (<div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>Decrements</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>Increment</button>


    </div>)
}
