import React,{useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <div className="counter">
            <p className="counter__title">{count}</p>
            <button className="inc" onClick={increment}>+</button>
            <button className="dec" onClick={decrement}>-</button>
            <button className="res" onClick={reset}>0</button>
        </div>
    )
}