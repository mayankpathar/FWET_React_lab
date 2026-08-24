import React from 'react'
import { useState } from "react";
import C from './C';

function B(props) {
    const [input,setinput]=useState("");
  return (
    <>
     <input type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>
        <button onClick={()=>{props.setname(input)
    
        }}>change name</button>
        <C name={props.name}/>
    
    </>
  )
}

export default B
