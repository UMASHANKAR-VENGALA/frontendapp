import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './main/NavBar';
import UserNavBar from './user/UserNavBar';
import AdminNavBar from './admin/AdminNavBar';

export default function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    const userLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';
    
    setIsAdminLoggedIn(adminLoggedIn);
    setIsUserLoggedIn(userLoggedIn);
  }, []);

  const onAdminLogin = () => {
    localStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
  };

  const onUserLogin = () => {
    localStorage.setItem('isUserLoggedIn', 'true');
    setIsUserLoggedIn(true);
  };


  return (
    <div className="App">
      <h3 align="center">ZENE</h3>
      <Router>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isUserLoggedIn ? (
          <UserNavBar />
        ) : (
          <NavBar
            onAdminLogin={onAdminLogin}
            onUserLogin={onUserLogin}
          />
        )}
      </Router>
    </div>
  );
}