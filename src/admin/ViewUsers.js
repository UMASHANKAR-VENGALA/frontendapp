import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './admin.css';

export default function ViewUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);


  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:2032/viewusers');
      setUsers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (email) => {
    try {
      await axios.delete(`http://localhost:2032/deleteuser/${email}`);
      fetchUsers();
    } catch (error) {
      console.error(error.message);
    }
  }

  const viewUser = async (email) => {
    try 
    {
      navigate(`/viewuserprofile/${email}`)
      window.location.reload()
    } 
    catch (error) 
    {
      console.error(error.message);
    }
  }

  return (
    <div>
      <h1 align="center">Users</h1>
      <table border={1} align="center" style={{ width: 'auto', height: 'auto'}}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.fullname}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>
                  <button onClick={() => viewUser(user.email)} className='button'>View</button>
                  <button onClick={() => deleteUser(user.email)} className='button'>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" align='center'>Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}