//import { logDOM } from '@testing-library/dom';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from "../..//Image/logo/logo.png";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo-img ">
                            <img className="w-50" src={logo} alt="" />
                            <h1 className="m-auto">EduPack</h1>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <NavLink to="/home">Home</NavLink>
                                <NavLink to="/courses">Courses</NavLink>
                                <NavLink to="/teacher">Teacher</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/login">Login</NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;