import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Register } from '../components/Register'

export default function register() {
    const { register } = useSelector(st => st.state)
    const { push } = useRouter()

    useEffect(() => {
        if (register) {
            push('/chat')
            return;
        }
    }, [register])

    if (!register) return (
        < Register />
    )
}
