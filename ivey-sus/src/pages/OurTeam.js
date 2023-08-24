import Stripe from '../Stripe'
import TeamCard from '../TeamCard'

const OurTeam = () => {
    return(
        <div>
            <Stripe title="Our Team" description="Meet the 2023/2024 Ivey MSc Sustainability Club Executive Team!"></Stripe>
            <div>
                <TeamCard imgFile="testimage3.jpg"></TeamCard>
            </div>
        </div>
    );
};

export default OurTeam;