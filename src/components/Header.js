import React from 'react'
import {TbUserCircle} from 'react-icons/tb'
import { useSelector } from 'react-redux'

export const Header = ({icon}) => {


 const {name} = useSelector(st => st.state)
  return (
    <div className='header'>
      {icon}
      <h2>{name}</h2>
    </div>
  )
}

