import React, { useState } from 'react';
import './ReachOut.css'; // Custom styling for the form

const ReachOutForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Purchase Cloth',
    description: '',
    referenceImage: null,
    referenceLink: '',
    preferredDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      referenceImage: e.target.files[0], // handle single image upload
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Process form submission logic (backend integration goes here)
    alert("Form submitted successfully!");
  };

  return (
    <div className="reachout-form-container">
      <h2>Reach Out to Us</h2>
      <form onSubmit={handleSubmit}>

        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Service Type</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="Purchase Cloth">Purchase Cloth</option>
            <option value="Custom Tailoring">Custom Tailoring</option>
            <option value="Repairs & Alterations">Repairs & Alterations</option>
            <option value="In-Home Services">In-Home Services</option>
          </select>
        </div>

        <div className="input-group">
          <label>Describe Your Request</label>
          <textarea
            name="description"
            placeholder="Provide a brief description of your request"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Upload a Reference Image</label>
          <input
            type="file"
            name="referenceImage"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <div className="input-group">
          <label>Reference Link (optional)</label>
          <input
            type="url"
            name="referenceLink"
            placeholder="Enter a reference link (if any)"
            value={formData.referenceLink}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Preferred Date</label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
        <button type="reset" className="reset-btn" onClick={() => setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceType: 'Purchase Cloth',
          description: '',
          referenceImage: null,
          referenceLink: '',
          preferredDate: '',
        })}>Reset</button>
      </form>
    </div>
  );
};

export default ReachOutForm;
