import React from 'react'
import btn from '../styles/Btn.module.css'

const Btn = ({click,buttonName,text}) => {
  return (
    <button onClick={click} className= {`${btn[buttonName]}`}> {text} </button>
  )
}

export default Btn