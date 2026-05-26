import React from 'react';
import PageHero from '../components/PageHero';
import DriveResultsSection from '../components/DriveResultsSection';
import Contact from '../components/Contact';

const CallBacks = () => {
    return (
        <main>
            <PageHero 
                title="MCA Callback Leads"
                description="Obtain a list of qualified business owners who have expressed interest and requested a follow-up. Skip cold calls and speak with warm leads expecting your call."
                image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />
            
            <DriveResultsSection 
                title="Warm Leads Ready for Efficient Engagement"
                paragraphs={[
                    "MCA Call Back Leads are the perfect solution for teams looking to maintain high talk-times and positive interactions. Rather than calling cold lists, your agents connect with business owners who have actively requested a call back to review funding options.",
                    "Each lead package comes with complete merchant detail records, including business name, monthly sales volume, funding requirements, and direct contact numbers, allowing your team to walk into conversations fully informed.",
                    "Maximize call efficiency, reduce agent burnout, and accelerate your sales cycle with fresh, qualified call back requests that are delivered directly to your CRM."
                ]}
                buttonText="Order Call Back Leads"
                buttonLink="/contact"
            />
            
            <Contact />
        </main>
    );
};

export default CallBacks;
