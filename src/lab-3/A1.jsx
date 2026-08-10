// Demonstrate the ReactJS props.
import React from 'react'

function A1() {
    // parent
  return (
    <div>
      <A2 name='mayank' age={18} sem={3}/>
      <A3 name='mayank' age={18} sem={3}/>
    </div>
  )
}
function A2(props) {
    // child
  return (
    <div>
      <h1>name = {props.name}</h1>
      <h1>age={props.age}</h1>
      <h1>sem={props.sem}</h1>
     
    </div>
    
  )
}
function A3({name,age,sem}) {
  return (
    <div>
      <h1>name = {name}</h1>
      <h1>age={age}</h1>
      <h1>sem={sem}</h1>
    </div>
  )
}


export default A1
