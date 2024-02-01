import React from 'react';
import {Link } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AdbIcon from '@mui/icons-material/Adb';
import DropdownMenu from "./DropdownMenu"

export default function Header(){

    return(
        <AppBar style={{ backgroundColor: 'white' }} position="static">
        <Toolbar>
        <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        </IconButton>

        {/*<AdbIcon sx={{ color:'black', display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr:2}}>
          <img style={{}}src='../images/Logo.png' component={Link} to="/home"></img>
        </IconButton>


        <Typography style={{color:'black'}} variant="h14" 
            component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button style={{color:'black'}} component={Link} to="/" color="inherit">Home</Button>
          <DropdownMenu/>
          <Button style={{color:'black'}} component={Link} to="/ourteam" color="inherit">Our Team</Button>
          <Button style={{color:'black'}} component={Link} to="/media" color="inherit">Media</Button>
          <Button style={{color:'black'}} component={Link} to="/contact" color="inherit">Contact</Button>

        </Toolbar>
      </AppBar>

    )
}