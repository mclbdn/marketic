import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-text-wrapper">
        <h3>
          READY TO
          <br />
          TALK
          <br />
          MARKETING.
        </h3>
      </div>
      <div className="footer-social-media-wrapper">
        <h3>FOLLOW US:</h3>
        <a href="https://www.facebook.com" target="_blank">
          <FontAwesomeIcon className="social-media-icon" icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <FontAwesomeIcon className="social-media-icon" icon={faTwitter} />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <FontAwesomeIcon className="social-media-icon" icon={faYoutube} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
