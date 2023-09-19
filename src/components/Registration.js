// src/components/Registration.js

import React, { useState } from 'react';
import axios from 'axios';



function Registration({ onPageChange }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/register', {
        email,
      password,
      firstName,
      lastName,
      });

      onPageChange('login');
      console.log(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} required />
        <input type="text" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} required />
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <button onClick={() => onPageChange('login')}>Login here</button></p>
    </div>
  );
};
export default Registration;
