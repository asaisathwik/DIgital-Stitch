
import React from 'react';
import './Services.css'; // Link to your CSS file

const Services = () => {
  return (
    <section className="services-section" id='services'>
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-item" id='cloth'>
          <h3>Purchase Cloth</h3>
          <p>
            Choose from a wide variety of premium fabrics on our platform, or bring your own for customization.
          </p>
          <a><button >Reach Out</button></a>
        </div>

        <div className="service-item" >
          <h3>Custom Tailoring</h3>
          <p>
            Experience our personalized tailoring services. Choose between online measurements, in-person consultations, or video calls to get the perfect fit.
          </p>
          <a><button >Reach Out</button></a>
        </div>
        
        <div className="service-item">
          <h3>Repairs & Alterations</h3>
          <p>
            We offer professional alterations and repairs for your clothing to ensure a perfect fit and long-lasting wear.
          </p>
          <a><button >Reach Out</button></a>
        </div>

        <div className="service-item">
          <h3>In Home services</h3>
          <p>
            We come to your home  and will do any servies if u provide all the things 
          </p>
          <a><button >Reach Out</button></a>
         </div>
      </div>
    </section>
  );
};

export default Services;
