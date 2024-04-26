import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams


export default function ViewUserProfile() {
  const [userData, setUserData] = useState(null);
  const { email } = useParams(); // Extract email from URL parameters

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:2032/viewuserprofile/${email}`);
        setUserData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email]);


  if (!email) {
    return null;
  }

  return (
    userData ? (
      <div className='profile-card'>
        <h3 align="center">{userData.fullname}'s Profile</h3>
        <p><strong>Full Name:</strong> {userData.fullname}</p>
        <p><strong>Gender:</strong> {userData.gender}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Contact:</strong> {userData.contact}</p>
      </div>
    ) : (
      <p>No User Data Found</p>
    )
  );
}