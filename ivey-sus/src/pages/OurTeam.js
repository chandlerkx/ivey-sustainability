import { Button } from '@mui/material';
import Stripe from '../Stripe'
import TeamCard from '../TeamCard'

const OurTeam = () => {
    return(
        <div>
            <Stripe title="Our Team" description="Meet the 2023/2024 Ivey MSc Sustainability Club Executive Team!"></Stripe>
            <div style={{marginLeft:'6%',display:'flex', flexWrap:'wrap'}}>
                <TeamCard 
                imgFile="testimage3.jpg" 
                name="kyle guazman" 
                role="president" 
                emailLink="https://mail.google.com/mail/u/0/" 
                linkedinLink="https://www.linkedin.com/"
                />

                <TeamCard 
                imgFile="testimage3.jpg" 
                name="kyle guazman" 
                role="president" 
                emailLink="https://mail.google.com/mail/u/0/" 
                linkedinLink="https://www.linkedin.com/"
                />
                
                <TeamCard 
                imgFile="testimage3.jpg" 
                name="kyle guazman" 
                role="president" 
                emailLink="https://mail.google.com/mail/u/0/" 
                linkedinLink="https://www.linkedin.com/"
                />
                <TeamCard 
                imgFile="testimage3.jpg" 
                name="kyle guazman" 
                role="president" 
                emailLink="https://mail.google.com/mail/u/0/" 
                linkedinLink="https://www.linkedin.com/"
                />
                <TeamCard 
                imgFile="testimage3.jpg" 
                name="kyle guazman" 
                role="president" 
                emailLink="https://mail.google.com/mail/u/0/" 
                linkedinLink="https://www.linkedin.com/"
                />
                <TeamCard 
                imgFile="testimage3.jpg" 
                name="kyle guazman" 
                role="president" 
                emailLink="https://mail.google.com/mail/u/0/" 
                linkedinLink="https://www.linkedin.com/"
                />
                <TeamCard 
                imgFile="testimage3.jpg" 
                name="kyle guazman" 
                role="president" 
                emailLink="https://mail.google.com/mail/u/0/" 
                linkedinLink="https://www.linkedin.com/"
                />

                <TeamCard 
                imgFile="testimage3.jpg" 
                name="kyle guazman" 
                role="president" 
                emailLink="https://mail.google.com/mail/u/0/" 
                linkedinLink="https://www.linkedin.com/"
                />


            </div>
            <div style={{backgroundColor:'white', display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', padding:'4rem', paddingTop:'3rem'}}>
                <p style={{fontWeight:'bold', fontFamily:'Arial', fontSize:'1.9rem', lineHeight:'0', paddingBottom:'1rem'}}>Interested in joining the executive team?</p>
                <a href="https://docs.google.com/forms/u/0/" target='_blank'>
                    <Button style={{textTransform:'none',fontFamily:'Arial', backgroundColor:'#2F4858',color:'white',borderRadius:'0.5rem',paddingLeft:'4.5rem',paddingRight:'4.5rem',fontSize:'1.3rem',paddingTop:'0.5rem',paddingBottom:'0.5rem'}}>Apply Today</Button>
                </a>
            </div>
        </div>
    );
};

export default OurTeam;