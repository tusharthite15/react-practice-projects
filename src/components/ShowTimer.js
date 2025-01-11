import React from 'react'

const ShowTimer = (props) => {
    const {hours,minute,seconds,handlePause,handleReset,handleStart,isPause} = props;
  return (
    <div className="show-timer">
    <div className="timer-box">
      <div className="timer">
        <span id="hr">{hours < 10 ? `0${hours}` : hours}</span>:
        <span id="min">{minute < 10 ? `0${minute}` : minute}</span>:
        <span id="sec">{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div className="action-button">
        {!isPause && (
          <button className="timer-button" onClick={handlePause}>
            Pause
          </button>
        )}
        {isPause && (
          <button className="timer-button" onClick={handleStart}>
            Resume
          </button>
        )}
        <button className="timer-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  </div>
  )
}

export default ShowTimer