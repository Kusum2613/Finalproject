import React from "react";
import { Link } from "react-router-dom";
import img from "../../public/connect logo.jpg"; 
import "../../public/P2.css"


function P2() {
  return (
    <div>
      <img className="img2" src={img} alt="Connect Logo" />
      <div className="sign-in">
        <h1>Sign in</h1>

        <div className="input2">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        </div>
        <button>Log In</button>
        <p>
          Don't have an account? <Link to="/signup">Sign-Up</Link>
        </p>
      </div>
    </div>
  );
}

export default P2;
