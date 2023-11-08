import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '', 
    city: '' ,
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const { name, email, gender, city, password, confirmPassword } = formData;
    const newErrors = {};

    if (name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    if (email.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid Email';
    }

    if (gender === '') {
      newErrors.gender = 'Select Gender';
    }

    if (city === '') {
      newErrors.city = 'Select City';
    }

    if (password.trim() === '' || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
      newErrors.password = 'Password does not meet criteria';
    }

    if (confirmPassword.trim() === '' || confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log('Form submitted with data:', formData);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="Registration-form">
      <h1>Registration Form</h1>
         <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {submitted && errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {submitted && errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                onChange={handleInputChange}
                value="male"
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                onChange={handleInputChange}
                value="female"
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                onChange={handleInputChange}
                value="other"
              />
              Other
            </label>
          </div>
          {submitted && errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select
            id="city"
            name="city"
            onChange={handleInputChange}
          >
            <option value="">Select a city</option>
            <option value="Ratnagiri">Ratnagiri</option>
            <option value="Pune">Pune</option>
            <option value="Bhusawal">Bhusawal</option>
            <option value="chiplun">chiplun</option>
            <option value="Other">Other</option>
          </select>
          {submitted && errors.city && <span className="error">{errors.city}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {submitted && errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {submitted && errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
