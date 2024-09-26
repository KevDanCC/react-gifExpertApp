import { useState } from "react"


export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (incrementBy = 1) => {
        setCounter(counter + incrementBy)
    }

    const decrement = (decrementBy = 1) => {

        if (counter == 0) return

        setCounter(counter - decrementBy)
    }

    const reset = () => {
        setCounter(10)
    }



    return {
        counter,
        increment,
        decrement,
        reset
    }
}