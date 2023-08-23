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
          <DropdownMenu/>
          <Button component={Link} to="/ourteam" color="inherit">Our Team</Button>
          <Button component={Link} to="/media" color="inherit">Media</Button>
          <Button component={Link} to="/contact" color="inherit">Contact</Button>

        </Toolbar>
      </AppBar>

    )
}