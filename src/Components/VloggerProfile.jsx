// src/components/Profile.jsx
// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Profile.css';

const VloggerProfile = () => {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
        <h1 className="profile-name">John Doe</h1>
        <p className="profile-title">Software Developer</p>
      </div>
      <div className="profile-details">
        <h2>About Me</h2>
        <p>Hello! Im John Doe, a passionate software developer with expertise in web development, particularly in React and Node.js. I enjoy building user-friendly applications and constantly learning new technologies.</p>
      </div>
      <div className="profile-social">
        <h2>Connect with Me</h2>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
      <div className="profile-posts">
        <h2>My Posts</h2>
        {posts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VloggerProfile;
