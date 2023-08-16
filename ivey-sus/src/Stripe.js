import React from 'react';
import Layout from './pages/Layout';
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
        <div style={{backgroundColor: 'green'}}>
            <div>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )

}