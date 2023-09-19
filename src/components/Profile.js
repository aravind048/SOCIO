// Profile.js

import React, { useState } from 'react';
import axios from 'axios';
import '../Profile.css';


const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handleUpdateProfile = async () => {
    try {
      // Send a request to update the user's profile
      await axios.put('http://localhost:5000/profile', {
        firstName,
        lastName,
        profilePicture,
      });
      console.log('Profile updated successfully.');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="registration-container">
      <h2>Profile Page</h2>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Profile Picture:
        <input type="text" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} />
      </label>
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default Profile;
