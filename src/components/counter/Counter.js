import { useEffect, useState, useRef } from "react";
import { format, addSeconds } from 'date-fns'

const Counter = () => {
  const [time, setTime] = useState(new Date(0,0,0,0,0,0,0))
  const [isRunning, setIsRunning] = useState(true)
  const clearBtnRef = useRef(null)

  useEffect(() => {
    clearBtnRef.current.disabled = true
  }, [])

  useEffect(() => {
    if (isRunning) {
    const intervalId = setInterval(() => {
      setTime(time => addSeconds(time, 1))
    }, 1000)

    return () => {
      clearInterval(intervalId);
    }
  }
  }, [isRunning])

  const switchRunning = () => {
    setIsRunning(!isRunning)

    if(isRunning) {
      clearBtnRef.current.disabled = false
    } else {
      clearBtnRef.current.disabled = true
    }
  }

  const clearHandler = () => {
    setTime(new Date(0,0,0,0,0,0,0,))
  }

  return (
    <>
      <h1>{format(time, 'HH:mm:ss')}</h1>
      <button onClick={switchRunning}>{isRunning === true ? 'Stop' : 'Start'}</button>
      <button ref={clearBtnRef} onClick={clearHandler}>Clear</button>
    </>
  );
}

export default Counter;