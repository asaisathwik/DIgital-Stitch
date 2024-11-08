import React from 'react';
import './Reviews.css';

const reviewsData = [
  {
    name: "Alice Johnson",
    review: "I had an amazing experience with Digital Stitch! The tailored suit I received was perfect, and the service was top-notch.",
    rating: 5,
    // image: "https://via.placeholder.com/100" // Placeholder for customer images
  },
  {
    name: "Michael Smith",
    review: "The customization options are fantastic! I loved how my dress turned out. Highly recommend their services.",
    rating: 4,
    // image: "https://via.placeholder.com/100"
  },
  {
    name: "Emma Brown",
    review: "Great service! The team was professional and took great care in getting my measurements right.",
    rating: 4,
    // image: "https://via.placeholder.com/100"
  },
];

const Reviews = () => {
  return (
    <div className="reviews-section">
      <h2>What Our Customers Say</h2>
      <div className="reviews-container">
        {reviewsData.map((review, index) => (
          <div className={`review-card card-${index + 1}`} key={index}>
            {/* <img src={review.image} alt={`${review.name}'s profile`} className="profile-image" /> */}
            <h3>{review.name}</h3>
            <p>{review.review}</p>
            <div className="rating">Rating: {review.rating} ⭐</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
