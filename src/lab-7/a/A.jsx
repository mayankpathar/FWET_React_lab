import React from 'react'
import B from './B'

function A(props) {
  return (
    <>
    <B name={props.name} setname={props.setname}/>
    </>
  )
}

export default A
