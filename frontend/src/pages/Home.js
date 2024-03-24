import React from 'react';
import Button from "@mui/material/Button";
import HomeBanner from '../components/HomeBanner';
import { Typography } from '@mui/material';
// import { Routes, Route, Link } from 'react-router-dom';


const Home = () => {
    return (

        <div >
            <div style={{position:'relative'}}>
                <HomeBanner/>
            </div>
            <h2 style={{marginLeft: '4%', fontSize: '1.9rem', paddingTop:'3rem', paddingBottom:'2rem'}}>Providing members with the opportunity to further explore<br/>the topic of sustainability through informative events,<br/>quality research, and information on relevant careers.</h2>
            <div style={{display: 'flex', marginLeft: '4%'}}>
                <div style={{flex: 6}}>
                    <p style={{fontSize: '1.78rem', paddingTop:'2rem'}}>Helping students realize how sustainability converges with all facets of business. Our hope is to support members as they launch their business careers and arm them with the knowledge necessary to become leaders designed to create positive social and environmental impact.</p>
                    <br/>
                    <Typography sx={{display: {xs: 'none', sm: 'none', md: 'flex'}}} style={{lineHeight:'0', fontSize: '2.15vw', fontWeight: 'bold', paddingTop:'5rem'}}>Interested in getting involved?</Typography>
                    <a href="https://docs.google.com" target='_blank' rel="noreferrer">
                        <Button sx={{display: {xs: 'inline-flex', md: 'none'}}}style={{textTransform:'none', fontWeight:'600', color: 'white', backgroundColor: '#51694B',borderRadius:'0.5rem', paddingLeft:'2rem', paddingRight: '2rem', fontSize:'1.55rem', paddingTop:'0.9rem', paddingBottom:'1rem', marginTop:'2.5rem', marginBottom: '3.5rem', width: '200%'}}>Inquire about the club</Button>
                        <Button sx={{display: {xs: 'none', md: 'inline-flex'}}} style={{textTransform:'none', fontWeight:'600', color: 'white', backgroundColor: '#51694B',borderRadius:'0.5rem', paddingLeft:'1.6rem', paddingRight: '1.6rem', fontSize:'1.55rem', paddingTop:'0.9rem', paddingBottom:'0.9rem', marginTop:'2.5rem'}}>Inquire about the club</Button>
                    </a>
                </div>
                <div style={{flex: 3}}>

                </div>
                <div style={{flex: 8}}>
                    <img  alt="" style={{maxWidth: '80%', height: '80%'}} src="../images/homebackground.png" />
                </div>
            </div>
        </div>


    )
    
    


};

export default Home;