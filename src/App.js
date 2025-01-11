import "./App.css";
import { useEffect, useState } from "react";
import ShowTimer from "./components/ShowTimer";
import InputContainer from "./components/InputContainer";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isPause, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const handleStart = () => {
    if (hours < 0 || minute < 0 || seconds < 0 || (hours === 0 && minute === 0 && seconds === 0)) {
      alert("Invalid Values");
    } else {
      setIsStart(true);
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId); // Stop 
  };

  const handleReset = () => {
    setIsStart(false);
    setIsPaused(false);
    clearInterval(timerId); // Clear the interval on reset
    setHours(0);
    setMinute(0);
    setSeconds(0);
  };

  const handleInput = (e) => {
    const value = parseInt(e.target.value) || 0; // Default to 0 for invalid input
    const id = e.target.id;

    if (value < 0) return; // Prevent negative inputs

    if (id === "hours") setHours(value);
    else if (id === "minute") setMinute(value);
    else if (id === "seconds") setSeconds(value);
  };

  const runTimer = () => {
    if (hours === 0 && minute === 0 && seconds === 0) {
      clearInterval(timerId); 
      setIsStart(false);
      handleReset();
      alert("Timer is Finished");
      return; // Exit early to prevent further execution
    }
  
    if (seconds > 0) {
      setSeconds((s) => s - 1);
    } else if (minute > 0) {
      setMinute((m) => m - 1);
      setSeconds(59);
    } else if (hours > 0) {
      setHours((h) => h - 1);
      setMinute(59);
      setSeconds(59);
    }
  };
  

  useEffect(() => {
    if (isStart && !isPause) {
      const id = setInterval(runTimer, 1000);
      setTimerId(id);
    }
    return () => {
      clearInterval(timerId); // Cleanup interval on unmount or state change
    };
  }, [isStart, isPause]);

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      {!isStart && !isPause && <InputContainer
      handleInput={handleInput}
      handleStart={handleStart}
      />}
      {(isStart || isPause) &&  <ShowTimer 
      hours={hours}
      minute={minute}
      seconds={seconds}
      isPause={isPause}
      handleInput={handleInput}
      handleReset={handleReset}
      handlePause={handlePause}
      handleStart={handleStart}

      />}
    </div>
  );
}

export default App;
