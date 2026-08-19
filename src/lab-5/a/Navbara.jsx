import React from 'react'
import { Link } from 'react-router-dom'

function Navbara() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/Home">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/About">About</Link>
        </li>
        <li class="nav-item">
          <Link to="/Galary">Galary</Link>
        </li>
         <li class="nav-item">
          <Link to="/Contect">Contect</Link>
        </li>
         <li class="nav-item">
          <Link to="/Sing">Sign</Link>
        </li>
        
        
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbara
