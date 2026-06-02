import { useState } from "react"

function init() {
    console.log("init was called")
    return Math.random();
}

export default function Counter() {
    let [count, setcount] = useState(init);
    console.log("componenet was re-rendered");
    let incCount = () => {
        setcount((currCount) => {
            return currCount+1;
        });
        
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}