import React from "react";

import './Card.css';
const Card = (prop) => {
    return (
        <div style={prop.balOrExp?{background:"#107100"}:{background:"#B00000"}} className="card-container">
            <h3 className="card-header">{prop.header}</h3>
            <div className="card-details-container">
                <h2 className="card-currency-units">Rs</h2>
                <p className="card-amount">{prop.amount}</p>
            </div>
        </div>
    )
}

export default Card;