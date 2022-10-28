import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidV4 } from 'uuid'
import { handleRegister, handleName,handleId } from '../store/reducers/state';


export const Register = () => {
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(userName){
            dispatch(handleRegister())
            dispatch(handleName(userName))
            dispatch(handleId(uuidV4()))
            return;
        }
    }

    return (
        <form onSubmit={handleSubmit} className='container_register'>
            <label htmlFor="nameuser">What is your nick?</label>
            <input
                value={userName}
                type="text"
                id='nameuser'
                autoComplete='off'
                onChange={(e) => setUserName(e.target.value)}
            />
            <button>Get in</button>
        </form>
    )
}
