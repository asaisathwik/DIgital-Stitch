import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Digital Stitch</h3>
          <p>
            Digital Stitch offers customized tailoring services, making sure every client gets the perfect fit. Our online tailoring solutions for men and women guarantee the best results through an easy and efficient measurement process.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@digitalstitch.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="socials">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Digital Stitch. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
