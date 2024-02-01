import React from 'react';
import Home from '../pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Events from '../pages/Events';
import OurTeam from '../pages/OurTeam';
import NoPage from '../pages/NoPage';
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AdbIcon from '@mui/icons-material/Adb';

export default function EventCard({imgFile, title, date, description}){
    
    
    return(
        <div style={{display: 'flex', marginTop: '4%'}}>
            <div style={{flex:0.25, backgroundColor: 'white'}}>

            </div>
            <div style={{flex: 3}}>
                <img style={{ width: '100%', height: '100%' }} src={imgFile}></img>
            </div>
            <div style={{flex: 0.25, backgroundColor: 'white'}}>
            </div>
            <div style={{flex: 5, marginRight: '35px', backgroundColor: 'white'}}>
                <p style={{overflow: 'clip', backgroundColor: 'white', fontSize: '32px', fontWeight: 'bold', lineHeight: '32px',paddingTop:'3%'}}>{title}</p>
                <p style={{fontSize: '1.4rem', lineHeight: '0px', paddingTop:'2%'}}>{date}</p>
                <p style={{fontSize: '1.8rem', lineHeight: '26px', paddingTop:'3.5%'}}>{description}</p>
                <a href="https://docs.google.com" target='_blank'>
                <Button style={{textTransform:'none',color: 'white', backgroundColor: '#51694B', marginTop:'3.5%',paddingLeft:'1.3rem', paddingRight:'1.3rem', borderRadius:'0.3rem',fontSize:'1rem'}}>Register Here ➤</Button>
                </a>
            </div>
        </div>
    )
    
}