import React from 'react'
import './index.css'

const MainBox = (props) => {
  return (
    <div className="main-box">
      <h1 className="main-title">
        and {props.name} wish you to the New Year a lot of good mood a strength.
        Your next year {props.year} will be
      </h1>
      <p className="main-answer">{props.tip}</p>
    </div>
  )
}

export default MainBox
