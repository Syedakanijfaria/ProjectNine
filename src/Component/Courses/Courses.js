import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details/Details.js';
import "./Courses.css";

const Courses = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('./data_2.json')
            .then(res => res.json())
            .then(data => setdata(data));
    }, [])

    return (
        // fake data_2 loading container
        <div className="courses">
            <div className=" m-5 p-5">
                <h2 className="text-center text-decoration-underline mb-5">Our Courses</h2>
                <div className="row">
                    <div className="col">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {data.map((data) =>
                                <Details key={data.key} data={data}></Details>)}
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link to="/courses">
                        <button className=" mt-5 btn btn-outline-warning">View All Courses</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Courses;