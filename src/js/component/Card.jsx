import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ imageSrc, description }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt="Card" />
            <p>{description}</p>
            <button className="blue-button">Find out more</button>
        </div>
    );
};

Card.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;
