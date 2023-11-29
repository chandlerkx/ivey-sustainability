import React, { useState } from 'react';

export default function TeamCard({ imgFile, name, role, emailLink, linkedinLink, description }) {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        backgroundColor: 'white',
        display: 'block',
        padding: '1.5rem',
        paddingBottom: '0',
        paddingTop: '0',
        position: 'relative', 
        overflow: 'hidden', 
        transition:'filter 100s'
    };

    const blurStyle = isHovered ? { filter: 'blur(5px)' } : null;

    const descriptionStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // semi-transparent background
        display: isHovered ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center',
        opacity: isHovered ? 1 : 0,
        transition:'opacity 1s'
    };

    return (
        <div 
            style={cardStyle} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={blurStyle}>
                <img src={imgFile} alt={name}></img>
                <p style={{ fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Arial', color: '#104702', paddingTop: '10%' }}>{name}</p>
                <p style={{ fontWeight: '700', lineHeight: '0', fontSize: '1.6rem', fontFamily: 'Arial', color: '#374A1D', paddingTop: '9%' }}>{role}</p>
                <a href={emailLink} target="_blank" rel="noopener noreferrer">
                    <img style={{ paddingTop: '10%' }} src='/icons/mail.png' alt="Email"/>
                </a>
                <a style={{ marginLeft: "3%" }} href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <img src='/icons/linkedin.png' alt="LinkedIn"/>
                </a>
            </div>
            <div style={descriptionStyle}>
                <p style={{maxWidth:'15rem', fontWeight:'bold', fontSize:'1.3rem'}}>{description}</p> 
            </div>
        </div>
    );
}
