import React from 'react'

function UserProfilepage(props) {
  return (
    <div>
      <h1>UserProfilepage</h1>
      <h2>username:{props.currentUser}</h2>
      <button onClick={props.handleLogout}>Logout</button>
      <button onClick={()=>props.handlechangpass}>changpass</button>
    </div>
  )
}

export default UserProfilepage
