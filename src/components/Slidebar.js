import React from 'react'
import { RiUser4Line } from 'react-icons/ri'
import { Header } from './Header'

export const Slidebar = () => {
    return (
        <div className='contianer_sliderbar'>
           <Header icon={<RiUser4Line/>} />
           <Header icon={<RiUser4Line/>} />
           <Header icon={<RiUser4Line/>} />
           <Header icon={<RiUser4Line/>} />
           <Header icon={<RiUser4Line/>} />
        </div>
    )
}
