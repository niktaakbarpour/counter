import {useEffect, useRef} from 'react';
import {useState} from 'react';

export default function useCounter() {

    const [counter, setCounter] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const [input, setInput] = useState(100);
    const countRef = useRef(null)

    useEffect(() => {
        if (!isPaused) {
            checkAndClearInterval();
            countRef.current = setInterval(() => {
                    setCounter((currentTimer) => {
                            return (currentTimer + 1)
                        }
                    )
                },
                input
            )
        }
    }, [input, isPaused]);

    const checkAndClearInterval = () => {
        if (countRef.current !== null) {
            clearInterval(countRef.current)
        }
    };

    const startPause = () => {
        if (isPaused) {
            setIsActive(true)
            setIsPaused(false)
        } else {
            checkAndClearInterval();
            setIsPaused(true)
        }
    };

    const changeInput = (amount) => {
        if (amount <= 0) {
            setInput(100)
        } else {
            setInput(amount)
        }
    };

    const reset = () => {
        checkAndClearInterval();
        setIsActive(false)
        setIsPaused(true)
        setCounter(0)
    };

    const increase = (amount) => {
        changeInput(input + amount)
    };

    const decrease = (amount) => {
        changeInput(input - amount)
    };

    return {
        startPause,
        changeInput,
        reset,
        increase,
        decrease,
        counter,
        isPaused,
        isActive,
        input
    };
}
