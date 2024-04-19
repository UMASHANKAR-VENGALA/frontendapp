import React, { useState } from 'react';
import axios from 'axios';

export default function Register()
{
  //formData state variable is initialized with all required keys and empty values
  // const [formData, setFormData] = useState({
  //   fullname: '',
  //   email: '',
  //   password: '',
  // });

  // //message state variable
  // const [message, setMessage] = useState('');
  // //error state variable
  // const [error, setError] = useState('');

  // const handleChange = (e) => 
  // {
    
  //   setFormData({...formData, [e.target.id]: e.target.value});
  // };

  // const handleSubmit = async (e) => 
  // {
  //   e.preventDefault();
  //   try
  //   {
  //     const response = await axios.post('http://localhost:2032/insertuser', formData);
  //     if (response.status === 200) 
  //     {
  //       //It will set all fields to ""
  //       setFormData({
  //         fullname: '',
  //         email: '',
  //         password: '',
  //       });
  //     }
  //     setMessage(response.data);
  //     setError(''); //set error to ""
  //   } 
  //   catch(error) 
  //   {
  //     setError(error.response.data);
  //     setMessage(''); //set message to ""
  //   }
  // };
  
  return (
    <div >
      <form>
      <h3 align="center" style={{fontFamily:"cursive",fontSize:"40px"}}><u>Register</u></h3>
      <br/>
      {/* {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      } */}
      <br/>
        <div>
          <label>Full Name</label>
          <input type="text" id="fullname"  placeholder='Fullname' required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email"  placeholder='Email' required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password"  placeholder='Password' required />
        </div>
        
        
        <button type="submit" className="button-64" style={{fontWeight:"bolder"}}>Register</button>
      </form>
    </div>
  );
}