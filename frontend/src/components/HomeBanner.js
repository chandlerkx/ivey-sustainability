import React from 'react';
import { Typography } from '@mui/material';

export default function HomeBanner() {
    return (
    <div style={{width:'100%',height:'auto'}}>
            <img style={{ width: '100%', height: '100%'}} src="/images/iveybuilding.png" alt="Ivey Building"/>
            <Typography sx={{display: {xs: 'flex', md: 'none'}}}style={{position:'absolute', top:'9vw', left:'5%',color:'#125900', fontSize:'5vw', maxWidth:'80%'}}>Ivey MSc Sustainability Club</Typography>
            <Typography sx={{display: {xs: 'none', md: 'flex'}}}style={{position:'absolute', top:'6vw', left:'5%',color:'#125900', fontSize:'4vw', maxWidth:'40%'}}>Ivey MSc</Typography>
            <Typography sx={{display: {xs: 'none', md: 'flex'}}}style={{fontWeight: '600', position:'absolute', top:'11vw', left:'5%',color:'#125900', fontSize:'4vw', maxWidth:'40%'}}>Sustainability</Typography>
            <Typography sx={{display: {xs: 'none', md: 'flex'}}}style={{fontWeight: '600', position:'absolute', top:'16vw', left:'5%',color:'#125900', fontSize:'4vw', maxWidth:'40%'}}>Club</Typography>
    </div>
);
}

