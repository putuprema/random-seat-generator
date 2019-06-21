import React from 'react'

function Buttons(props) {
  return (
    <div className="button-container">
      <button name="gen" onClick={props.handleClick}>Generate</button>
      <button name="updateName" onClick={props.handleClick}>Student Names</button>
      <button name="reset" onClick={props.handleClick}>Reset</button>
    </div>
  )
}

export default Buttons