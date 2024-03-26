import React from "react";
import Stripe from "../components/Stripe";
import InputField from "../InputField";
import { IconButton, TextField, Link, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Email , Place} from "@mui/icons-material"


const Contact = () => {
    return (
        <div>
            <div style={{height: '0px', backgroundColor: 'white'}}/>
            <Stripe title="Contact" description="Questions, comments, or concerns? Connect wth us!"></Stripe>
            <div style={{marginTop: "3%", display: 'flex'}}>
                <div style={{backgroundColor: 'white', height: '100px', flex: 1}}/>
                <div style={{marginTop: "2%", backgroundColor: 'white',height: '37.5rem', flex: 6}}> {/*text & fields*/}
                    <p style={{fontSize: "2.3rem", fontWeight: "bolder", color: "#104702",marginBottom:'2%'}}>Get in Touch</p>
                    <div style={{marginTop: "3.5%", marginBottom: "1%", backgroundcolor: 'white', display: 'inline-flex', justifyContent: 'space-between'}}>

                        <div style={{ position: "relative" }}>
                            <label style={{ position: "absolute", top: -30, left: 0 , fontWeight:'bold', fontSize:'1.15rem'}}>First Name</label>
                            <TextField id="standard-helperText" placeholder="First name" variant="outlined" />
                        </div>

                        <div style={{width: '6.25rem'}}></div>

                        <div style={{ position: "relative" }}>
                            <label style={{ position: "absolute", top: -30, left: 0 , fontWeight:'bold', fontSize:'1.15rem'}}>Last Name</label>
                            <TextField id="standard-helperText" placeholder="Last name" variant="outlined" />
                        </div>

                    </div>

                    <div style={{ position: "relative", marginTop: "4%", width: "51.1%"}}>
                        <label style={{ position: "absolute", top: -30, left: 0 , fontWeight:'bold', fontSize:'1.15rem'}}>Email</label>
                        <TextField id="standard-helperText" fullWidth placeholder="address@company.com" variant="outlined" />
                    </div>

                    <div style={{ position: "relative", marginTop: "5%",width: "51.1%"}}>
                        <label style={{ position: "absolute", top: -30, left: 0 , fontWeight:'bold', fontSize:'1.15rem'}}>Phone Number</label>
                        <TextField id="standard-helperText" fullWidth placeholder="+1 (555) 000-0000" variant="outlined" />
                    </div>

                    <div style={{ position: "relative", marginTop: "5%", marginBottom:"3%", width:"53.1%"}}>
                        <label style={{ position: "absolute", top: -30, left: 0 , fontWeight:'bold', fontSize:'1.15rem'}}>Message</label>
                        <TextField id="standard-helperText" fullWidth placeholder="Leave us a Message..." variant="outlined" multiline rows={5} rowsMax={5}/>
                    </div>

                    <Button size="large" sx={{marginTop:{xs:'1rem'},width: "350px", height: "60px", color: '#EEEEEE', backgroundColor: '#51694B', borderRadius:'0.6rem', textTransform:'none', fontSize:'1.2rem','&:hover': {backgroundColor: '#51694B'}}}>Send Message</Button>
                </div>

                <div style={{backgroundColor: 'white',height: '300px', flex: 2}}></div>

            </div>
            
                <div style={{marginLeft: "10vw", height: "40vw", maxWidth: "50rem", backgroundColor: 'white', paddingTop:'6rem'}}> 
                    <div style={{marginLeft: "0.6%", display: 'inline-flex'}}>
                        <Link component="a" href="mailto:example@example.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: "1.41%" }}>
                            <Email sx={{ fontSize:'3em' }} />
                        </Link>
                        <Typography sx={{marginLeft: "3%", fontSize:{xs:'1.4rem', md:'1.8rem'}}}>mscsustainabilityclub@gmail.com</Typography>
                        
                    </div>
                    <div style={{ display: 'inline-flex', marginTop: "2.5%"}}>
                        <Place style={{paddingTop: "2%", fontSize: "3.5em"}}></Place>
                        <Typography sx={{marginLeft: "3%", fontSize:{xs:'1.3rem', md:'1.7rem'}}}>Ivey MSc Sustainability Club<br/>1255 Western Rd, London, ON, N6G 0N1, Canada</Typography>
                    </div>
                </div>
        </div>
    );
};

export default Contact;