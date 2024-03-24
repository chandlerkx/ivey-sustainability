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
import AdbIcon from '@mui/icons-material/Adb';
import { Grid, Typography, useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';



export default function EventCard({imgFile, title, date, description}){
    const theme = useTheme();

    
    return (
        <Grid container justifyContent={theme.breakpoints.down('xs') ? 'center' : 'flex-start'} spacing={2} alignItems="center" sx={{ marginTop: '4%', marginBottom: {
            xs: '15%',
            sm: '15%',
            md: '0%',
            lg: '0%',
            xl: '0%',
          },}} >
        <Grid item xs={false} md={0.4} style={{ backgroundColor: 'transparent' }} />
          <Grid item xs={10} md={4} style={{ backgroundColor: 'transparent' }}>
            <img style={{  width: '100%', height: '100%' }} src={imgFile} alt="Image" />
          </Grid>
          <Grid item xs={12} md={0.4} style={{ backgroundColor: 'transparent' }}>
            <div style={{ backgroundColor: 'white', height: '100%' }}></div>
          </Grid>
          <Grid item xs={12} md={6.8} sx={{
      marginRight: '35px',
      backgroundColor: 'transparent',
      marginLeft: {xs: '7%', md: 0},
      justifyContent: { xs: 'center', md: 'flex-start' },
      alignItems: { xs: 'center', md: 'flex-start' }
    }}>

            <Typography style={{ color: '#104702', fontSize: '32px', fontWeight: 'bold', lineHeight: '32px', paddingTop: '3%' }}>{title}</Typography>
            <Typography style={{ color: '#542D2D', fontSize: '1.4rem', lineHeight: '0px', paddingTop: '2%' }}>{date}</Typography>
            <Typography style={{ fontSize: '1.8rem', lineHeight: '26px', paddingTop: '3.5%' }}>{description}</Typography>
            <a href="https://docs.google.com" target='_blank' rel="noopener noreferrer">
              <Button variant="contained" style={{ textTransform: 'none', color: 'white', backgroundColor: '#51694B', marginTop: '3.5%', borderRadius: '0.3rem', fontSize: '1rem' }}>Register Here ➤</Button>
            </a>
          </Grid>
        </Grid>
      );
    
}