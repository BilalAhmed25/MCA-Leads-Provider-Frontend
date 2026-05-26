import React from 'react';
import PageHero from '../components/PageHero';
import DriveResultsSection from '../components/DriveResultsSection';
import Contact from '../components/Contact';

const LiveTransfers = () => {
    return (
        <main>
            <PageHero 
                title="MCA Live Transfer Leads"
                description="Connect instantly with pre-qualified business owners who need funding. Speak with eager merchants at the moment of peak interest, significantly increasing your conversion rate."
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />
            
            <DriveResultsSection 
                title="Connect Instantly with High-Intent Borrowers"
                paragraphs={[
                    "Our MCA Live Transfers connect you directly with small business owners at the exact moment they express interest in working capital. We handle the heavy lifting of prospecting, initial screening, and pre-qualifying the lead so your sales team can focus entirely on closing the deal.",
                    "Each live transfer is pre-vetted to match your specific underwriting criteria—such as minimum monthly bank deposits, time in business, and clean credit. When the merchant is ready, we bridge the call to your desk in real time.",
                    "With zero time wasted on voicemails or cold outreach, our 100% exclusive live transfer leads deliver the highest return on investment and build a steady, reliable pipeline for your funding business."
                ]}
                buttonText="Order Live Transfers"
                buttonLink="/contact"
            />
            
            <Contact />
        </main>
    );
};

export default LiveTransfers;
