import React from 'react';
import './PricingPlans.css';

const pricingData = [
  {
    plan: "Basic",
    price: "$49",
    features: [
      "Custom Measurements",
      "1 Fabric Choice",
      "Standard Tailoring",
      "Delivery in 2 Weeks"
    ]
  },
  {
    plan: "Premium",
    price: "$99",
    features: [
      "Custom Measurements",
      "3 Fabric Choices",
      "Premium Tailoring",
      "Delivery in 1 Week",
      "Free Alterations"
    ]
  },
  {
    plan: "Deluxe",
    price: "$149",
    features: [
      "Custom Measurements",
      "Unlimited Fabric Choices",
      "Luxury Tailoring",
      "Express Delivery in 3 Days",
      "Free Alterations",
      "Personal Stylist Consultation"
    ]
  }
];

const PricingPlans = () => {
  return (
    <div className="pricing-plans-section">
      <h2>Pricing Plans</h2>
      <div className="pricing-container">
        {pricingData.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3>{plan.plan}</h3>
            <p className="price">{plan.price}</p>
            <ul className="features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="select-plan-button">Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
