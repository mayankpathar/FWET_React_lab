import React, { useState } from 'react'
import Loginpage from './Loginpage';
import Dashboardpage from './Dashboardpage';
import ChangPass from './ChangPass';


function Appcontent() {
    const [currentUser,setcurrentUser] = useState("")
    const [changpass,setchangpass]=useState("1234")
    const handleLogin =(use) =>{
      setcurrentUser(use)
    };
    const handleLogout  =()=>{
        setcurrentUser(null)
    }
    const handlechangpass=()=>{
    <ChangPass setchangpass={setchangpass}/>
    }
  return (
    <div>
      {currentUser ? (<Dashboardpage currentUser={currentUser} handleLogout={handleLogout} handlechangpass={handlechangpass} />):(<Loginpage handleLogin={handleLogin}  changpass={changpass}/>)}
    </div>
  )
}

export default Appcontent
