import React from "react";
import Stripe from "../Stripe";
import InputField from "../InputField";

const Contact = () => {
    return (
        <div>
            <div style={{height: '10px', backgroundColor: 'white'}}/>
            <Stripe title="Contact" description="Questions, comments, or concerns? Connect wth us!"></Stripe>
            <div style={{display: 'flex'}}>
                <div style={{backgroundColor: 'white', height: '100px', flex: 1}}/>
                <div style={{backgroundColor: 'green',height: '300px', flex: 6}}> {/*text & fields*/}
                    <h2>Get in Touch</h2>
                    <InputField title="hello" subtitle="monkey"></InputField>
                </div>
                <div style={{backgroundColor: 'blue',height: '100px', flex: 3}}>

                </div>

            </div>
        </div>
    );
};

export default Contact;