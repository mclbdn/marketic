import React from "react";

import logo from "../assets/hero-girl.png";
import Navbar from "./Navbar";

const Hero= () => {
  return (
    <section className="hero-container" id="section-1">
      <Navbar />
      <div className="main-hero-content">
        <img src={logo} alt="Photo of a girl." />
        <div className="hero-text">
          <h1>
            THE DIGITAL MARKETING AGENCY WITH{" "}
            <span className="pink-text">ETHICAL</span> APPROACH
          </h1>
          <p>
            Find effective digital reach for your business, powered by human
            behaviour, driven by data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
