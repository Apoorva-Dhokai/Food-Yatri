// import React from 'react';
// import "../App.css";
import { Link } from "react-router-dom";
import styles from "./CSS/Home.module.css";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";

const Home = () => {
  return (
    <div
      className={styles.home}
    >
      <header>
        <nav>
          <div className="logo">
            <Link to="/">
              <img height="75" src={logo} alt="Logo" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/" className="active">Home</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
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
            <Link to="#">
              <img
                height="30"
                src={profile}
                alt="Profile"
              />
            </Link>
          </div>
        </nav>
      </header>
      <section className={styles.intro}>
        <h1 className={styles.pro_name}>FOOD YATRI</h1>
        <p className={styles.pro_dec}>
          A website for foodies to effortlessly uncover and delve <br />
          into street food spots and restaurants spotlighted <br />
          by renowned food vloggers.
        </p>
        <Link to="/topvlogger" className={styles.oval}>
          Vloggers
        </Link>
      </section>

      <footer>
        <p>
          Savor the Streets: Where Foodies Meet Vloggers&apos; Picks
        </p>
      </footer>
    </div>
  );
};

export default Home;