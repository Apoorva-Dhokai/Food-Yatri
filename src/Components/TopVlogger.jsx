import 'swiper/css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "boxicons/css/boxicons.min.css";
import styles from "./CSS/TopVlogger.module.css"; 
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile.png';
import pro1 from '../assets/profile_img/profile1.jpg';
import pro2 from '../assets/profile_img/profile2.jpg';
import pro4 from '../assets/profile_img/profile4.jpg';
import pro5 from '../assets/profile_img/profile5.jpg';
import pro6 from '../assets/profile_img/profile6.jpg';
import pro7 from '../assets/profile_img/profile7.jpg';

const TopVlogger = () => {
  return (
    <div className={styles.topvlogger}>
      <header>
        <nav>
          <div className="logo">
            <Link to="/">
              <img height="75" src={logo} alt="Logo" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li> */}
            <li>
              <Link to="/topvlogger" className="active">Top Vloggers</Link>
            </li>
            <li>
              <div className={styles.search_bar}>
                <input type="text" placeholder="Search" />
              </div>
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

      {/* Swiper Section */}
      <section>
        <div className={styles.swiper}>
          <div className={classNames(styles.swiper_wrapper, styles.content)}>

            {/* Vlogger 1 */}
            <div className={classNames(styles.swiper_slide, styles.card)}>
              <div className={styles.card_content}>
                <div className={styles.image}>
                  <img src={pro1} alt="" />
                </div>
                <div className={styles.media_icon}>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <div className={styles.name_city}>
                  <span className={styles.name}>Joohie Patel</span>
                  <span className={styles.city}>Vadodara</span>
                </div>
              </div>
            </div>

            {/* Vlogger 2 */}
            <div className={classNames(styles.swiper_slide, styles.card)}>
              <div className={styles.card_content}>
                <div className={styles.image}>
                  <img src={pro2} alt="" />
                </div>
                <div className={styles.media_icon}>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <div className={styles.name_city}>
                  <span className={styles.name}>Nishith Patel</span>
                  <span className={styles.city}>Vadodara</span>
                </div>
              </div>
            </div>

            {/* Vlogger 3 */}
            <div className={classNames(styles.swiper_slide, styles.card)}>
              <div className={styles.card_content}>
                <div className={styles.image}>
                  <img src={pro4} alt="" />
                </div>
                <div className={styles.media_icon}>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <div className={styles.name_city}>
                  <span className={styles.name}>Hasti Dholakia</span>
                  <span className={styles.city}>Surat</span>
                </div>
              </div>
            </div>

            {/* Vlogger 4 */}
            <div className={classNames(styles.swiper_slide, styles.card)}>
              <div className={styles.card_content}>
                <div className={styles.image}>
                  <img src={pro5} alt="" />
                </div>
                <div className={styles.media_icon}>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <div className={styles.name_city}>
                  <span className={styles.name}>Arti Patel</span>
                  <span className={styles.city}>Mumbai</span>
                </div>
              </div>
            </div>

            {/* Vlogger 5 */}
            <div className={classNames(styles.swiper_slide, styles.card)}>
              <div className={styles.card_content}>
                <div className={styles.image}>
                  <img src={pro6} alt="" />
                </div>
                <div className={styles.media_icon}>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <div className={styles.name_city}>
                  <span className={styles.name}>Manan Patel</span>
                  <span className={styles.city}>Surat</span>
                </div>
              </div>
            </div>

            {/* Vlogger 6 */}
            <div className={classNames(styles.swiper_slide, styles.card)}>
              <div className={styles.card_content}>
                <div className={styles.image}>
                  <img src={pro7} alt="" />
                </div>
                <div className={styles.media_icon}>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <div className={styles.name_city}>
                  <span className={styles.name}>Vinesh Patel</span>
                  <span className={styles.city}>Ahmedabad</span>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </section>
    </div>
  );
};

export default TopVlogger;