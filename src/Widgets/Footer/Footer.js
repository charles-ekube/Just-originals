import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Logos } from "../../Assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <ul className="footer-content">
          <li className="footer-logo">
            <Link to="/">
              <img src={Logos} alt="logo" />
            </Link>
          </li>
          <li className="footer-quick-links-container">
            <ul className="footer-quick-links-content">
              <li>
                <Link to="/projects" style={{ color: "#fff" }}>
                  Project Management
                </Link>
              </li>
              <li>
                <Link to="/explore" style={{ color: "#fff" }}>
                  Talent Management
                </Link>
              </li>
              <li>
                <Link to='/blog' style={{ color: "#fff" }}>Blog</Link>
              </li>
            </ul>
          </li>
          <li className="footer-base-container">
            <ul className="footer-base-content">
              <li>ENGLISH</li>
              <li>
                <ul className="footer-base-social-links">
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                </ul>
              </li>
              <li>
                <ul className="footer-base-copyright">
                  <li>C</li>
                  <li>JUST ORIGINAL</li>
                  <li>2020</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </>
  );
};

export { Footer };
