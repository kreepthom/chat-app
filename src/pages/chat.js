import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { TbUserCircle } from 'react-icons/tb'
import { Header } from '../components/Header'
import { Messages } from '../components/Messages'
import { Slidebar } from '../components/Slidebar'
import { ButtonSetting } from '../components/ButtonSetting'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { handleListUsers } from '../store/reducers/state'

let socket;

export default function Home() {
  const initialState = { msg: '', time: '' }
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState(initialState)
  const { push } = useRouter()
  const { state } = useSelector(st => st)
  const dispatch = useDispatch()
  const { register, name, id } = state
  const { msg, time } = message

  const socketInicializated = async () => {

    await fetch("/api/socketio");
    socket = io();

    socket?.on('listUsers', (users) => {
      dispatch(handleListUsers(users))
    })
    socket?.on('newIncomingMessage', (msgs) => {
      setMessages([...messages, msgs])
    })
  }

  const handleSubmitMesssage = (e) => {
    e?.preventDefault()
    let objectMsg = {}
    objectMsg = { user: 'FC', msg, time }
    if (msg) {
      setMessages([...messages, objectMsg]);
      socket?.emit('createdMessage', objectMsg);
      setMessage(initialState);
      return;
    }
  }

  useEffect(() => {
    socketInicializated()
  }, [socket])

  useEffect(() => {
    socket?.emit('connected', id, name)
  }, [])

  useEffect(() => {
    if (!register) {
      push('/register')
      return;
    }
  }, [register])

  return (
    <div className='App'>
      <Slidebar />
      <div className='cotainer_boxtext'>
        <Header icon={<TbUserCircle />} color={'blue'} />
        <Messages
          message={message}
          setMessage={setMessage}
          messages={messages}
          setMessages={setMessages}
          handleSubmitMesssage={handleSubmitMesssage}
        />
      </div>
      <ButtonSetting />
    </div>

  )
}
