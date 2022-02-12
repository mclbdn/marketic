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
          <h1>asdasdasdsadasd</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            deleniti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
