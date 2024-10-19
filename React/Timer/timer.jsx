import { useState, useRef, useCallback, useEffect } from 'react'

function Timer() {
    const [timerValue, setTimerValue] = useState(null)
    const inputRef = useRef(null)
    const timerIdRef = useRef(-1)

    const handleStop = useCallback(() => {
        window.clearInterval(timerIdRef.current)
        timerIdRef.current = -1
    }, [])

    const handleStart = () => {
        const timerStart = Date.now()
        const timerInitValue = Number(inputRef.current.value) * 1000

        const handleTick = () => {
            const timePassed = Date.now() - timerStart
            const timeLeft = timerInitValue - timePassed

            if (timeLeft <= 0) handleStop()
            setTimerValue(Math.max(timeLeft, 0))
        }

        handleTick()

        window.clearTimeout(timerIdRef.current)
        timerIdRef.current = setInterval(handleTick, 1000)
    }

    useEffect(() => {
        return () => handleStop()
    }, [handleStop])

    return (
        <>
            <p>Count: {(timerValue / 1000).toFixed()}</p>
            <input ref={inputRef} type="number" />
            <button onClick={handleStart}>Start</button>
        </>
    )
}
