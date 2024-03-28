import React from "react";
import Stripe from "../components/Stripe";
import InputField from "../InputField";
import { IconButton, TextField, Link, Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Email , Place} from "@mui/icons-material"


const Contact = () => {
    return (
        <Grid container spacing={0}>
        <Grid item xs={12}>
          <div style={{ height: '0px', backgroundColor: 'white' }} />
        </Grid>
        <Grid item xs={12}>
          <Stripe title="Contact" description="Questions, comments, or concerns? Connect wth us!" />
        </Grid>
        
          <Grid container spacing={0}>
            <Grid item xs={3} md={4.5} sx={{ backgroundColor: 'white', height: '100px' }} />
              <Grid container spacing={2} sx={{ backgroundColor: 'white', height: '37.5rem', width: '55vw', mt: 2 }}>
                <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h4" sx={{marginTop: '3rem', fontWeight: 'bolder', color: '#104702', mb: 2 }}>
                    Get in Touch
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <TextField
                            id="firstName"
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id="lastName"
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            required
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="phoneNumber"
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="message"
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={5}
                        required
                      />
                    </Grid>
                  </Grid>
                </Grid>
                </Grid>
                <Grid container justifyContent={'center'} width={'50%'} sx={{backgroundColor: 'white'}}> 
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      mt: { xs: 1 },
                      mb: 2,
                      width: {xs: '150px', md: '350px'},
                      height: '60px',
                      color: '#EEEEEE',
                      backgroundColor: '#51694B',
                      borderRadius: '0.6rem',
                      textTransform: 'none',
                      fontSize: '1.2rem',
                      '&:hover': { backgroundColor: '#51694B' },
                    }}
                  >
                    Send Message
                  </Button>
                  </Grid>
              </Grid>
            <Grid item xs={6} sx={{ backgroundColor: 'white', height: '2rem' }} />
          </Grid>
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={2} md={4} sx={{backgroundColor: 'white'}}/>
            <Grid item xs={8} sx={{backgroundColor: 'white'}}>
              <div style={{ marginLeft: "0%", height: "40vw", maxWidth: "50rem", backgroundColor: 'white', paddingTop: '3rem' }}>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <Email sx={{ fontSize: '3em'}} />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography sx={{ marginLeft: "3%", fontSize: { xs: '1.4rem', md: '1.8rem' } }}>
                      mscsustainabilityclub@gmail.com
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Place style={{ paddingTop: "2%", fontSize: "3.5em" }} />
                  </Grid>
                  <Grid item xs={10}>
                  <Typography sx={{ width: "110%", marginLeft: {xs: "3%", md: "3%"}, fontSize: { xs: '1.3rem', md: '1.7rem' } }}>
                    Ivey MSc Sustainability Club<br />
                    1255 Western Rd, London, ON, <br />
                    N6G 0N1, Canada
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    );
};

export default Contact;