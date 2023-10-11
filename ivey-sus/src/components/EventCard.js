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
        <div style={{display: 'flex', marginTop: '2%', marginBottom: '60px'}}>
            <div style={{flex:0.25, backgroundColor: 'white'}}>

            </div>
            <div style={{flex: 3}}>
                <img style={{ width: '100%', height: '100%' }} src={imgFile}></img>
            </div>
            <div style={{flex: 0.25, backgroundColor: 'white'}}>
            </div>
            <div style={{flex: 5, marginRight: '35px', backgroundColor: 'white'}}>
                <p style={{overflow: 'clip', backgroundColor: 'white', fontSize: '32px', fontWeight: 'bold', lineHeight: '32px'}}>{title}</p>
                <p style={{fontSize: '22px', lineHeight: '0px'}}>{date}</p>
                <p style={{fontSize: '26px', lineHeight: '26px'}}>{description}</p>
                <Button size="large" style={{ color: 'white', backgroundColor: '#202A44'}}>Register Here</Button>
            </div>
        </div>
    )
    
}