import React from 'react'

const Navbar = () => {
  return (
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
  );
}

export default Navbar