import React from 'react';
import InfoCard from './InfoCard';
import { faClock, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: '#1cc7c1',
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003, USA',
        icon: faMapMarkerAlt,
        background: '#3A4256',
    },
    {
        title: 'Call Us Now',
        description: '+8801712345678',
        icon: faPhoneVolume,
        background: '#1cc7c1',
    }        
]

const BusinessInfo = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    {
                        infoData.map(info => <InfoCard info={info}></InfoCard>)
                    }
                </div>
            </div>
        </section>

    );
};

export default BusinessInfo;