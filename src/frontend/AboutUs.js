import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us" id='aboutus'>
      <div className="about-container">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Welcome to <span>Digital Stitch</span> – your personalized tailoring experience at the click of a button! 
            We blend traditional tailoring with modern technology to bring custom-made clothing to your door.
          </p>
          <p>
            At Digital Stitch, we provide a range of services to meet your needs, including custom tailoring, 
            repairs, and alterations. Whether you choose our premium fabrics or bring your own, we make sure your 
            garments are crafted to perfection. Our services include:
          </p>
          <ul>
            <li>Seamless Online Measurement Options</li>
            <li>Expert Tailoring</li>
            <li>Repairs & Alterations</li>
            <li>Convenient Contactless Service</li>
          </ul>
          {/* .<button className="cta-btn">Learn More</button> */}
          {/* <a href="/about-more" className="know-more-btn">
          Know More
        </a> */}
        </div>
        <div className="about-image">
          <img src="https://media.istockphoto.com/id/1209732850/photo/top-view-of-sewing-machine-with-accessories-for-sewing-scissors-and-a-measuring-tape-on-pink.jpg?s=612x612&w=0&k=20&c=3r2P5mGihqqbH1akonlkHsuW7VWrFbVxyqtzPyZQmpE=" alt="Tailoring service" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
