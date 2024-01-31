import React, { useState } from 'react';

export default function TeamCard({ imgFile, name, role, emailLink, linkedinLink, description }) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div style={{paddingRight:'3rem'}}>
                    <img src={imgFile} alt={name} style={{width:'100%', height:'auto', filter: isHovered ? 'blur(5px)' : 'none', transition: 'filter 0.1s'}}></img>
                    {isHovered && (
        <div 
            style={{
                position: 'absolute', 
                bottom: 0, // Adjust the vertical position as needed
                left: 0, 
                width: '100%', 
                padding: '1rem', // Add padding for better visibility
                boxSizing: 'border-box',
                color: 'white', // Set text color
                fontSize: '1.5rem', // Set font size
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Set background color with some transparency
            }}
        >
            Your overlay text here
        </div>
    )}
                </div>
            </div>
                <div style={{}}>
                    <p style={{ fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Arial', color: '#104702', paddingTop: '10%' }}>{name}</p>
                    <p style={{ fontWeight: '700', lineHeight: '0', fontSize: '1.6rem', fontFamily: 'Arial', color: '#374A1D', paddingTop: '9%' }}>{role}</p>
                    
                </div>
                
            
            <div>
            <a href={emailLink} target="_blank" rel="noopener noreferrer">
                <img style={{ paddingTop: '10%' }} src='/icons/mail.png' alt="Email"/>
            </a>
            <a style={{ marginLeft: "3%" }} href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <img src='/icons/linkedin.png' alt="LinkedIn"/>
            </a>
        </div>
    </div>
    );
}
