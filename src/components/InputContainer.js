import React from 'react'

const InputContainer = ({handleInput,handleStart}) => {
    // const[]=props;
  return(
    <div className="input-container">
      <div className="input-box">
        <input onChange={handleInput} id="hours" placeholder="HH" />
        <input onChange={handleInput} id="minute" placeholder="MM" />
        <input onChange={handleInput} id="seconds" placeholder="SS" />
      </div>
      <button
        onClick={handleStart} // Start button functionality
        className="timer-button"
        type="submit"
      >
        Start
      </button>
    </div>
  )
}

export default InputContainer