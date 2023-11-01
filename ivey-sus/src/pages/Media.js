import React from 'react';
import Stripe from '../components/Stripe';
import Button from "@mui/material/Button";
import "../styles/Media.css";

const Media = () => {
    return(
        <div className="container">
            <Stripe title="Media" description="Learn more about corporate sustainability"></Stripe>

            {/* first page */}
            <div className="section">

                <div className="content">
                    <h1>In today's world, it's more important than ever for companies to prioritize sustainable practices.</h1>
                    <p>Join us as we explore the latest trends, ideas, and solutions for improving corporate sustainability.</p>
                    <Button size="large" style={{textTransform:"none", color: 'white', backgroundColor: '#2F4858',fontSize:"1.2rem", fontFamily:"Nunito Sans", borderRadius:"0.4rem", paddingLeft:"2rem", paddingRight:"2rem"}}>Read Our Blog</Button>
                </div>
                <div className="image-container">
                    <img src="testimage3.jpg"></img>
                </div>
            </div>

            {/* second page */}
            <div className="dark-section">
                <div className="dark-content">
                    <h1>Businesses play a key role in creating a more sustainable world.</h1>
                    <p>Tune in as we discuss a wide range of topics relating to corporate sustainability through interviews with experts and thought leaders in the space.</p>
                    <Button size="large" style={{textTransform:"none", color:'black', backgroundColor: 'white',fontSize:"1.2rem", fontFamily:"Nunito Sans", borderRadius:"0.4rem", paddingLeft:"2rem", paddingRight:"2rem"}}>Listen To Our Podcast</Button>
                </div>
                <div className="dark-image-container">
                    <img src="testimage3.jpg"></img>
                </div>
            </div>

            {/* third page */}
            <div className="third-container">
                <h1>Join the conversation about how we can create a more sustainable future for all.</h1>
                
                <div className="social-items-container">

                    <div className="social-display-container-one">
                        <div className="social-container-one">
                            <h2>Instagram</h2>
                            <div style={{backgroundColor:"lightgray", width:"25rem", height:"40rem"}}></div>
                            <Button size="large" style={{margin:"0 auto", display:"block", marginTop:"8%",textTransform:"none", color: 'white', backgroundColor: '#2F4858',fontSize:"1rem", fontFamily:"Nunito Sans", borderRadius:"0.4rem", paddingLeft:"2rem", paddingRight:"2rem", marginBottom:"10%"}}>Read Our Blog</Button>
                        </div>
                    </div>

                    <div style={{padding:"9rem"}}></div>

                    <div style={{display:"flex"}}>
                        <div>
                            <h2 style={{textAlign:"center"}}>LinkedIn</h2>
                            <div style={{backgroundColor:"lightgray", width:"25rem", height:"40rem"}}></div>
                            <Button size="large" style={{margin:"0 auto", display:"block", marginTop:"8%",textTransform:"none", color: 'white', backgroundColor: '#2F4858',fontSize:"1rem", fontFamily:"Nunito Sans", borderRadius:"0.4rem", paddingLeft:"2rem", paddingRight:"2rem", marginBottom:"10%"}}>Follow Us</Button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Media;