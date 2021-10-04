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
        <div className="home m-5 p-5">
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
    );
};

export default Home;