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
          <li className="dropdown">
            <Link>Profile</Link>
            <div className="dropdown-content">
            <Link to="/userprofile">View Profile</Link>
            <Link to="/updateprofile">Update Profile</Link>
            </div>
          </li>
          <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
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