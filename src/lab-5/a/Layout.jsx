import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <div>
      <Navbar/>
      <hr/>
      <Outlet/>
      <hr/>
      <Footer/>
    </div>
  )
}


export default Layout
