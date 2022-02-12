import React from "react";

import logo from "../assets/hero-girl.png";

const Hero= () => {
  return (
    <section className="hero-container">
      <header>
        <nav>
          <a className="logo-link" href="">
            <li>
              <span className="first-half-span-text">mark</span>
              <span className="second-half-span-text">etic</span>
            </li>
          </a>
          <ol>
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>Features</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
          </ol>
        </nav>
      </header>
      <div className="main-hero-content">
        <img src={logo} alt="Photo of a girl." />
        <div className="hero-text">
          <h1>
            THE DIGITAL MARKETING AGENCY WITH <span className="pink-text">ETHICAL</span> APPROACH
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
