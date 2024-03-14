import React from 'react';
import backgroundImage from './Tree2.jpeg';
import { Typography } from '@mui/material';

//0.001% 0 0.5% 0px 
export default function Stripe({title, description}){

    return(
        <div style={{backgroundImage: `url(${backgroundImage})`}}>
            <div style={{marginLeft: '3%', padding: '2% 0 2% 0px'}}> 
                <Typography sx={{
    marginBottom: '0.4%',
    fontWeight: '800',
    fontSize: '42px',
    color: 'black',
    fontFamily: 'Nunito Sans, sans-serif', // Set the font family
  }}>{title}</Typography>
                {/* SUBJECT TO CHANGE!!! DEPENDS IF WE WANT THE TEXT TO SHOW WHEN SMALL OR NOT */}
                <Typography sx = {{
    marginBottom: '0.4%',
    fontWeight: '400',
    fontSize: '24px',
    color: 'black',
    fontFamily: 'Nunito Sans, sans-serif',
    display: {xs: 'none', md: 'flex'} // Set the font family
  }}>{description}</Typography>
            </div>
        </div>
    )

}