import React from 'react';
import MailIcon from '../icons/mail.png';
import LinkedinIcon from '../icons/linkedin.png';

export default function TeamCard({imgFile, name, role, emailLink, linkedinLink}){
    return(
        <div style={{backgroundColor: 'white', display: 'block',padding:'2.5rem',paddingBottom:'0',paddingTop:'5rem'}}>
            <div style={{backgroundColor:'white'}}>
                <img src={imgFile}></img>
            </div>
            <div style={{}}>
                <p style={{fontWeight: 'bold', fontSize:'2rem',fontFamily:'Arial'}}>{name}</p>
                <p style={{lineHeight:'0px', fontSize:'1.8rem', fontFamily:'Arial'}}>{role}</p>
                <a href={emailLink} target="_blank">
                    <img src={MailIcon}/>
                </a>
                <a style={{marginLeft:"3%"}}href={linkedinLink} target="_blank">
                    <img src={LinkedinIcon}/>
                </a>
            </div>
        </div>
    )
}