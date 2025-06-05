//useCounter.js

import { useState } from "react";

function useCounter(initialValue = 0, step = 1) {
    const [count, setCount] = useState(initialValue);

    function increment(){
        setCount(p => p + step);
    }

    function reset (){
        setCount(initialValue);
    }
    function decrement(){
        setCount (p => p - step)
    }
    return {count, increment, reset, decrement}
}

export default useCounter;