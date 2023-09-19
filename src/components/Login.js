// src/components/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import Profile from './Profile';
import { useDispatch } from 'react-redux';
import { setToken } from '../actions/authActions';

function Login({ setToken, onPageChange }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dispatch] = useDispatch();


  // const Login = () => {
  //   const dispatch = useDispatch();

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:5000/login', {
          email,
          password,
        });


        const token = response.data.token;

        dispatch(setToken(token));

        console.log(response.data); // Display the login success message
        setIsLoggedIn(true);
        onPageChange('profile'); // Redirect to profile page


      } catch (error) {
        console.error('Error logging in:', error);
      }
    };

    return (
      <div className="registration-container">
        {!isLoggedIn ? (
          <>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
              <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
              <button type="submit">Login</button>
            </form>
            <p>New here? <button onClick={() => onPageChange('register')}>Register now</button></p>
          </>
        ) : (
          <Profile />
        )}
      </div>
    );
  }
// }

export default Login;
