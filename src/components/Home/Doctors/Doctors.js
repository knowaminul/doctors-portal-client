import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';
const Doctors = () => {    
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('https://quiet-bayou-58578.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctor(data));
    }, [])
    return (
        <section className="doctors">
            <div className="container">
                <h5 style={{ color: '#1cc7c1' }} className="text-center text-uppercase mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctor.map(doctor => <Doctor doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;