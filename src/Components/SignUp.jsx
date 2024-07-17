// import React from 'react';
import styles from './CSS/SignUp.module.css';
import { Link } from "react-router-dom";
// import signupImage from '../assets/images/Signup.png';
import user from "../assets/images/user.png";
import vlogger from "../assets/images/vlogger.png";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";

const SignUp = () => {
  return (
    <div className={styles.signup}>
      <header>
        <nav>
          <div className="logo">
            <Link to="/"><img height="75" src={logo} alt="Logo" /></Link>
          </div>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup" className="active">Sign up</Link>
            </li>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/topvlogger">Top Vloggers</Link>
            </li>
          </ul>
          <div className="profile">
            <Link to="#"><img height="30" src={profile} alt="Profile" /></Link>
          </div>
        </nav>
      </header>
      <section className={styles.intro}>
          <h1 className={styles.pro_name}>Sign Up</h1>
          <div className={styles.maincontent}>
              <h2>Sign Up As User or Vlogger?</h2>
              <div className={styles.options}>
                <img height="150" src={user} alt="User Icon" />
                <img height="150" src={vlogger} alt="Vlogger Icon" />
                <br/>
                <button><Link to="/signin">USER</Link></button>
                <button><Link to="/vsignin">VLOGGER</Link></button>
              </div>
          </div>
      </section>
    </div>
  );
};

export default SignUp;