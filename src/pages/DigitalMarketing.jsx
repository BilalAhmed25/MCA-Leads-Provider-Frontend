import React from 'react';
import PageHero from '../components/PageHero';
import DriveResultsSection from '../components/DriveResultsSection';
import Contact from '../components/Contact';

const DigitalMarketing = () => {
    return (
        <main>
            <PageHero 
                title="MCA Digital Marketing Leads"
                description="Harness the power of inbound marketing. We generate high-intent, real-time leads through SEO, targeted search ads, and converting landing pages."
                image="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />
            
            <DriveResultsSection 
                title="Drive High-Intent Inbound Applications"
                paragraphs={[
                    "Inbound digital marketing leads consistently outperform cold outreach list conversions. These leads represent business owners who are actively searching Google, social media, and industry networks for working capital solutions.",
                    "Our landing pages are designed to pre-screen prospects by collecting essential metrics—such as average monthly sales, credit score range, and requested funding amount—before they submit an application.",
                    "Let us handle the complex setup, search optimization, and ad spend management. Get exclusive, high-intent digital marketing applications sent straight to your sales inbox in real time."
                ]}
                buttonText="Order Inbound Leads"
                buttonLink="/contact"
            />
            
            <Contact />
        </main>
    );
};

export default DigitalMarketing;
