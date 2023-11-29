import React from 'react';
import Button from "@mui/material/Button";
import Stripe from '../components/Stripe';
// import { Routes, Route, Link } from 'react-router-dom';


const Home = () => {
    return (

        <div>
            <img style={{ width: '100%', height: '100%'}} src="/images/iveybuilding.png" alt="Ivey Building" />
            <h2 style={{marginLeft: '3%', fontSize: '36px'}}>Providing members with the opportunity to further explore<br/>the topic of sustainability through informative events,<br/>quality research, and information on relevant careers.</h2>
            <div style={{display: 'flex', marginLeft: '3%'}}>
                <div style={{flex: 6}}>
                    <p style={{fontSize: '30px'}}>Helping students realize how sustainability converges with all facets of business. Our hope is to support members as they launch their business careers and arm them with the knowledge necessary to become leaders designed to create positive social and environmental impact.</p>
                    <br/>
                    <p style={{fontSize: '32px', fontWeight: 'bold'}}>Interested in getting involved?</p>
                    <Button fullWidth='30%' size="large" style={{ color: 'white', backgroundColor: '#202A44'}}>Become a Member</Button>
                </div>
                <div style={{flex: 3}}>

                </div>
                <div style={{flex: 8}}>
                    <img  style={{maxWidth: '100%', height: '50%'}} src="/testimage2.jpg" />
                </div>
            </div>
        </div>


    )
    
    


};

export default Home;