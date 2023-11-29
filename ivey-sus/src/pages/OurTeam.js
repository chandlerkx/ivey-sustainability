import { Button } from '@mui/material';
import Stripe from '../components/Stripe'
import TeamCard from '../components/TeamCard'
import Kyle from '../images/Kyle.png';

const OurTeam = () => {
    return (
        <div>
            
            <Stripe title="Our Team" description="Meet the 2023/2024 Ivey MSc Sustainability Club Executive Team!"></Stripe>

            {/* Container 1 */}
            <div> 

                {/* Div for Four TeamCard Elements */}
                <div style={{display:"flex"}}>
                    <TeamCard 
                        imgFile={Kyle}
                        name="Kyle Edmonds" 
                        role="Co-President" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />
                    <TeamCard 
                        imgFile={Kyle}
                        name="Kyle Edmonds" 
                        role="Co-President" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />
                    <TeamCard 
                        imgFile={Kyle}
                        name="Kyle Edmonds" 
                        role="Co-President" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />
                    <TeamCard 
                        imgFile={Kyle}
                        name="Kyle Edmonds" 
                        role="Co-President" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />
                </div>

                {/* Div for Two TeamCard Elements */}
                <div style={{display:'flex'}}>
                    <TeamCard 
                        imgFile={Kyle}
                        name="Kyle Edmonds" 
                        role="Co-President" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />
                    <TeamCard 
                        imgFile={Kyle}
                        name="Kyle Edmonds" 
                        role="Co-President" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />
                    <TeamCard 
                        imgFile={Kyle}
                        name="Kyle Edmonds" 
                        role="Co-President" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />
                    <TeamCard 
                        imgFile={Kyle}
                        name="Kyle Edmonds" 
                        role="Co-President" 
                        emailLink="https://mail.google.com/mail/u/0/" 
                        linkedinLink="https://www.linkedin.com/"
                    />
                </div>

            </div> {/* End of Container 1 */}

            {/* Container 2 */}
            <div>
                <div style={{backgroundColor:'white', display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', padding:'4rem', paddingTop:'3rem'}}>
                    <p style={{fontWeight:'bold', fontFamily:'Arial', fontSize:'1.9rem', lineHeight:'0', paddingBottom:'1rem'}}>Interested in joining the executive team?</p>
                    <a href="https://docs.google.com/forms/u/0/" target='_blank'>
                        <Button style={{textTransform:'none', fontFamily:'Arial', backgroundColor:'#2F4858', color:'white', borderRadius:'0.5rem', paddingLeft:'4.5rem', paddingRight:'4.5rem', fontSize:'1.3rem', paddingTop:'0.5rem', paddingBottom:'0.5rem'}}>Apply Today</Button>
                    </a>
                </div>
            </div> {/* End of Container 2 */}

        </div> // End of Outermost Div
    );
};

export default OurTeam;
