import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Custom Tailored Suit",
      description: "A perfectly fitted suit tailored to customer measurements, featuring modern design and high-quality fabric.",
      image: "/images/suit.jpg",
    },
    {
      id: 2,
      title: "Casual Shirt Alterations",
      description: "A casual shirt redesigned to fit the customer better, including custom cuffs and length alterations.",
      image: "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Dress Repair & Styling",
      description: "A dress repaired and redesigned for a wedding occasion, incorporating new fabric elements and styles.",
      image: "/images/dress.jpg",
    }
  ];

  return (
    <section className="portfolio">
      <h2>Our Work</h2>
      <div className="portfolio-container">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
