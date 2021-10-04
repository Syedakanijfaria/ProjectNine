import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const [data, setdata] = useState([]);
    //const dataSlice = data.slice(-2);

    useEffect(() => {
        fetch('./data_3.json')
            .then(res => res.json())
            .then(data => setdata(data));
    }, [])

    console.log(data.slice(-2));
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="left-container h-50">
                            <h3>Popular courses</h3>
                            {data.map((data) =>
                                <div className="col gap">
                                    <div className="card">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={data.img} className="img-fluid" alt="" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{data.name}</h5>
                                                    <Link to="/courses">
                                                        <button className="btn btn-outline-warning btn-sm">Learn More</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div >
                                    </div>
                                </div >)}
                        </div>
                    </div>
                    <div className="col-md-4 ps-5">
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
                            <p className="footer-menu"><i class="fas fa-paper-plane"></i> edupack @email.com</p>
                            <p className="footer-menu"><i class="fas fa-reply"></i> edupack@info.com</p>
                            <p className="footer-menu"><i class="fas fa-tty"></i> +299 97 39 82 , 01737625446</p>

                            <p className="footer-menu"><i class="fas fa-map-marker-alt"></i> 76 Road Uttara, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="text-center">
                    <h5>Social links</h5>
                    <i class="fab fa-facebook-square pe-2"></i>
                    <i class="fab fa-instagram pe-2"></i>
                    <i class="fab fa-linkedin pe-2"></i>
                    <i class="fab fa-twitter-square pe-2"></i>
                    <p><small>©2021 edupack. All rights reserved</small></p>
                </div>
            </div>
        </div >
    );
};

export default Footer;