import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Courses.css";

const Courses = (props) => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('./data_2.json')
            .then(res => res.json())
            .then(data => setdata(data));
    }, [])

    const { name, img, des, price, key } = props.data || {};

    return (
        <div className="courses">
            {data.map((data) => (
                <div className="col">
                    <div className="card h-100">
                        <img src={img} className="card-img-top img " alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">{name}</h3>
                            <p className="card-text">{des}</p>
                            <Link to="/courses">
                                <button className="btn btn-outline-warning">Learn More</button>
                            </Link>
                        </div>
                        <div className="card-footer d-md-flex">
                            <h4>Per lesson: $ {price}</h4>
                            <button className="button btn btn-warning me-md-2">Enroll</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Courses;