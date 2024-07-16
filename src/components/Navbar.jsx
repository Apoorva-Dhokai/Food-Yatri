import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile.png';
import './css/Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img height="75" src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup" className="active">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/bestseller">Best-Seller</Link></li>
        <li><Link to="/uploadcontent">Upload Content</Link></li>
        <li><Link to="/vloggers">Top Vloggers</Link></li>
      </ul>
      <div id="profile">
        <Link to="#">
          <img height="30" src={profile} alt="Profile" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;