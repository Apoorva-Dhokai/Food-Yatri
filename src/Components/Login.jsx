import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import styles from "./CSS/Login.module.css";
// import loginImage from "../assets/images/Login.jpg"
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.toLowerCase() === 'vlogger' && password === 'vloggerpassword') {
      history.push('/vlogger');
    } else if (username.toLowerCase() === 'user' && password === 'userpassword') {
      history.push('/user');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div className={styles.login}>
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
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/login" className="active">
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
      <section className={styles.signup_box}>
        <h1 className={styles.signup_heading}>Login</h1>
        <div className={styles.login_input}>
          <form id={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.login_input}>
              <input
                type="text"
                className={styles.textbox}
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div><br />
            <div className={styles.passwordcontainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                className={styles.passwordcontainer}
                id="passwordInput"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className={styles.togglepassword}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div><br />
            <div className={styles.login_input}>
              <button type="submit" className={styles.submit}><b>Submit</b></button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
