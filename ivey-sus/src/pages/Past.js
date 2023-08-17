import React from 'react';
import Stripe from '../Stripe';
import EventCard from '../EventCard';


const Events = () => {

    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    return (
        <div>
            <div style={{height: '10px', backgroundColor: 'white'}}>
            {/* LINE BREAK  */}
            </div>
            <Stripe title="Events" description="A showcase of upcoming events."></Stripe>
            <div>
                {/* 400 character limit? Just so we don't have scaling issues */}
                <EventCard imgFile="testimage3.jpg" title="Title" date="June 2, 2022" description={text}></EventCard>
                <EventCard imgFile="testimage3.jpg" title="Title" date="June 2, 2021" description={text}></EventCard>
                <EventCard imgFile="testimage3.jpg" title="Title" date="June 2, 2020" description="hellloooooooo description description description description description description description "></EventCard>
            </div>
        </div>
    )
};

export default Events;