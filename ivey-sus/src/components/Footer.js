import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <footer>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
          </Grid>
          <Grid item xs={12} md={2} textAlign="right">
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <GitHub fontSize="large" />
            </Link>
          </Grid>
          <Grid item xs={12} md={2} textAlign="right">
            <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <Twitter fontSize="large" />
            </Link>
          </Grid>
          <Grid item xs={12} md={2} textAlign="right">
            <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <LinkedIn fontSize="large" />
            </Link>
          </Grid>
          <Grid item xs={12} md={2} className="rightAlign" textAlign="right">
            <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <LinkedIn fontSize="large" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
