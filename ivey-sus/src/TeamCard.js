import React from 'react';

export default function TeamCard({imgFile, name, role, emailLink, linkedinLink}){
    return(
        <div>
            <div style={{}}>
                <img style={{width: "100%", height: "100%"}} src={imgFile}></img>
            </div>
        </div>
    )
}