import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




export default function AdminLogin() 
{
  // const [formData, setFormData] = useState({
  //   username: '',
  //   password: ''
  // });
  // const [message,setMessage] = useState("")
  // const [error,setError] = useState("")

  // // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try 
  //   {
  //     const response = await axios.post('http://localhost:2032/checkadminlogin', formData);
  //     if (response.data!=null) 
  //     {
        // navigate("/adminhome")
  //     } 
  //     else 
  //     {
  //       setMessage("Login Failed")
  //       setError("")
  //     }
  //   } 
  //   catch (error) 
  //   {
  //     setMessage("")
  //     setError(error.message)
  //   }
  // };

  return (
    <div>
      <form>
      <h3 align="center" style={{fontFamily:"cursive",fontSize:"40px"}}><u>Admin Login</u></h3>
      <br/>
      {/* {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      } */}
      <br/>
        <div>
          <label>Username</label>
          <input type="text" name="username" placeholder='username' required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" placeholder='password' required />
        </div>
        <button type="submit" className="button-64" style={{fontWeight:"bolder"}}>Login</button>
        </form>
    </div>
  );
}

