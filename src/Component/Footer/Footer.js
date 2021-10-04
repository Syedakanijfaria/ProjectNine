import React from 'react';
import Details from '../Details/Details.js';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="left-container text-start">
                            <h3>Popular courses</h3>
                            <div className="popular">
                                <Details style={{ height: "200px" }}></Details>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-menu-container">
                            <h3>Usefull Links</h3>
                            <ul>
                                <li className="footer-menu">Home</li>
                                <li className="footer-menu">Courses</li>
                                <li className="footer-menu">Sports</li>
                                <li className="footer-menu"> About us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="right-footer-container">
                            <h3>Contact Us</h3>
                            <p>76 Woodland Ave. Sherman Drive Fort Walton Beach,Harlingen</p>
                            <p> +299 97 39 82</p>
                            <p> (08) 8971 7450</p>
                            <p> academy@info.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;