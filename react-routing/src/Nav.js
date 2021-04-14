import React from 'react';
import './App.js';
import { Link } from 'react-router-dom';
const Nav = () => {
    const navStyle = {
        color: 'white',
        
    };
    return(
        <div>
            <nav className="nav">
                <h1>LoGo</h1>
                <ul className="nav-links">
                    <Link to="/about" style={navStyle}> <li>About</li> </Link>
                    <Link to="/shop" style={navStyle}> <li>Shop</li> </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;