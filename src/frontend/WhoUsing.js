import React from 'react';
import './WhoUsing.css'; // Import the CSS file for styling

const WhoUsing = () => {
  // Array containing celebrity data
  const celebrities = [
    {
      name: 'Ram Pothineni',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_rg4IniXz0as2j9EL2MmJFvizKNrYLQy7w&s', // Replace with actual image URL
      description: '“I love the versatility and style of these products!”',
    },
    {
      name: 'Anupama',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66yAGJNOMasrKQ5CddWXETeBA-7vil63f8g&s', // Replace with actual image URL
      description: '“These pieces are perfect for my everyday look.”',
    },
    {
      name: 'Harry Styles',
      image: '', // Replace with actual image URL
      description: '“Fashion is about being yourself, and I love these designs!”',
    },
    // Add more celebrities as needed
  ];

  return (
    <div className="who-using-section">
      <h1>Who are using..?</h1> <br></br>
      <div className="who-using-list">
        {celebrities.map((celebrity, index) => (
          <div className="who-using-card" key={index}>
            <img src={celebrity.image} alt={celebrity.name} className="who-using-image" />
            <h3>{celebrity.name}</h3>
            <p>{celebrity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoUsing;
