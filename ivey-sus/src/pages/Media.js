import React from 'react';
import Stripe from '../components/Stripe';
import Button from "@mui/material/Button";

const Media = () => {
    return(
        <div>
            <Stripe title="Media" description="Learn more about corporate sustainability"></Stripe>

            {/* first page */}
            <div style={{backgroundColor: 'white',display:"flex"}}>

                <div style={{flex:2, flexDirection:"column", marginTop:"7%", marginLeft:"5%", backgroundColor:"white"}}>
                    <h1 style={{fontSize:"3.5rem", backgroundColor:"white", color:"#2C4111", fontWeight:"bold"}}>In today's world, it's more important than ever for companies to prioritize sustainable practices.</h1>
                    <p style={{flexDirection:"column", marginTop:"3%", marginBottom:"3%", maxWidth:"50rem", fontSize:"1.75rem", fontWeight:"600"}}>Join us as we explore the latest trends, ideas, and solutions for improving corporate sustainability.</p>
                    <Button size="large" style={{textTransform:"none", color: 'white', backgroundColor: '#2F4858',fontSize:"1.2rem", fontFamily:"Nunito Sans", borderRadius:"0.4rem", paddingLeft:"2rem", paddingRight:"2rem"}}>Read Our Blog</Button>
                </div>
                <div style={{flex:1.8,backgroundColor:"white", height:"45rem", marginTop:"3.5%", marginLeft:"3%", marginBottom:"3.5%", }}>
                    <img style={{width:"87.7%", height:"100%", alignItems:"center", justifyContent:"center"}} src="testimage3.jpg"></img>
                </div>
            </div>

            {/* second page */}
            <div style={{backgroundColor: '#2F4858',display:"flex"}}>

                <div style={{flex:2, flexDirection:"column", marginTop:"7%", marginLeft:"5%"}}>
                    <h1 style={{fontSize:"3.5rem", color:"white", fontWeight:"bold"}}>Businesses play a key role in creating a more sustainable world.</h1>
                    <p style={{flexDirection:"column", marginTop:"3%", marginBottom:"3%", color:"white", maxWidth:"50rem", fontSize:"1.75rem", fontWeight:"600"}}>Tune in as we discuss a wide range of topics relating to corporate sustainability through interviews with experts and thought leaders in the space.</p>
                    <Button size="large" style={{textTransform:"none", color:'black', backgroundColor: 'white',fontSize:"1.2rem", fontFamily:"Nunito Sans", borderRadius:"0.4rem", paddingLeft:"2rem", paddingRight:"2rem"}}>Listen To Our Podcast</Button>
                </div>
                <div style={{flex:1.8,backgroundColor:"#2F4858", height:"45rem", marginTop:"3.5%", marginLeft:"3%", marginBottom:"3.5%", }}>
                    <img style={{width:"87.7%", height:"100%", alignItems:"center", justifyContent:"center"}} src="testimage3.jpg"></img>
                </div>
            </div>

            {/* third page */}
            <div>
                <h1 style={{maxWidth:"45rem", marginLeft:"2%", color:"#2F4858"}}>Join the conversation about how we can create a more sustainable future for all.</h1>
                
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>

                    <div style={{display:"flex"}}>
                        <div style={{}}>
                            <h2 style={{textAlign:"center", }}>Instagram</h2>
                            <div style={{backgroundColor:"lightgray", width:"25rem", height:"40rem"}}></div>
                            <Button size="large" style={{margin:"0 auto", display:"block", marginTop:"8%",textTransform:"none", color: 'white', backgroundColor: '#2F4858',fontSize:"1rem", fontFamily:"Nunito Sans", borderRadius:"0.4rem", paddingLeft:"2rem", paddingRight:"2rem", marginBottom:"10%"}}>Read Our Blog</Button>
                        </div>
                    </div>

                    <div style={{padding:"9rem"}}></div>

                    <div style={{display:"flex"}}>
                        <div style={{}}>
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