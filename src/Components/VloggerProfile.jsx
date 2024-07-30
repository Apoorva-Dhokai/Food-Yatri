// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './CSS/Profile.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile.png';
import pro from '../assets/profile_img/profile3.jpg'

const Profile = () => {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
  ];

  return (
    <div className={styles.profile}>
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
            <Link to="/profile">
              <img
                height="30"
                src={profile}
                alt="Profile"
              />
            </Link>
          </div>
        </nav>
      </header>
      <div className={styles.profile_container}>
        <div className={styles.profile_header}>
          <img src={pro} alt="Profile" className={styles.profile_image} />
          <h1 className={styles.profile_name}>John Doe</h1>
          <p className={styles.profile_title}>Software Developer</p>
        </div>
        <div className={styles.profile_details}>
          <h2>About Me</h2>
          <p>Hello! Im John Doe, a passionate software developer with expertise in web development, particularly in React and Node.js. I enjoy building user-friendly applications and constantly learning new technologies.</p>
        </div>
        <div className={styles.profile_social}>
          <h2>Connect with Me</h2>
          <div className={styles.social_icons}>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>
        <div className={styles.profile_posts}>
        {posts.map(post => (
            <div key={post.id} className={styles.post}>
              {post.type === 'photo' ? (
                <img src={post.src} alt={`Post ${post.id}`} className={styles.post_image} />
              ) : (
                <video controls className={styles.post_video}>
                  <source src={post.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <p className={styles.post_caption}>{post.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;