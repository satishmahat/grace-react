import React from 'react';
import './whygrace.css';

const sellingPoints = [
    {
        icon: '❤️', 
        title: 'Complete Care',
        description: 'We provide a full suite of dental care to cover you and your family’s oral health needs.'
    },
    {
        icon: '🏠',
        title: 'Friendly Atmosphere',
        description: 'Our dental team will treat you with care and kindness at every visit.'
    },
    {
        icon: '👩🏻‍⚕️',
        title: 'Experienced Team',
        description: 'Our team of highly skilled professionals supports you every step of your dental health journey.'
    }
];

const Whygrace = () => {
    return (
        <div className="why-grace-container">
            <h2>Why Choose Grace Dental Care</h2>
            <div className="why-grace-cards">
                {sellingPoints.map((point, index) => (
                    <div className="card" key={index}>
                        <div className="icon">{point.icon}</div>
                        <h3>{point.title}</h3>
                        <p>{point.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Whygrace;
