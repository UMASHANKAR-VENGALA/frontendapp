import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './admin.css';

import AdminHome from './AdminHome';
import ViewUsers from './ViewUsers';
import ViewUserProfile from './ViewUserProfile';
import AddSong from './AddSong';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };

  return (
    <div>
      <nav>
        <ul>
          <li ><Link to="/adminhome">ZENE</Link></li>
          <li><Link to="/adminhome">Home</Link></li>
          <li >
              <Link to="/viewusers">View Users</Link>
          </li>
          <li><Link to="/createsong">Add Song</Link>
              <Link to="/viewsongs">View Songs</Link></li>
          <li style={{float:"right"}}><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/adminhome" element={<AdminHome />} exact />
        <Route path="/viewusers" element={<ViewUsers />} exact />
        <Route path="/viewuserprofile/:email" element={<ViewUserProfile/>} exact />
        <Route path="/createsong" element={<AddSong/>} exact />
        
      </Routes>
    </div>
  );
}