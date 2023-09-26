

import React from 'react';
import '../assets/css/ProfilePage.css';
import { useNavigate } from 'react-router-dom';



function ProfilePage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/'); 
  }
  
  const handleEdit = () => {
    navigate("/EditProfilePage"); 
  }
  return (
    
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
      </div>
      <div className="profile-details">
        <div className="profile-avatar">
          <img
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            alt="User Avatar"
          />
        </div>
        <div className="user-info">
          <h2>David</h2>
          <p>Email: rio@gmail.com</p>
          <p>Location: Kallakurichi</p>
          <p>Member since: January 2020</p>
        </div>
      </div>
      <div className="profile-description">
        <h3>About Me</h3>
        <p>
          I'm a passionate reader who loves exploring different genres of books.
          My favorite author is J.K. Rowling, and I'm always on the lookout for
          new books to add to my collection.
        </p>
      </div>
      <div className="profile-actions">
        <button className="edit-profile-button" onClick={handleEdit}>Edit Profile</button>
        <button className="logout-button" onClick={handleLogout}> LogOut</button>
        
      </div>
    </div>
  );
}

export default ProfilePage;
