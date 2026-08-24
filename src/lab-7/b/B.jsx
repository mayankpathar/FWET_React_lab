import React from 'react'
import { useState } from "react";
import C from './C';

function B(props) {
    const [input,setinput]=useState("");
  return (
    <>
     <input type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>
        
        <C name={props.name} input={input} setname={props.setname}/>
    
    </>
  )
}

export default B
