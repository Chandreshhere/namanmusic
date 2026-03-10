import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-contact">
          <h3>Book The Band</h3>

          <p className="secondary">
            From weddings to festivals — we're ready to rock your event. Reach
            out to discuss bookings and availability.
          </p>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/namanmusica/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaSpotify size={24} />
            </a>
          </div>

          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </div>

        <div className="footer-nav">
          <Link to="/" className="footer-nav-item">
            <span>Home</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/work" className="footer-nav-item">
            <span>Music</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/about" className="footer-nav-item">
            <span>About</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/contact" className="footer-nav-item">
            <span>Contact</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/faq" className="footer-nav-item">
            <span>FAQ</span>
            <span>&#8594;</span>
          </Link>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-header">
          <h1>Naman</h1>
          <h1>Musica</h1>
        </div>

        <div className="footer-copyright-line">
          <p className="primary sm">&copy; Naman Musica 2025</p>
          <p className="primary sm">Versatile Rock Band, India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
