import React, { useState } from 'react'
import { useUser } from './useUser'

function Login() {
   const {setuser}=useUser()
    const [name,setname]= useState("")
    const [password,setpassword]= useState("")
    const login = () => {
      if (name === 'admin' && password ==='1234') {
        setuser(name)
      }else{
        alert("not valid name and password")
      }
    }
    
  return (
    <div>
      <h2>login page</h2>
      <input type="text" value={name} onChange={(e)=>{
     setname(e.target.value)
      }} placeholder='name' />
      <input type="text" value={password} onChange={(e)=>{
     setpassword(e.target.value)
      }} placeholder='password' />
      <button onClick={login} >
        login
      </button>
    </div>
  )
}

export default Login
