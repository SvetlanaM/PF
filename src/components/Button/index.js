import React from 'react'
import './index.css'

const Button = ({ className, label, type, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
