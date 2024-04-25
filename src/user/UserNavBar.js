import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import UserHome from './UserHome';
import UserProfile from './UserProfile';
import UpdateUserProfile from './UpdateUserProfile';


export default function UserNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
     localStorage.removeItem('isUserLoggedIn');
     localStorage.removeItem('user');

    navigate('/userlogin');
    window.location.reload()
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/userhome">Home</Link></li>
          <li ><Link to="/userprofile">View Profile</Link></li>
          <li><Link to="/updateprofile">Update Profile</Link></li>
          <li style={{float:"right"}}><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/userhome' element={<UserHome/>} exact/>
        <Route path='/userprofile' element={<UserProfile/>} exact/>
        <Route path='/updateprofile' element={<UpdateUserProfile/>} exact/>
      </Routes>
    </div>
  );
}