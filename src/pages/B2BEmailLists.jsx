import React from 'react';
import PageHero from '../components/PageHero';
import DriveResultsSection from '../components/DriveResultsSection';
import Contact from '../components/Contact';

const B2BEmailLists = () => {
    return (
        <main>
            <PageHero 
                title="B2B Email Lists"
                description="Gain access to validated, high-quality business email lists. Ideal for targeted email outreach to business owners seeking capital options."
                image="https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />
            
            <DriveResultsSection 
                title="Reach Decision Makers Directly in Their Inbox"
                paragraphs={[
                    "Our B2B Email Lists are carefully curated and continuously updated to provide active, direct contact details of business owners and key financial decision-makers who fit your ideal funding profile.",
                    "To protect your domain authority and maximize campaign deliverability, we run our database through rigorous multi-step validation checks. We filter out inactive domains, spam traps, and generic admin addresses, guaranteeing high inbox delivery rates.",
                    "Whether you are launching automated outbound cold email sequences or building customized lookup audiences on paid advertising networks, our segmentable lists give you the clean data you need."
                ]}
                buttonText="Order B2B Email Lists"
                buttonLink="/contact"
            />
            
            <Contact />
        </main>
    );
};

export default B2BEmailLists;
