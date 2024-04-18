import { useState } from "react"

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="counter">
            <h1 className="counter-display">
                {count}
            </h1>
            <button onClick={decrement} className="btn">Decrement</button>
            <button onClick={reset} className="btn">Reset</button>
            <button onClick={increment} className="btn">Increment</button>
        </div>
    )
}

export default Counter