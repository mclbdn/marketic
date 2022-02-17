import React from "react";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link
          delay={200}
          to="section-1"
          smooth={true}
          duration={500}
          className="logo-link"
        >
          <li>
            <span className="first-half-span-text">mark</span>
            <span className="second-half-span-text">etic</span>
          </li>
        </Link>
        <ol>
          <Link
            delay={200}
            to="section-1"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            <li>Home</li>
          </Link>
          <Link
            delay={200}
            to="section-2"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            <li>Features</li>
          </Link>
          <Link
            delay={200}
            to="section-3"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            <li>Contact</li>
          </Link>
        </ol>
      </nav>
    </header>
  );
};

export default Navbar;
