import React from 'react';
import Stripe from '../Stripe';
import '../styles/Media.css';

const Media = () => {
    return(
        <div>
            <Stripe title="Media" description="Learn more about corporate sustainability"></Stripe>

            {/* first page */}
            <div style={{display:"flex"}}>

                <div style={{display:"flex", flexDirection:"column", marginTop:"7%", marginLeft:"5%"}}>
                    <h1 style={{maxWidth:"40rem"}}>In today's world, it's more important than ever for companies to prioritize sustainable practices.</h1>
                    <p style={{flexDirection:"column", marginTop:"3%", marginBottom:"3%", maxWidth:"35rem"}}>Join us as we explore the latest trends, ideas, and solutions for improving corporate sustainability.</p>
                    <button style={{maxWidth:"10rem", backgroundColor:"#2F4858", color:"white"}}>Read Our Blog</button>
                </div>
                <div style={{backgroundColor:"lightgray", width:"584px" , height:"666px", marginTop:"3.5%", marginLeft:"5%", marginBottom:"3.5%"}}></div>
                
            </div>

            {/* second page */}
            <div style={{display:"flex", backgroundColor:"#2F4858"}}>
                <div style={{display:"flex", flexDirection:"column", marginTop:"7%", marginLeft:"5%"}}>
                    <p style={{fontSize:"2rem",fontWeight:"3rem", maxWidth:"40rem", color:"white"}}>In today's world, it's more important than ever for companies to prioritize sustainable practices.</p>
                    <p style={{flexDirection:"column", marginTop:"3%", marginBottom:"3%", maxWidth:"35rem", color:"white"}}>Join us as we explore the latest trends, ideas, and solutions for improving corporate sustainability.</p>
                    <button style={{maxWidth:"10rem"}}>Listen To Our Podcast</button>
                </div>
                <div style={{backgroundColor:"lightgray", width:"584px" , height:"666px", marginTop:"3.5%", marginLeft:"5%", marginBottom:"3.5%"}}></div>
            </div>

            {/* third page */}
            <div>
                <h1 style={{maxWidth:"45rem", marginLeft:"2%"}}>Join the conversation about how we can create a more sustainable future for all.</h1>
                
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>

                    <div style={{display:"flex"}}>
                        <div style={{}}>
                            <h2 style={{textAlign:"center"}}>Instagram</h2>
                            <div style={{backgroundColor:"lightgray", width:"25rem", height:"40rem"}}></div>
                            <button style={{display:"block", margin:"0 auto", marginTop:"8%"}}>Follow Us</button>
                        </div>
                    </div>

                    <div style={{padding:"9rem"}}></div>

                    <div style={{display:"flex"}}>
                        <div style={{}}>
                            <h2 style={{textAlign:"center"}}>LinkedIn</h2>
                            <div style={{backgroundColor:"lightgray", width:"25rem", height:"40rem"}}></div>
                            <button style={{display:"block", margin:"0 auto", marginTop:"8%", marginBottom:"10%"}}>Follow Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Media;