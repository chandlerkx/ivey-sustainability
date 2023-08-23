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
import TextField from '@mui/material/TextField';


export default function InputField({title, subtitle}){
    return(
        <div>
            <h3>{title}</h3>
            <TextField style={{fontSize: "40px"}} margin="dense" size="small" id="filled-basic" variant="filled" placeholder={subtitle}/>
        </div>
    )
}