import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router';


function WelcomeUser() {
    const [userData, setUserData] = useState("")
    
    const navigate=useNavigate()
    const params=useParams()
    
    useEffect(() => {
        
        axios({
            method: 'get',
            url: 'http://localhost:5000/viewSingleUser/'+params.id,
            
          })
          .then((response) => {
        
            setUserData(response.data)
            
          });
    },[0])


    
    
    
  return (
    <div>
       <h1>Welcome {userData.username}</h1> 
        <br></br>
        <h2>This is your {userData.count} visit</h2>
        <br></br>
        <button onClick={()=>navigate("/")}>Logout</button>
    </div>
  )
}

export default WelcomeUser