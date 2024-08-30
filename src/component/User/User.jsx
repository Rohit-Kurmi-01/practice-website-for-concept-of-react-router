import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
    return (
        <h1 className='text-white text-center bg-slate-800 px-2 py-5 my-1 rounded-lg'>USER: {userId}  </h1>
    )
}

export default User
