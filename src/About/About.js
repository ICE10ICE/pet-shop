import React from "react";
import "./about.css";
import CountUp from "react-countup";
import Footer from "./footer";
const About = () => {
  return (
    <>
      <section className="About-wrapper">
        <div className="paddings innerWidth flexCenter About-container">
          <div className=" flexColStart About-left">
            <div className="About-title">
              <div className="circle" />
              <div className="f-circle" />
              <div className="s-circle" />

              <h1>
                Find your <br /> paw-perfect
                <br />
                friend
              </h1>
            </div>
            <div className="count">
              <h1>#AdoptLove campaign</h1>
            </div>
            <div className="flexColStart About-desc">
              <span>Gift a home to the cutest paws of your choice.</span>
              <span>Bring home your tail-trail partner.</span>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Hey,look for me here!" />
              <button className="Button">Search</button>
            </div>
          </div>
          <div className=" flexCenter About-right">
            <div className="image-container">
              <img src="./about-img.jpg" alt="cute doggo img"></img>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default About;
