import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import P2 from "../public/Pages/P2.jsx"; 
import P3 from "../public/Pages/P3.jsx";
import P4 from "../public/Pages/P4.jsx";
import "../public/p1.css"; 
import imgSrc from "../public/connect logo.jpg"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<P2 />} />
        <Route path="/signup" element={<P3 />} />
        <Route path="/p4" element={<P4 />} />
      </Routes>
    </Router>
  );
}


function Home() {
  return (
    <div>
      <div className="sign">
        <img src={imgSrc} className="logo" alt="Logo" />
        
        <Link to="/signin">
          <button className="btn">Sign in free</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
