import React from 'react'
import Loginpage from './Loginpage'

function ChangPass(props) {
  return (
    <div>
      <input type="text" value={input} onChange={(e)=>{props.setchangpass(e.target.value)}} />
      <button onClick={<Loginpage/>}>click</button>
    </div>
  )
}

export default ChangPass
