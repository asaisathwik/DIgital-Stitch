import React, { useState } from 'react';
import './NavBar.css';
import Login from './Login'; // Import the Login component for the modal

const Navbar = () => {
  const [dropdownServices, setDropdownServices] = useState(false);
  const [dropdownContact, setDropdownContact] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to manage login modal

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Digital Stitch</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#aboutus">About Us</a></li>
        {/* Services Dropdown */}
        <li 
          className="dropdown" 
          onMouseEnter={() => setDropdownServices(true)} 
          onMouseLeave={() => setDropdownServices(false)}
        >
          <a href="#services" className="dropbtn">Services</a>
          {dropdownServices && (
            <div className="dropdown-content">
              <a href="#cloth">Cloth</a>
              <a href="#">Measurements</a>
              <a href="#">Repairs & Alterations</a>
            </div>
          )}
        </li>



        <li 
          className="dropdown" 
          onMouseEnter={() => setDropdownContact(true)} 
          onMouseLeave={() => setDropdownContact(false)}
        >
          <a href="" className="dropbtn">Contact Us</a>
          {dropdownContact && (
            <div className="dropdown-content">
              <a href="#">WhatsApp</a>
              <a href="#">Email</a>
              <a href="#">Message</a>
              <a href="#">Call</a>
            </div>
          )}
        </li>

        {/* Login Button that triggers the modal */}
        <li>
          <a href="#" onClick={() => setIsLoginOpen(true)}>Log In</a>
        </li>
      </ul>

      {/* Conditionally render the Login Modal */}
      {isLoginOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsLoginOpen(false)}>&times;</span>
            <Login /> {/* Display the Login component in the modal */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
