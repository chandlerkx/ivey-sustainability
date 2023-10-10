import React from 'react';
//0.001% 0 0.5% 0px 
export default function Stripe({title, description}){

    return(
        <div style={{backgroundColor: '#125900'}}>
            <div style={{marginLeft: '3%', padding: '2% 0 2% 0px'}}> 
                <h1 style={{fontSize: '40px', color: 'white'}}>{title}</h1>
                <p style={{fontSize: '22px', color: 'white'}}>{description}</p>
            </div>
        </div>
    )

}