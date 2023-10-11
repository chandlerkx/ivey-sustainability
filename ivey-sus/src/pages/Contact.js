import React from "react";
import Stripe from "../components/Stripe";
import InputField from "../InputField";

const Contact = () => {
    return (
        <div>
            <div style={{height: '10px', backgroundColor: 'white'}}/>
            <Stripe title="Contact" description="Questions, comments, or concerns? Connect wth us!"></Stripe>
            <div style={{display: 'flex'}}>
                <div style={{backgroundColor: 'white', height: '100px', flex: 1}}/>
                <div style={{backgroundColor: 'green',height: '1000px', flex: 6}}> {/*text & fields*/}
                    <h1>Get in Touch</h1>
                    <div style={{backgroundcolor: 'purple', display: 'inline-flex', justifyContent: 'space-between'}}>
                        <InputField title="First name" subtitle="type here"></InputField>
                        <div style={{width: '100px'}}></div>
                        <InputField title="Last name" subtitle="type here"></InputField>
                    </div>
                    <InputField title="Email" subtitle="address@company.com"></InputField>
                    <InputField title="Phone Number" subtitle="+1 (555) 000-0000"></InputField>
                    <InputField title="Message" subtitle="Leave us a message..."></InputField>
                </div>
                <div style={{backgroundColor: 'blue',height: '100px', flex: 2}}>

                </div>

            </div>
        </div>
    );
};

export default Contact;