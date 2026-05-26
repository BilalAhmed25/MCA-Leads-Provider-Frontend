import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PartnerSection from '../components/PartnerSection';
import AgedFeatures from '../components/AgedFeatures';
import AgedWhyChoose from '../components/AgedWhyChoose';
import AgedBenefits from '../components/AgedBenefits';
import AgedProcess from '../components/AgedProcess';
import AgedStandards from '../components/AgedStandards';
import AgedGeneration from '../components/AgedGeneration';
import AgedIncluded from '../components/AgedIncluded';
import FAQs from '../components/FAQs';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

const agedLeadsFaqs = [
    {
        question: "What are aged MCA leads?",
        answer: "Aged MCA leads are merchant cash advance leads that have been created in the past and are still eligible for funding."
    },
    {
        question: "Are aged MCA leads still effective?",
        answer: "Yes, when received from a reputable vendor, dated leads can convert well, especially with proper filtering and marketing techniques."
    },
    {
        question: "How do aged MCA leads differ from active leads?",
        answer: "Live leads are in real time and more expensive, whereas aged leads are older, less expensive, and more suited to volume outreach."
    },
    {
        question: "Can I target specific industries or states using aged leads?",
        answer: "Absolutely. You can use filters to find aged leads by industry, state, business type, or funding amount choices."
    }
];

const AgedLeads = () => {
    return (
        <main>
            <PageHero
                title="Aged MCA Leads: Reasonable Data with Genuine Funding"
                description="Aged MCA leads from MCA leads provider provides an economical means for funding companies to engage with potential clients who have previously expressed interest in merchant cash advances. These are still valuable for outreach and conversions."
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />

            <PartnerSection
                preHeading="Our Service Approach"
                heading="Trusted Aged Leads to Grow Your Business Faster"
                paragraphs={[
                    "Trusted, aged MCA leads provide a realistic alternative for firms trying to grow without overpaying for marketing. These business loan leads are made up of contacts who have previously expressed an interest in merchant cash advance, making them an excellent choice for targeted outreach. While not current, the data is still valuable for businesses with the correct follow-up approach.",
                    <>
                        Many funding providers rely on aging <Link to="/" className="text-primary hover:underline font-semibold">MCA leads</Link> to ensure a consistent flow of prospects, lower acquisition expenses, and long-term business growth. Using these leads efficiently can result in higher conversion rates for a cheaper investment.
                    </>
                ]}
                buttonText="Order Aged Leads"
                buttonLink="/contact"
            />

            <AgedFeatures />

            <AgedWhyChoose />

            <AgedBenefits />

            <AgedProcess />

            <AgedStandards />

            <AgedGeneration />

            <AgedIncluded />

            <FAQs items={agedLeadsFaqs} />
            <Contact />
            <div className='pb-20 mt-[-100px]'>
                <Testimonials />
            </div>
        </main>
    );
};

export default AgedLeads;
