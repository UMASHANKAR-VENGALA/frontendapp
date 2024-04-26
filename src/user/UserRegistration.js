import React, { useState } from 'react';
import axios from 'axios';

export default function Registration() 
{
  //formData state variable is initialized with all required keys and empty values
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    email: '',
    password: '',
    contact: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    
    setFormData({...formData, [e.target.id]: e.target.value});
    
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2032/insertuser', formData);
      if (response.status === 200) 
      {
        //It will set all fields to ""
        setFormData({
          fullname: '',
          gender: '',
          email: '',
          password: '',
          contact: ''
        });
      }
      setMessage(response.data);
      setError(''); 
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage(''); 
    }
  };
  
  return (
    <div>
      
      <form onSubmit={handleSubmit}>

      <h3 align="center" style={{fontSize:"40px"}}>Registration</h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

        <div>
          <label>Full Name</label>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Other</option>
          </select>
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact </label>
          <input type="text" id="contact" value={formData.contact}   pattern="[6789][0-9]{9}" onChange={handleChange} required />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}