import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <img style={{ height: '80px', padding: '10px'}} src={service.icon} alt="" />
                <h4 className="mb-3 mt-3" style={{ color: '#3A4256' }}>{service.title}</h4>
                <p className="text-center text-secondary">{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;