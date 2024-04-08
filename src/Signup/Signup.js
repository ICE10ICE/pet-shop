import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Validate password
      if (password !== confirmPassword) {
        console.error('Passwords do not match');
        return;
      }

      // Send signup request using POST method
      const response = await axios.post('/signup', {
        email,
        phoneNumber,
        password,
      });
      console.log('Signup successful:', response.data);
      
      // Clear form fields after successful signup
      setEmail('');
      setPhoneNumber('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <section className="vh-100 bg-dark">
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-8">
            <div className="card bg-light text-dark">
              <div className="row g-0">
                <div className="col-md-6">
                  <img src="https://www.hornsby.nsw.gov.au/__data/assets/image/0017/123623/pet-registration.jpg"
                    alt="Sample photo" className="img-fluid"
                    style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                </div>
                <div className="col-md-6">
                  <div className="card-body p-md-5">
                    <h3 className="mb-5 text-uppercase">Signup</h3>

                    <div className="form-outline mb-4">
                      <input type="email" id="email" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                      <label className="form-label" htmlFor="email">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="tel" id="phoneNumber" className="form-control form-control-lg" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                      <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                      <label className="form-label" htmlFor="password">Create Password</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="confirmPassword" className="form-control form-control-lg" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                      <label className="form-label" htmlFor="confirmPassword">Re-type Password</label>
                    </div>

                    <div className="d-grid gap-2">
                      <button type="button" className="btn btn-warning btn-lg" onClick={handleSignup}>Signup</button>
                      <Link to="/login" className="btn btn-link">Already have an account? Login</Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;