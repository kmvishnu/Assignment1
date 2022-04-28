import axios from 'axios';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import './Style.css'


function Home() {

  const [user, setUser] = useState({username:"",password:""})
  const navigate =useNavigate();


  function loginClick() {
    axios({
      method: 'post',
      url: 'http://localhost:5000/loginPage',
      data: user
    })
    .then((response) => {
      navigate("/welcomeUser/"+response.data)
    })
    .catch((resp)=>{
      alert(resp.response.data);
    })
    
  }

  return (
    <div id="loginform" >
    <form >
      <div className="container">
        <label>Username </label>
        <input type="text" name="username" value={user.username} required onChange={(e)=>setUser({...user,username:e.target.value})}/>
        
      </div>
      <div className="container">
        <label>Password </label>
        <input type="password" name="password" value={user.password} required onChange={(e)=>setUser({...user,password:e.target.value})} />
        
      </div>
      
    </form>
    <button onClick={loginClick}>Login</button>
      <button onClick={()=>setUser({username:"",password:""})} class="cancelbtn">Clear</button><br></br>
      <Link to="/signUp">Click here to register</Link>
  </div>
  )
}

export default Home