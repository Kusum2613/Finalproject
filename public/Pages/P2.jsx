import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../public/connect logo.jpg"; 
import "../../public/P2.css";

function P2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/p4");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <img className="img2" src={img} alt="Connect Logo" />
      <div className="sign-in">
        <h1>Sign in</h1>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="input2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>

        <p>
          Don't have an account? <Link to="/signup">Sign-Up</Link>
        </p>
      </div>
    </div>
  );
}

export default P2;
