import './TestingStyle.css'; // Import your CSS file
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 


function Auth() {
  const [formData, setFormData] = useState({
    uname: '',
    email: '',
    pword: '',
  });

  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Handle login
        const response = await axios.post('http://localhost:8080/api/v1/login', formData);
        if (response.data) {
          alert('Login successful!');
          navigate('/events');
        } else {
          console.log('Response:', response.data);
          console.error('Error:', error);
          setError('Login failed. Please check your credentials.');
        }
      } else {
        // Handle sign-up
        if (formData.uname && formData.email && formData.pword) {
          const response = await axios.post('http://localhost:8080/api/v1/register', formData);
          if (response.data) {
            alert('Registration successful!');
            navigate('/events');
          } else {
            console.log('Response:', response.data);
            console.error('Error:', error);
            setError('Registration failed. Please check your input and try again.');
          }
        } else {
          setError('Please fill in all fields before registering.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login/registration.');
      setError('An error occurred during login/registration.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1 className="auth-header">{isLogin ? 'Login' : 'Signup'}</h1>
        {!isLogin && (
          <div>
            <label htmlFor="uname" className="auth-label">Username:</label>
            <input
              type="text"
              id="uname"
              name="uname"
              value={formData.uname}
              onChange={handleChange}
              className="auth-input username-input" 
              required
            />
          </div>
        )}

        <label htmlFor="email" className="auth-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="auth-input"
          required
        />

        <label htmlFor="pword" className="auth-label">Password:</label>
        <input
          type="password"
          id="pword"
          name="pword"
          value={formData.pword}
          onChange={handleChange}
          className="auth-input"
          required
        />

        <button type="button" onClick={handleSubmit} className="auth-button">
          {isLogin ? 'Login' : 'Register'}
        </button>

        <div>
          <button onClick={() => setIsLogin(!isLogin)} className="auth-switch-button">
            {isLogin ? 'Switch to Registration' : 'Switch to Login'}
          </button>
        </div>
      {/* {error && <p className="error-message">{error}</p>} */}
      </div>

    </div>
  );
}

export default Auth;
