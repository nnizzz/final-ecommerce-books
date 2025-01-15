import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo"><Link to="/">BooksStore</Link></div>
    <ul className="nav-links">
      <li><NavLink to="/" activeClassName="active" aria-label="Home">Home</NavLink></li>
      <li><NavLink to="/books" activeClassName="active" aria-label="Books">Books</NavLink></li>
      <li><NavLink to="/cart" activeClassName="active" aria-label="Cart">Cart</NavLink></li>
      <li><NavLink to="/login" activeClassName="active" aria-label="Login">Login</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
