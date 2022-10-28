import React from 'react'

export const Message = ({message}) => {

  const {msg,time} = message
  return (
    <div className='container_message'>
        <p>{msg}</p>
        <span className='time'>{time}</span>
    </div>
  )
}
