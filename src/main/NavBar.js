import React from "react";
import { Link , Routes , Route } from "react-router-dom";
import Home from "./Home";
import UserRegistration from "../user/UserRegistration";
import UserLogin from "../user/UserLogin";
import AdminLogin from "../admin/AdminLogin";
import PageNotFound from "./PageNotFound";
import './style.css'
import LOGO from './LOGO.png';

export default function NavBar({onAdminLogin,onUserLogin}) {
    return (
      <div>
        <nav>
        <ul>

            <li className="logo" style={{fontFamily:"serif"}}><Link to="/">ZENE</Link></li>
            <li style={{color:"red"}}><Link to="/">Home</Link></li>
            <li><Link to="/userregistration">User Registration</Link></li>
            <li style={{float:"right",height:"100%"}} ><Link  to="/userlogin">User Login</Link>
                <Link  to="/adminlogin">Admin Login</Link></li>
          </ul>
        </nav>
  
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/userregistration" element={<UserRegistration/>} exact />
          <Route path="/userlogin" element={<UserLogin onUserLogin={onUserLogin}/>} exact />
          <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>} exact />
          <Route path="*" element={<PageNotFound/>} exact />
        </Routes>
      </div>
    );
  }