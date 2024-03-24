import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { MailOutline, Instagram, LinkedIn, Facebook } from '@mui/icons-material';

function Footer() {
  const iconStyle = { color: 'black', fontSize: '3.4em' };

  return (
    <div style={{ backgroundColor: 'transparent' }}>
      <Container maxWidth="80%" sx={{ backgroundColor: 'transparent', textAlign: 'right', width: '100%' }}>
        <Grid container spacing={1} justifyContent={'flex-end'}>

          <Grid item xs={1.3} md={1} style={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Link href="https://gmail.com/" target="_blank" rel="noopener noreferrer">
              <MailOutline fontSize="large" sx={iconStyle} />
            </Link>
          </Grid>
          <Grid item xs={1.3} md={1} style={{ backgroundColor: 'transparent' ,display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <Instagram fontSize="large" style={iconStyle} />
            </Link>
          </Grid>
          <Grid item xs={1.3} md={1} style={{ backgroundColor: 'transparent' ,display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <Facebook fontSize="large" style={iconStyle} />
            </Link>
          </Grid>
          <Grid item xs={1.3} md={1} style={{ backgroundColor: 'transparent' ,display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <LinkedIn fontSize="large" style={iconStyle} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
