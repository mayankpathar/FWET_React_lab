import React from 'react'
import D from './D'

function C(props) {
  return (
<>
<button onClick={()=>props.setname(props.input)}>change name</button>
<D name={props.name} />
</>
  )
}

export default C
