import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { handleState } from '../store/reducers/state'

const Home = () => {
    
    const { push } = useRouter()
    const { register } = useSelector(st => st.state)
    
    useEffect(() => {
        if (!register) push('/register')
        if (register) push('/chat')
    }, [register])

}

export default Home