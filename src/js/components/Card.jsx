import React from "react";



const Card = ({ img, title, text }) => {

    return (
        <div className="col-lg-3 col-md-6 col-12">
            <div className="card">
                <img src={img} className="card-img-top rounded mx-auto d-block tattoo" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href="#" className="btn btn-primary">Get An Appointment</a>
                </div>
            </div>
        </div>

    )
};

export default Card;