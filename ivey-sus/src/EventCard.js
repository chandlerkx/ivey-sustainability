import React from 'react';
import Home from './pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Events from './pages/Events';
import OurTeam from './pages/OurTeam';
import NoPage from './pages/NoPage';
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AdbIcon from '@mui/icons-material/Adb';

export default function EventCard({imgFile, title, date, description}){
    
    return(
        <div style={{display: 'flex'}}>
            <div style={{flex: 2}}>
                <img style={{ width: '100%', height: '100%' }} src={imgFile}></img>
            </div>

            <div style={{flex: 5}}>
                <p>{title}</p>
                <p>{date}</p>
                <p>{description}</p>
                <Button size="large" style={{ color: 'white', backgroundColor: '#202A44'}}>Register Now</Button>
            </div>
        </div>
    )
}