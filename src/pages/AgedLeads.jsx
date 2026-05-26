import React from 'react';
import PageHero from '../components/PageHero';
import DriveResultsSection from '../components/DriveResultsSection';
import Contact from '../components/Contact';

const AgedLeads = () => {
    return (
        <main>
            <PageHero 
                title="Aged MCA Leads"
                description="Get cost-effective aged leads for MCA. Reach a wider pool of merchants who were previously seeking funding and are ready for refinancing or new capital."
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />
            
            <DriveResultsSection 
                title="Unlock Value with High-Volume Aged Leads"
                paragraphs={[
                    "For funding brokerages operating automatic dialers or running bulk marketing campaigns, Aged MCA Leads offer an unmatched combination of volume and cost-effectiveness. These leads represent businesses that actively sought financing within the last 30 to 90 days.",
                    "Many merchants do not close with their first lender, or require additional working capital a few months later. Our aged data is scrubbed against DNC lists and refreshed to ensure you are reaching active, legitimate businesses.",
                    "Filter your list by specific states, loan amounts, industry types, and age range to build targeted outreach lists that keep your sales pipeline flowing consistently at an affordable cost."
                ]}
                buttonText="Order Aged Leads"
                buttonLink="/contact"
            />
            
            <Contact />
        </main>
    );
};

export default AgedLeads;
