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

export default function Stripe({title, description}){

    return(
        <div style={{backgroundColor: '#125900'}}>
            <div style={{marginLeft: '3%', padding: '0.001% 0 0.5% 0px'}}>
                <h1 style={{fontSize: '40px', color: 'white'}}>{title}</h1>
                <p style={{fontSize: '22px', color: 'white'}}>{description}</p>
            </div>
        </div>
    )

}