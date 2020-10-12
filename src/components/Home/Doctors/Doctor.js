import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
        {
            doctor.image ? <img style={{height: '200px'}} alt="Doctor" src={`data:image/png;base64,${doctor.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${doctor.img}`} alt=""/>
        }
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon style={{ fontColor: '#1cc7c1' }} icon={faEnvelopeSquare}/> {doctor.email}</p>
        </div>
    );
};

export default Doctor;