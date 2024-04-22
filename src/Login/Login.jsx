import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) { // Change the function name to handleLogin
    e.preventDefault();
    try {
      // Send login request
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password
      });

      // Log the response data to inspect it
      console.log(response.data);

      // Check response
      if (response.data === "success") {
        // Redirect to '/home' after successful login
        alert("Successfully logged in");
        window.location.href = "/";
      } else {
        // Handle login failure
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      alert("Error occurred during login. Please try again.");
    }
  }
  
  return (
    <section className="vh-100 bg-dark">
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-8">
            <div className="card bg-light text-dark">
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src="https://www.hornsby.nsw.gov.au/__data/assets/image/0017/123623/pet-registration.jpg"
                    alt="Sample photo"
                    className="img-fluid"
                    style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body p-md-5">
                    <h3 className="mb-5 text-uppercase">Login</h3>
                    <form onSubmit={handleLogin}>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="email">Email</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="password">Password</label>
                      </div>
                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-warning btn-lg">Login</button>
                        <Link to="/signup" className="btn btn-link">Don't have an account? Sign up</Link>
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
};

export default Login;
