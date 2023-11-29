import React from 'react';

export default function HomeBanner() {
    return (
    <div style={{position:'relative', width:'100%',height:'auto'}}>
            <img style={{ width: '100%', height: '100%'}} src="/images/iveybuilding.png" alt="Ivey Building"/>
            <p style={{position:'absolute', top:'3%', left:'5%',color:'#125900', fontSize:'5rem', maxWidth:'50%'}}>Ivey MSc Sustainability Club</p>
    </div>
);
}

