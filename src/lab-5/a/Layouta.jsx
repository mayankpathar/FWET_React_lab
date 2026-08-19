import React from 'react'
import Navbar from './Navbara'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layouta() {
  return (
    <div>
      <Navbara/>
      <hr/>
      <Outlet/>
      <hr/>
      <Footer/>
    </div>
  )
}


export default Layouta
