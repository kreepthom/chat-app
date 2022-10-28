import React from 'react'
import moment from 'moment'
import { IoIosSend } from 'react-icons/io'
import { Message } from './Message'

export const Messages = ({ message, setMessage, messages, handleSubmitMesssage }) => {

    const handleOnChange = (e) => setMessage(
        {
            msg: e.target.value,
            time: moment().format('LT')
        }
    )

    const handleOnKeyPress = (e) => {
        if (e.keyCode === 13) {
            if (message){
                handleSubmitMesssage()
            } 
        }
    }

    return (
        <form className='messages'>

            <div className='container_messages'>
                {
                    messages.map((msg, i) => (
                        <Message key={i + msg} message={msg} />
                    ))
                }
            </div>
            <div className='container_input'>
                <textarea
                    className='messages_input'
                    type="text"
                    value={message.msg}
                    autoComplete='off'
                    placeholder='enter your message'
                    onChange={handleOnChange}
                    onKeyUp={handleOnKeyPress}
                />
                <button
                    className='messages_submit'
                    type='submit'
                    onClick={handleSubmitMesssage}
                >
                    <IoIosSend />
                </button>
            </div>
        </form>
    )
}
