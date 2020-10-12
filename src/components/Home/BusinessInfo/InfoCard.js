import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Style.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 col-sm-6 col-xs-12 text-white info-card">
            <div className="d-flex info-container align-items-center justify-content-center" style={{ backgroundColor: info.background }}>
                <div className="mr-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>                
            </div>
        </div>
    );
};

export default InfoCard;