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
                <div style={{marginTop: "2%", backgroundColor: 'white',height: '600px', flex: 6}}> {/*text & fields*/}
                    <p style={{fontSize: "2.3rem", fontWeight: "bolder", color: "#104702"}}>Get in Touch</p>
                    <div style={{marginTop: "3.5%", marginBottom: "1%", backgroundcolor: 'white', display: 'inline-flex', justifyContent: 'space-between'}}>
                    <TextField id="standard-helperText" label="First name" defaultValue="First name" variant="outlined"/>
                        <div style={{width: '100px'}}></div>
                        <TextField id="standard-helperText" label="Last name" defaultValue="Last name" variant="outlined"/>
                    </div>
                    <div style={{marginTop: "1.5%", marginBottom: "0.5%", width: "51.1%"}}>
                        <TextField id="standard-helperText" fullWidth label="Email" defaultValue="address@company.com" variant="outlined"/>
                    </div>
                    <div style={{marginTop: "1.5%", marginBottom: "0.5%", width: "51.1%"}}>
                        <TextField id="standard-helperText" fullWidth label="Phone Number" defaultValue="+1 (555) 000-0000" variant="outlined"/>
                    </div>
                    <div style={{marginTop: "1.5%", marginBottom: "0.5%", width: "51.1%"}}>
                        <TextField id="standard-helperText" fullWidth label="Message" defaultValue="Leave us a message..." variant="outlined"/>
                    </div>
                    <div style={{backgroundColor: 'white', height: "100px"}}></div>
                    <Button size="large" style={{width: "350px", height: "60px", color: '#EEEEEE', backgroundColor: '#51694B', fontWeight: "bold"}}>Send Message</Button>
                </div>
                <div style={{backgroundColor: 'white',height: '100px', flex: 2}}>
                </div>

                
            </div>
                <div style={{marginLeft: "100px", height: "400px", width: "800px", backgroundColor: 'white'}}> 
                    <div style={{marginLeft: "0.6%", display: 'inline-flex'}}>
                        <Link component="a" href="mailto:example@example.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: "1.41%" }}>
                            <Email style={{ fontSize: "3em" }} />
                        </Link>
                        <Typography style={{marginLeft: "3%", fontSize: "2em"}}>mscsustainabilityclub@gmail.com</Typography>
                        
                    </div>
                    <div style={{ display: 'inline-flex', marginTop: "2.5%"}}>
                        <Place style={{paddingTop: "2%", fontSize: "3.5em"}}></Place>
                        <p style={{marginLeft: "3%", fontSize: "2em"}}>Ivey MSc Sustainability Club<br/>1255 Western Rd, London, ON, N6G 0N1, Canada</p>

                    </div>
                </div>
        </div>
    );
};

export default Contact;