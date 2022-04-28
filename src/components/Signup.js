import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

function Signup() {

    const [newUser, setNewUser] = useState({firstName:"",lastName:"",username:"",password:"",count:0})
    const navigate =useNavigate();

    function registerUser() {
        
        let newid=nanoid()
        // setNewUser({...newUser,id:newid})
        axios({
            method: 'post',
            url: 'http://localhost:5000/addUser',
            data: {...newUser,id:newid}
          })
          .then(()=>{
            navigate("/");
            setNewUser({firstName:"",lastName:"",username:"",password:"",count:0})
          }
         )
         
      }

      function clearAll() {
          setNewUser({firstName:"",lastName:"",username:"",password:"",count:0})
      }
  return (
    <div>
        <form>

        <div className="input-container">
        <label>FirstName </label>
        <input type="text" name="firstName" value={newUser.firstName} required onChange={(e)=>setNewUser({...newUser,firstName:e.target.value})}/>
        
        </div>

        <div className="input-container">
        <label>LastName </label>
        <input type="text" name="lastName" value={newUser.lastName} required onChange={(e)=>setNewUser({...newUser,lastName:e.target.value})}/>
        
        </div>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="username" value={newUser.username} required onChange={(e)=>setNewUser({...newUser,username:e.target.value})}/>
        
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="password" value={newUser.password} required onChange={(e)=>setNewUser({...newUser,password:e.target.value})} />
        
      </div>
      
    </form>
    <button onClick={registerUser}>Register</button>
      <button onClick={clearAll} class="cancelbtn">Cancel</button><br></br>
      <Link to={"/"}>Click here to login</Link>
      
    </div>
  )
}

export default Signup