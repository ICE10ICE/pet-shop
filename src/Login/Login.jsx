import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Login = () => {
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
                    <h3 className="mb-5 text-uppercase">Login</h3>

                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example97" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example97">Email ID</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example99" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example99">Password</label>
                    </div>

                    <div className="d-grid gap-2">
                      <button type="button" className="btn btn-warning btn-lg">Login</button>
                      <Link to="/signup" className="btn btn-link">Don't have an account? Sign up</Link>
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

export default Login;