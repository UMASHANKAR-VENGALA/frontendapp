import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './admin.css';

import AdminHome from './AdminHome';
import ViewUsers from './ViewUsers';
import ViewUserProfile from './ViewUserProfile';

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
          <li><Link to="/adminhome">Home</Link></li>
          <li className="dropdown">
            <Link>Users</Link>
            <div className="dropdown-content">
              <Link to="/viewusers">View Users</Link>
            </div>
          </li>
          <li className="dropdown">
            <Link>Songs</Link>
            <div className="dropdown-content">
                 <Link to="/createsong">Add Song</Link>
                 <Link to="/viewsongs">View Songs</Link>
            </div>
          </li>
          <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/adminhome" element={<AdminHome />} exact />
        <Route path="/viewusers" element={<ViewUsers />} exact />
        <Route path="/viewuserprofile/:email" element={<ViewUserProfile/>} exact />
        
      </Routes>
    </div>
  );
}