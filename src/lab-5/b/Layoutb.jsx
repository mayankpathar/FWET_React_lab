import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbarb from './Navbarb'


function Layoutb() {
  return (
    <div>
      <Navbarb/>
      
      <Outlet/>
    
    </div>
  )
}


export default Layoutb