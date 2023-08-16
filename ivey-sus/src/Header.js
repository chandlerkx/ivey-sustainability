import React, {useState} from 'react';
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
import DropdownMenu from "./DropdownMenu"





export default function Header(){

  const [isDropdownVisible, setDropDownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropDownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropDownVisible(false);
  };

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


          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: 'relative' }}>
            <Button color="inherit">Events</Button>
            {isDropdownVisible && (
            <div
              style={{
                position: 'absolute', // Set absolute positioning
                top: '100%', // Position below the Events button
                left: 0, // Align with the Events button
                backgroundColor: 'white', // Add background color for the dropdown
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)', // Add a box shadow for styling
              }}
            >
              <DropdownMenu />
            </div>
          )}
        </div>

          <Button component={Link} to="/ourteam" color="inherit">Our Team</Button>
          <Button component={Link} to="/media" color="inherit">Media</Button>
          <Button component={Link} to="/contact" color="inherit">Contact</Button>

        </Toolbar>
      </AppBar>

    )
}