import React from 'react';

export default function TeamCard({imgFile, name, role, emailLink, linkedinLink}){
    return(
        <div style={{backgroundcolor: 'blue', display: 'block', marginTop:'2%', marginBottom:'4%', marginLeft:'2%'}}>
            <div style={{height: '20px', width: '50px', backgroundColor: "orange"}}>
                
            </div>
            <div style={{flex:0.3, backgroundColor:'pink', width: '250px'}}>
                <img style={{width: "200px", height: "200px"}} src={imgFile}></img>
            </div>
            <div style={{}}>
                <p style={{fontWeight: 'bold', fontSize:'1.2rem',fontFamily:'Arial'}}>{name}</p>
                <p style={{lineHeight:'0px', fontSize:'1.2rem', fontFamily:'Arial'}}>{role}</p>
                <a href={emailLink} target="_blank">
                    <img src="../public/gray-gmail-icon.png"/>
                </a>
                <a style={{marginLeft:"0.5%"}}href={linkedinLink} target="_blank">linkedin</a>
            </div>
            
        </div>
    )
}