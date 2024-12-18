import React from 'react'

const Form = ({taskname, event, placeholder}) => {
  return (
       <input type="text"
          value= {taskname}
          onChange={event}
          placeholder={placeholder} 
        />
  )
}

export default Form