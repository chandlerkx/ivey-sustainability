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





export default function Header(){
    return(
        <AppBar style={{ backgroundColor: 'green' }} position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        </IconButton>

        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />


        <Typography variant="h14" 
            component="div" sx={{ flexGrow: 1 }}>
            Ivey Sustainability
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/events" color="inherit">Events</Button>
          <Button component={Link} to="/ourteam" color="inherit">Our Team</Button>


        </Toolbar>
      </AppBar>

    )
}