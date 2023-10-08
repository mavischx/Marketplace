import React, { useState } from "react";
import './UserLogin.css';
import LoginForm from "../Componenets/LoginForm";
import { useNavigate } from 'react-router-dom';

function UserLogin() {
  const [formData, setFormData] = useState({
    
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateField = (fieldName, value) => {
    const updatedErrors = { ...errors };

    if (fieldName === "email") {
      if (!value.match(/^.+@.+\..+\.com$/)) {
        updatedErrors.email = "Must be a valid email address";
      } else {
        updatedErrors.email = "";
      }
    }

    if (fieldName === "password") {
      if (value.length < 6) {
        updatedErrors.password = "Password must be at least 6 characters long";
      } else {
        updatedErrors.password = "";
      }
    }

    setErrors(updatedErrors);
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before sending the request
    for (const key in formData) {
      validateField(key, formData[key]);
    }

    // Check if there are any errors
    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (!hasErrors) {
      try {
        const response = await fetch('http://localhost:3001/login', {  
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      
        if (response.ok) {
          var userId;
          const data = await response.json();
           console.log(data);
          if (data.id) {
            userId = data.id;
            sessionStorage.setItem('userId', userId);
            

            console.log(userId);
            // Store the token in local storage or perform any other actions upon successful login
            localStorage.setItem('token', data.token);
          }
          console.log(userId);
          navigate('../ShowUserDetails');
        } else {
          // Log the error response from the server
          const errorResponse = await response.json();
          console.error('Login Failed:', errorResponse.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="loginForm">
      <div className="divform">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="title">Login</h1>
          <LoginForm
            type="text"
            name="email"
            placeholder="example@gmail.com"
            label="Email address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <LoginForm
            type="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <button className="submitButton" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
