import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/something">something</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    );
};

export default Header;