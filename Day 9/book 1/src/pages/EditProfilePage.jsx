// EditProfilePage.jsx

import React, { useState } from 'react';
import '../assets/css/EditProfilePage.css';

function EditProfilePage() {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    location: 'New York, USA',
    bio: 'I love reading books and exploring different genres.',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to update the user's profile data
    console.log('Profile updated:', formData);
  };

  const handleAvatarUpload = (e) => {
    // Handle avatar upload logic here (e.g., using FormData, Axios, etc.)
    console.log('Avatar uploaded:', e.target.files[0]);
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      <div className="avatar-container">
        <div className="avatar-preview">
          <img
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            alt="User Avatar"
            className="avatar"
          />
        </div>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/*"
          onChange={handleAvatarUpload}
          className="avatar-upload"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            rows="4"
            value={formData.bio}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProfilePage;
