import React, { useEffect, useState } from 'react';
import './user.css';

export default function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  return (
    userData ? (
      <div className='profile-card'>
        <h3 align="center">Profile</h3>
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