import React from "react";
import { Link ,useNavigate } from "react-router-dom";
import img from "../../public/connect logo.jpg"; 
import "../../public/P3.css"


function P3() {
    const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation on button click
  const handleCreateAccount = () => {
    navigate("/p4"); // Redirects to the P4 page
  };
  return (
    <div>
      <img className="img2" src={img} alt="Connect Logo" />
      <div className="sign-up">
      <span><h1>Create an account</h1><a><Link to="/signin">Sign In needed</Link></a></span>
        <div className="cont">
        <div className="input2">
          <label>first name</label> 
          <input type="text" className="input3" />
          <label>last name</label> 
          <input type="text" className="input3"  />
          <label>email</label>
          <input type="email" className="input3"/>
          <label>password</label>
          <input type="password"className="input3" />
          <label>confirm password</label>
          <input type="password" className="input3" />
         
        </div>
        <p>
            <input type="checkbox" id="terms-checkbox" />  
            By creating an account, I agree to our 
            <a href="#" style={{ color: "blue", textDecoration: "underline" }}> Terms of Use</a> and 
            <a href="#" style={{ color: "blue", textDecoration: "underline" }}><br></br> Privacy Policy</a>.
          </p>
        
        <button onClick={handleCreateAccount}>Create an account</button>
        </div>
       
      </div>
    </div>
  );
}

export default P3;
