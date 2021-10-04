import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/teacher">Teacher</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </div>
    );
};

export default Header;