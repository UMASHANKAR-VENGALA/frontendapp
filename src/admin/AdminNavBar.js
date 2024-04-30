import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './admin.css';
import AdminHome from './AdminHome';
import ViewUsers from './ViewUsers';
import ViewUserProfile from './ViewUserProfile';
import AddSongs from './AddSongs';
import CreateAlbum from './CreateAlbum';
import ViewAlbum from './ViewAlbum';
import AdminAlbums from './AdminAlbums';
import PlaySong from './PlaySong';
import Home from '../main/Home';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/');
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
          {/* <li><Link to="/adminalbums">Albums</Link></li> */}
          <li><Link to="/createsong">Add Song</Link></li>
              {/* <Link to="/viewsongs">View Songs</Link></li> */}
          <li style={{float:"right"}}><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path="/adminhome" element={<AdminHome />} exact />
        <Route path="/viewusers" element={<ViewUsers />} exact />
        <Route path="/viewuserprofile/:email" element={<ViewUserProfile/>} exact />
        <Route path="/createsong" element={<AddSongs/>} exact />
        <Route path="/addsongs" element={<AddSongs/>}/>
        <Route path="/viewalbum" element={<ViewAlbum/>}/>
        <Route path="/viewalbum/:moviename" element={<ViewAlbum />} />
        <Route path="/createalbum" element={<CreateAlbum/>}/>
        <Route path="/adminalbums" Component={AdminAlbums}/>
        <Route path="/playsong/:songname" element={<PlaySong/>}/>
        
      </Routes>
    </div>
  );
}