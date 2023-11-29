import { Button } from '@mui/material';
import Stripe from '../components/Stripe'
import TeamCard from '../components/TeamCard'

const OurTeam = () => {
    return (
        <div>
            
            <Stripe title="Our Team" description="Meet the 2023/2024 Ivey MSc Sustainability Club Executive Team!"></Stripe>

            {/* container 1 */}
            <div> 

                {/* first row */}
                <div style={{display:"flex", justifyContent:'center', paddingTop:'6%',flexWrap:'wrap'}}>
                    <TeamCard 
                        imgFile='/images/Kyle.png'
                        name="Kyle Edmonds" 
                        role="Co-President" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />
                    <TeamCard 
                        imgFile='/images/Kallista.png'
                        name="Kallista Wilson" 
                        role="Co-President" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />
                    <TeamCard 
                        imgFile='/images/Shrinjal.png'
                        name="Shrinjal Singh" 
                        role="VP Marketing" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />
                    <TeamCard 
                        imgFile='/images/Megan.png'
                        name="Megan Wismer" 
                        role="VP Finance" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />
                </div>

                {/* second row */}
                <div style={{display:'flex', justifyContent:'center', paddingTop:'4%', flexWrap:'wrap'}}>
                    <TeamCard 
                        imgFile='/images/Apoorva.png'
                        name="Apoorva Jain" 
                        role="VP Events" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />
                    <TeamCard 
                        imgFile='/images/Cheryl.png'
                        name="Cheryl He" 
                        role="VP Partnerships" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />
                    <TeamCard 
                        imgFile='/images/Henry.png'
                        name="Henry Ha" 
                        role="VP Education" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />


                </div>

            </div> 

            {/* containerr 2*/}
            <div>
                <div style={{backgroundColor:'white', display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', padding:'4rem', paddingTop:'3rem'}}>
                    <p style={{fontWeight:'bold', fontFamily:'Arial', fontSize:'1.9rem', lineHeight:'0', paddingBottom:'1rem'}}>Embark on our mission towards sustainability.</p>
                    <a href="https://docs.google.com/forms/u/0/" target='_blank'>
                        <Button style={{textTransform:'none', fontFamily:'Arial', backgroundColor:'#51694B', color:'white', borderRadius:'0.5rem', paddingLeft:'4.5rem', paddingRight:'4.5rem', fontSize:'1.3rem', paddingTop:'0.6rem', paddingBottom:'0.6rem'}}>Subscribe to our newsletter</Button>
                    </a>
                </div>
            </div> 

        </div> 
    );
};

export default OurTeam;
