import React from 'react'
import UserProfilepage from './UserProfilepage'

function Dashboardpage(props) {
  return (
    <div>
      <h1>Dashboardpage</h1>
      <UserProfilepage currentUser={props.currentUser} handleLogout={props.handleLogout} handlechangpass={props.handlechangpass}/>
    </div>
  )
}

export default Dashboardpage
