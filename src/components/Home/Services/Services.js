import React from 'react';
import service1 from '../../../images/service1.png';
import service2 from '../../../images/service2.png';
import service3 from '../../../images/service3.png';
import ServiceCard from './ServiceCard';

const serviceData = [
    {
        title: 'Flouride Treatment',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est cupiditate aliquam atque, voluptate animi dolores.',
        icon: service1,
    },
    {
        title: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est cupiditate aliquam atque, voluptate animi dolores.',
        icon: service2,
    },
    {
        title: 'Teath Whitening',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est cupiditate aliquam atque, voluptate animi dolores.',
        icon: service3,
    }
]

const Services = () => {
    return (
        <section>
            <div className="container mt-5">
                <div className="text-center">
                    <h5 style={{ color: '#1cc7c1' }}>OUR SERVICES</h5>
                    <h1 style={{ color: '#3A4256' }}>Services We Provide</h1>
                </div>
                <div className="row mt-5">
                    {
                        serviceData.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;