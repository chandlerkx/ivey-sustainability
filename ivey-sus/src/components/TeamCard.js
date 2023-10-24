import React from 'react';

export default function TeamCard({imgFile, name, role, emailLink, linkedinLink}){
    return(
        <div style={{backgroundColor: 'white', display: 'block',padding:'2.5rem',paddingBottom:'0',paddingTop:'0rem'}}>
            <div style={{backgroundColor:'white', width: '200px'}}>
                <img style={{maxWidth: "300px", height: "300px"}} src={imgFile}></img>
            </div>
            <div style={{}}>
                <p style={{fontWeight: 'bold', fontSize:'2rem',fontFamily:'Arial'}}>{name}</p>
                <p style={{lineHeight:'0px', fontSize:'1.8rem', fontFamily:'Arial'}}>{role}</p>
                <a href={emailLink} target="_blank">
                    <img src="black-gmail-icon.png" style={{maxWidth:'1.7rem'}}/>
                </a>
                <a style={{marginLeft:"0.5%"}}href={linkedinLink} target="_blank">
                    <img src="black-linkedin-icon.png" style={{maxWidth:'1.9rem'}}/>
                </a>
            </div>
        </div>
    )
}