import React from 'react';
import styles from './css/SignUp.module.css';
import signupImage from '../assets/images/Signup.png';
import user from "../assets/images/user.png";
import vlogger from "../assets/images/vlogger.png";

const SignUp = () => {
  return (
    <div className={styles.signup} style={{ backgroundImage: `url(${signupImage})` }}>
      <section className="intro">
          <h1 id="pro_name">Sign Up</h1>
          <div className="main-content">
              <h2>Sign Up As User or Vlogger?</h2>
              <div className="options">
                <img height="150" src={user} alt="User Icon" />
                <img height="150" src={vlogger} alt="Vlogger Icon" />
                <br/>
                <button><a href="/Food_Yatri/Project/components/user_signin.html">USER</a></button>
                <button><a href="/Food_Yatri/Project/components/vlogger_signin.html">VLOGGER</a></button>
              </div>
          </div>
      </section>
    </div>
  );
};

export default SignUp;