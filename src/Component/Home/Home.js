import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Courses from '../Courses/Courses.js';
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
            <div className="row m-5 p-5">
                <div className="col-md-6">
                    <h2>Welcome to EduPack Learning school</h2>
                    <p>Tempus quam pellentesque nec nam aliquam sem et tortor.In dictum non consectetur a erat nam at lectus.Lorem ipsum dolor sit amet consectetur adipiscing.Nibh nisl condimentum id venenatis a.In nulla posuere sollicitudin aliquam.Et egestas quis ipsum suspendisse ultrices gravida.</p>
                    <Link to="/about">
                        <button className="btn btn-outline-warning">Learn More</button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <img className="w-75 mx-auto d-block" src="https://quotefancy.com/media/wallpaper/3840x2160/1699923-Steve-Jobs-Quote-Learn-continually-There-s-always-one-more-thing.jpg" />
                </div>
            </div>
            <div className=" m-5 p-5">
                <h1 className="text-center text-decoration-underline">Our Courses</h1>
                <div className="row">
                    <div className="col">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {data.map(data => <Courses key={data.key} data={data.length}></Courses>)}
                        </div>
                    </div>
                </div>
                <Link to="/courses">
                    <button type="button" className=" mt-5 button btn btn-outline-warning">View All Courses</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;