import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { MailOutline, Instagram, LinkedIn, Facebook } from '@mui/icons-material';

function Footer() {
  const iconStyle = { color: 'black', fontSize: '3.4em' };

  return (
    <div>
      <Container maxWidth="100%" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', justifyContent: "flex-end"} }} style={{ backgroundColor: 'transparent', textAlign: 'right' }}>
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
