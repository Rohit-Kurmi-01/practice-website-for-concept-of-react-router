import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data ,setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Rohit-Kurmi-01')
    //     .then(response => response.json())
    //     .then(data =>{
    //          setData(data)
    //     } )
    // },[])
    return (
        <div>
            <div className = "text-white text-center bg-slate-800 px-2 py-5 my-1 rounded-lg">
               <h1 className='text-left px-4 text-3xl bg-slate-600 w-fit rounded-xl my-4 py-2'>  {data.name} ({data.login})  </h1>
               <h1> Github Followers : {data.followers}  </h1>
            

               <img className='mx-auto hover:border-spacing-1 border-white bg-slate-100 w-28' src={data.avatar_url} alt="" />
            </div>
        </div>
    )
}

export default Github

export const loderData = async () => {
  const response  = await fetch('https://api.github.com/users/Rohit-Kurmi-01')
    
   return response.json() 
}