import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-icons">
        <a href="#" className="facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
