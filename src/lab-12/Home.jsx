import React, { useState } from 'react'
import { useUser } from './useUser'

function Home() {
  const {user,setuser}=useUser();

   return(<>
    <h1>welcome {user}</h1>
    <button onClick={()=>(setuser(null))}>
        Logout
    </button>

   </>)
}

export default Home
