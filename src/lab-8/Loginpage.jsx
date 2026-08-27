import React, { useState } from 'react'

function Loginpage(props) {
    const [name,setname]=useState("")
    const [pass,setpass]=useState("")
    const handlesubmit = (e)=>{
        e.preventDefault()
        if (name==="mayank" && pass===props.changpass) {
            props.handleLogin(name)
            alert("submit")
        }
        else{
            alert("not valid admin")
        }
    }
  return (
    <div>
        <h1>login page</h1>
        <form onSubmit={handlesubmit}>
            <label htmlFor="">username:</label>
            <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} />
            <label htmlFor="">password:</label>
            <input type="password" value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
            <button type='subit'>Login</button>
            </form>  
    </div>
  )
}

export default Loginpage
