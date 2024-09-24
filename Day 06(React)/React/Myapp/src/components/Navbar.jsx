// src/components/Navbar.jsx
import React from 'react';
import './nav.css'; // Optional CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"></div>
            <ul className="nav-links">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="cart">🛒</div>
        </nav>
    );
};

export default Navbar;
