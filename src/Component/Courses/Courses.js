import React from 'react';
import { Link } from 'react-router-dom';

const Courses = (props) => {
    const { name, img, des, price } = props.data || {};
    return (
        <div className="courses">

            <div className="col">
                <div className="card h-100">
                    <img src={img} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{des}</p>
                        <Link to="/courses">
                            <button className="btn btn-outline-warning">Learn More</button>
                        </Link>
                    </div>
                    <div className="card-footer d-md-flex">
                        <h3>Per lesson: $ {price}</h3>
                        <button className="button btn btn-warning me-md-2">Enroll</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;