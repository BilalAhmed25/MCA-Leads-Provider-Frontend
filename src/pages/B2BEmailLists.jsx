import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PartnerSection from '../components/PartnerSection';
import B2BFeatures from '../components/B2BFeatures';
import B2BWhyChoose from '../components/B2BWhyChoose';
import B2BBenefits from '../components/B2BBenefits';
import B2BProcess from '../components/B2BProcess';
import B2BStandards from '../components/B2BStandards';
import B2BGeneration from '../components/B2BGeneration';
import B2BIncluded from '../components/B2BIncluded';
import FAQs from '../components/FAQs';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

const b2bEmailFaqs = [
    {
        question: "How do you maintain email deliverability and accuracy?",
        answer: "We implement complete email validation processes so that our email lands in the inbox of the accurate contact. Our team performs advanced data verification and database cleansing for the best email marketing performance."
    },
    {
        question: "Why should I purchase B2B email marketing leads from your service?",
        answer: "Our email leads provide improved market penetration as they give direct access to decision-makers. You can get cost-effective marketing results with our verified email databases."
    },
    {
        question: "What makes your company a favorable partner for B2B email lists USA?",
        answer: "MCA Leads Provider has 8+ years of experience in B2B data acquisition and the MCA industry. Moreover, we use advanced data intelligence and research to bring the best data for our clients. Our team is here for email validation and data cleansing that results in relevant and reliable leads."
    },
    {
        question: "How can your email marketing B2B lead generation help me increase my revenue?",
        answer: "Our B2B email list directly contributes to increased revenue as it connects you with pre-qualified decision-makers and optimizes your marketing spend with accurate contacts."
    }
];

const B2BEmailLists = () => {
    return (
        <main>
            <PageHero
                title="MCA B2B Email Lists"
                description="Quality MCA B2B email lead generation solutions – Access targeted merchant email databases with verified decision-makers who need capital, and expand your reach with our premium email marketing B2B lead generation."
                image="https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />

            <PartnerSection
                preHeading="Our Service Approach"
                heading="Email Marketing B2B Lead Generation"
                paragraphs={[
                    "Our complete strategy that generates MCA B2B email leads prioritizes precision targeting and data accuracy. Our team verifies that every email contact we provide represents a genuine business opportunity. We have advanced database and email verification technologies to identify businesses across multiple industries that require capital.",
                    <>
                        Our approach helps us to make an advantageous database of pre-validated B2B email lists USA for <Link to="/" className="text-primary hover:underline font-semibold">MCA leads</Link> providers. We update our databases and track industry developments on a regular basis to present the most current and actionable business contacts. MCA Leads Provider uses data management systems with strategic email marketing insights so that all B2B email marketing leads represent authentic opportunities for your business.
                    </>
                ]}
                buttonText="Order B2B Email Lists"
                buttonLink="/contact"
            />

            <B2BFeatures />

            <B2BWhyChoose />

            <B2BBenefits />

            <B2BProcess />

            <B2BStandards />

            <B2BGeneration />

            <B2BIncluded />

            <FAQs items={b2bEmailFaqs} />

            <Contact />

            <div className='pb-20 mt-[-100px]'>
                <Testimonials />
            </div>
        </main>
    );
};

export default B2BEmailLists;
