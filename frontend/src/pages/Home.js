import React from 'react';
import Button from "@mui/material/Button";
import HomeBanner from '../components/HomeBanner';
// import { Routes, Route, Link } from 'react-router-dom';


const Home = () => {
    return (

        <div>
            <div style={{position:'relative'}}>
                <HomeBanner/>
            </div>
            <h2 style={{marginLeft: '3%', fontSize: '2rem', paddingTop:'3rem', paddingBottom:'2rem'}}>Providing members with the opportunity to further explore<br/>the topic of sustainability through informative events,<br/>quality research, and information on relevant careers.</h2>
            <div style={{display: 'flex', marginLeft: '3%'}}>
                <div style={{flex: 6}}>
                    <p style={{fontSize: '1.78rem', paddingTop:'2rem'}}>Helping students realize how sustainability converges with all facets of business. Our hope is to support members as they launch their business careers and arm them with the knowledge necessary to become leaders designed to create positive social and environmental impact.</p>
                    <br/>
                    <p style={{lineHeight:'0', fontSize: '32px', fontWeight: 'bold', paddingTop:'5rem'}}>Interested in getting involved?</p>
                    <a href="https://docs.google.com" target='_blank' rel="noreferrer">
                        <Button style={{textTransform:'none', fontWeight:'bold', color: 'white', backgroundColor: '#51694B',borderRadius:'0.5rem', padding:'2rem', fontSize:'1.1rem', paddingTop:'0.6rem', paddingBottom:'0.6rem', marginTop:'2.5rem'}}>Inquire about the club</Button>
                    </a>
                </div>
                <div style={{flex: 3}}>

                </div>
                <div style={{flex: 8}}>
                    <img  alt="" style={{maxWidth: '100%', height: '80%'}} src="../images/homebackground.png" />
                </div>
            </div>
        </div>


    )
    
    


};

export default Home;