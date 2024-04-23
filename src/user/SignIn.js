import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./SignIn.css"
import NavBar from './NavBar';


export default function SignIn() 
{
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2032/checkuserlogin', formData);
      if (response.data!=null) 
      {
              console.log(response.data)
              // navigate("/dashboard");    
              window.location.href = "UserSidebar"    
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div>

      <NavBar />
      
      
      <form onSubmit={handleSubmit}>

      <h2 align="center" style={{fontFamily:"cursive",fontSize:"40px"}}><u>Sign In</u></h2>
      <br/>
      {
        message ? <h4 align="center" style={{color:"red"}}>{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
      <br/>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder='Email' variant='standard' required />
          
          {/* <TextField type="email" id="email" value={formData.email} onChange={handleChange} label="Email" variant='standard' required /> */}
        </div>
        <br/>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} placeholder='Password' required />
        </div>
        <br/>
        <button type="submit" className="button-64" style={{fontWeight:"bolder"}}>Login</button><br/>
    
        
      </form>
      
      
    </div>
  );
}