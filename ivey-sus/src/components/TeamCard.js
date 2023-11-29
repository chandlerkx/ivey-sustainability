import React from 'react';

export default function TeamCard({imgFile, name, role, emailLink, linkedinLink}){
    return(
        <div style={{backgroundColor: 'white', display: 'block',padding:'1.5rem',paddingBottom:'0',paddingTop:'0'}}>
            <div style={{backgroundColor:'white'}}>
                <img src={imgFile}></img>
            </div>
            <div>
                <p style={{fontWeight: 'bold', fontSize:'2rem',fontFamily:'Arial',color:'#104702'}}>{name}</p>
                <p style={{fontWeight:'700',lineHeight:'0', fontSize:'1.6rem', fontFamily:'Arial', color:'#374A1D'}}>{role}</p>
                <a href={emailLink} target="_blank">
                    <img src='/icons/mail.png'/>
                </a>
                <a style={{marginLeft:"3%"}}href={linkedinLink} target="_blank">
                    <img src='/icons/linkedin.png'/>
                </a>
            </div>
        </div>
    )
}