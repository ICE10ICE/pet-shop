import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Signup.css";


function SignupForm() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSignup(e) {
    e.preventDefault();
    try {
      // Validate password
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      
      // Send signup request
      const response = await axios.post("http://localhost:5000/signup", {
        email,
        phoneNumber,
        password
      });
  
      // Log the response data to inspect it
      console.log(response.data);
  
      // Check response
      if (response.data === "success") {
        // Redirect to '/home' after successful signup
        alert("Successfully signed up");
        window.location.href = "/";
      } else {
        setError("User already exists");
      }
    } catch (error) {
      console.error("Error occurred during signup:", error);
      setError("Error occurred during signup. Please try again.");
    }
  }
  
  
  
  return (
    <section className="signup-section vh-100 bg-dark">
      <div className="signup-container container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-8">
            <div className="signup-card card bg-light text-dark">
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src="https://www.hornsby.nsw.gov.au/__data/assets/image/0017/123623/pet-registration.jpg"
                    alt="Sample photo"
                    className="signup-img img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-6">
                  <div className="signup-card-body card-body p-md-5">
                    <h3 className="signup-title mb-5 text-uppercase text-center">Signup</h3>
                    <form onSubmit={handleSignup}>
                      {error && <div className="signup-alert alert alert-danger mb-3" role="alert">{error}</div>}
                      <div className="signup-input mb-3">
                        <input type="email" id="email" className="signup-form-control form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                      </div>
                      <div className="signup-input mb-3">
                        <input type="tel" id="phoneNumber" className="signup-form-control form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required />
                      </div>
                      <div className="signup-input mb-3">
                        <input type="password" id="password" className="signup-form-control form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create Password" required />
                      </div>
                      <div className="signup-input mb-3">
                        <input type="password" id="confirmPassword" className="signup-form-control form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Re-type Password" required />
                      </div>
                      <div className="signup-buttons d-grid gap-2">
                        <button type="submit" className="signup-btn btn btn-warning btn-lg">Signup</button>
                        <Link to="/login" className="signup-link btn btn-link">Already have an account? Login</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupForm;
