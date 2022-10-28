import React, { useState } from 'react'
import { FiSettings } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { BiExit } from 'react-icons/bi'
import { handleRegister } from '../store/reducers/state'
import { useDispatch } from 'react-redux'
import io from 'socket.io-client'

export const ButtonSetting = () => {

    const dispatch = useDispatch()
    const [toggletheme, setToggletheme] = useState(false)
    const {id} = useSelector(st =>st.state)
    const liArray = [1,2,3,4]

    const handleLogout = async () => {
        await fetch("/api/socketio")
        let socket = io();

        socket.emit('disconnected',id)
        dispatch(handleRegister())
    }

    return (
        <div className='container__setting'>
            <div className='setting' onClick={() => setToggletheme(!toggletheme)}>
                <FiSettings />
            </div>
            {
                toggletheme &&
                <>
                    <ul className='list_setting'>

                        {
                            liArray.map((i)=>(
                                <li key={i}></li>
                            ))
                        }
                    </ul>
                    <div className='icon_exit' onClick={handleLogout}>
                        <BiExit />
                    </div>
                </>
            }
        </div>
    )
}
