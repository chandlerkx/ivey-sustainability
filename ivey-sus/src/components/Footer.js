import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { MailOutline, Instagram, LinkedIn, Facebook } from '@mui/icons-material';

function Footer() {
  const iconStyle = { color: 'black', fontSize: '3.4em' };

  return (
    <footer>
      <Container maxWidth="lg" style={{ textAlign: 'right' }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={8} style={{ backgroundColor: 'transparent' }}>
            {/* Add content for the first grid item if needed */}
          </Grid>
          <Grid item xs={12} md={0.9} style={{ backgroundColor: 'transparent' }}>
            <Link href="https://gmail.com/" target="_blank" rel="noopener noreferrer">
              <MailOutline fontSize="large" sx={iconStyle} />
            </Link>
          </Grid>
          <Grid item xs={12} md={0.9} style={{ backgroundColor: 'transparent' }}>
            <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <Instagram fontSize="large" style={iconStyle} />
            </Link>
          </Grid>
          <Grid item xs={12} md={0.9} style={{ backgroundColor: 'transparent' }}>
            <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <Facebook fontSize="large" style={iconStyle} />
            </Link>
          </Grid>
          <Grid item xs={12} md={0.9} style={{ backgroundColor: 'transparent' }}>
            <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <LinkedIn fontSize="large" style={iconStyle} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
