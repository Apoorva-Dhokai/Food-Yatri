import React from 'react';
// import '../App.css';
import styles from "./css/Home.module.css"
import homeImage from "../../src/assets/images/home.jpg"

const Home = ({onNavClick}) => {
  return (
    <div className={styles.home} style={{ backgroundImage: `url(${homeImage})` }}>
      <section className="introh">
        <h1 id="pro_nameh">FOOD YATRI</h1>
        <p id="pro_dech">
          A website for foodies to effortlessly uncover and delve <br />
          into street food spots and restaurants spotlighted <br />
          by renowned food vloggers.
        </p>
        <a href="/Food_Yatri/Project/components/vlogger.html" className="oval-box">Vloggers</a>
      </section>

      <footer>
        <p>"Savor the Streets: Where Foodies Meet Vloggers' Picks"</p>
      </footer>
    </div>
  );
};

export default Home;