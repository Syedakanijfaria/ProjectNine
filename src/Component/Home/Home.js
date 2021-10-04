import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details/Details.js';
import './Home.css';

const Home = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setdata(data));
    }, [])

    return (
        <div className="home">
            {/* welcome sentences  */}
            <div className="row m-5 p-5">
                <div className="col-md-6">
                    <h2>Welcome to EduPack Learning school</h2>
                    <p>Tempus quam pellentesque nec nam aliquam sem et tortor.In dictum non consectetur a erat nam at lectus.Lorem ipsum dolor sit amet consectetur adipiscing.Nibh nisl condimentum id venenatis a.In nulla posuere sollicitudin aliquam.Et egestas quis ipsum suspendisse ultrices gravida.</p>
                    <Link to="/about">
                        <button className="btn btn-outline-warning">Learn More</button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <img className="w-75 mx-auto d-block" src="https://quotefancy.com/media/wallpaper/3840x2160/1699923-Steve-Jobs-Quote-Learn-continually-There-s-always-one-more-thing.jpg" alt="" />
                </div>
            </div>

            {/* fake data loading container*/}
            <div className=" m-5 p-5">
                <h2 className="text-center text-decoration-underline mt-5 mb-5">Our Courses</h2>
                <div className="row">
                    <div className="col">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {data.map((data) => <Details key={data.key} data={data}></Details>)}
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link to="/Courses">
                        <button className="mt-5 btn btn-outline-warning">View All Courses</button></Link>
                </div>
            </div>
            {/* Login container */}
            <div className="Login mb-5" id="login">
                <div style={{ height: "300px" }}
                    className="container d-flex justify-content-center align-items-center rounded-3" id="subscribe">
                    <div>
                        <h1>LET'S STAY IN TOUCH</h1>
                        <p>Get Updates on Educational services</p>
                        <form className="row g-3">
                            <div className="col-auto">
                                <label className="visually-hidden">Password</label>
                                <input className="form-control" type="text" placeholder="Your Email" />
                            </div>
                            <div className="col-auto">
                                <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className=" button btn btn-dark"> Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;