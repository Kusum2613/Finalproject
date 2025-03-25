import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../public/connect logo.jpg";
import "../../public/P3.css";

function P3() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateAccount = async () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        setError(""); // Clear error on success
        navigate("/p4");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <img className="img2" src={img} alt="Connect Logo" />
      <div className="sign-up">
        <span>
          <h1>Create an account</h1>
          <Link to="/signin">Sign In needed</Link>
        </span>
        <div className="cont">
          <div className="input2">
            <label>First Name</label>
            <input type="text" name="username" className="input3" onChange={handleChange} />
            <label>Email</label>
            <input type="email" name="email" className="input3" onChange={handleChange} />
            <label>Password</label>
            <input type="password" name="password" className="input3" onChange={handleChange} />
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" className="input3" onChange={handleChange} />
          </div>
          {/* Display error message */}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p>
            <input type="checkbox" id="terms-checkbox" /> By creating an account, I agree to our
            <a href="#" style={{ color: "blue", textDecoration: "underline" }}> Terms of Use</a> and
            <a href="#" style={{ color: "blue", textDecoration: "underline" }}> Privacy Policy</a>.
          </p>
          <button onClick={handleCreateAccount}>Create an account</button>
        </div>
      </div>
    </div>
  );
}

export default P3;