import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CSS/UserSignIn.module.css';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile.png';
// import loginBackground from '../assets/images/Login.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SignIn = () => {
  const [passwordType, setPasswordType] = useState('password');
  const history = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value.toLowerCase();
    const password = event.target.password.value;

    if (username === 'vlogger' && password === 'vloggerpassword') {
      history.push('/topvlogger');
    } else if (username === 'user' && password === 'userpassword') {
      history.push('/user');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div className={styles.user}>
      <header>
        <nav>
          <div className="logo">
            <Link to="/">
              <img height="75" src={logo} alt="Logo" />
            </Link>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup" className="active">Sign up</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/topvlogger">Top Vloggers</Link></li>
          </ul>
          <div className="profile">
            <Link to="#">
              <img height="30" src={profile} alt="Profile" />
            </Link>
          </div>
        </nav>
      </header>
      <section className={styles.signupBox}>
        <h1 id="signup_heading" className={styles.signupHeading}>Sign In</h1>
        <div className={styles.loginInput}>
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className={styles.loginInput}>
              <input
                type="text"
                className={styles.textbox}
                id="username"
                name="username"
                placeholder="Name"
                required
              /><br />
            </div>
            <div className={styles.loginInput}>
              <input
                type="text"
                className={styles.textbox}
                id="email"
                name="email"
                placeholder="Email"
                required
              /><br />
            </div>
            <div className={styles.passwordContainer}>
              <input
                type={passwordType}
                className={styles.passwordContainer}
                id="password"
                name="password"
                placeholder="Password"
                required
              />
              <i className={`toggle-password fas fa-eye ${styles.togglePassword}`} onClick={togglePasswordVisibility}></i>
            </div>
            <br />
            <div className={styles.loginInput}>
              <button type="submit" id="submit" className={styles.submit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
