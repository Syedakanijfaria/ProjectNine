import React from 'react';
import Details from '../Details/Details.js';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="left-container">
                            <h3>Popular courses</h3>
                            <div className="popular">
                                <Details style={{ height: "200px" }}></Details>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="middle-container">
                            <h3>Usefull Links</h3>
                            <ul>
                                <li className="footer-menu">Home</li>
                                <li className="footer-menu">Courses</li>
                                <li className="footer-menu">Teachers</li>
                                <li className="footer-menu"> About</li>
                                <li className="footer-menu"> Login</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="right-container">
                            <h3>Contact Us</h3>
                            <p className="footer-menu">76 Road Uttara, Dhaka, Bangladesh</p>
                            <p className="footer-menu"> +299 97 39 82</p>
                            <p className="footer-menu"> 01737625446</p>
                            <p className="footer-menu"> edupack@info.com</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <p><small>©2021 edupack. All rights reserved</small> </p>
            </div>
        </div >
    );
};

export default Footer;