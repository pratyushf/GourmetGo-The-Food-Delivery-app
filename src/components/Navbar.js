import React from 'react';
import { Link } from 'react-router-dom';
import order from '../img/order.png';

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <img src={order} alt="logo" />
        <span className="logotxt">gourmetGo: The Food App</span>
      </div>
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/">
              Home
              <i className="fa-solid fa-bowl-food"></i>
            </Link>
          </li>
          <li><Link to="/About">About</Link></li>
          <li>
            <Link to="/">
              Search
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              Offers
              <span className="new-tag">New</span>
              <i className="fa-solid fa-tag"></i>
            </Link>
          </li>
          <li>
            <Link to="/Help">
              Help
              <i className="fa-solid fa-circle-info"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              Sign In
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              Cart
              <i className="fa-brands fa-opencart"></i>
            </Link>
          </li>
          <li>
            <Link to="/Instamart">
              Instamart 
              <i className="fa-solid fa-bag-shopping"></i>
            </Link>
          </li>
          <li>
            <a className="cta" href="/Contact">
              <button>Contact</button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
