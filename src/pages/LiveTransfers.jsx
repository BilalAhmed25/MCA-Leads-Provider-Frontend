import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PartnerSection from '../components/PartnerSection';
import LiveTransfersFeatures from '../components/LiveTransfersFeatures';
import LiveTransfersWhyChoose from '../components/LiveTransfersWhyChoose';
import LiveTransfersBenefits from '../components/LiveTransfersBenefits';
import LiveTransfersProcess from '../components/LiveTransfersProcess';
import LiveTransfersStandards from '../components/LiveTransfersStandards';
import LiveTransfersGeneration from '../components/LiveTransfersGeneration';
import LiveTransfersIncluded from '../components/LiveTransfersIncluded';
import FAQs from '../components/FAQs';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

const liveTransferFaqs = [
    {
        question: "What are MCA Live Transfer Leads?",
        answer: "MCA live transfer leads are real-time phone calls from business owners who are actively looking for a merchant cash advance. These leads are vetted and sent directly to your sales team."
    },
    {
        question: "How are these leads qualified before being transferred?",
        answer: "Each lead has been checked according to parameters such as business kind, monthly revenue, and financial requirements. Only those who express a genuine interest in finance are transferred live."
    },
    {
        question: "Are the leads unique to my company?",
        answer: "Yes, we have exclusive live transfer MCA leads. A lead is not shared with other lenders or businesses once it has been sent to you."
    },
    {
        question: "How soon can I expect to receive leads?",
        answer: "Within 24 to 48 hours of campaign setup and parameter confirmation, you can start getting merchant cash advance live transfers."
    }
];

const LiveTransfers = () => {
    return (
        <main>
            <PageHero
                title="MCA Live Transfer Leads"
                description="MCA live transfer leads connect you directly with business owners who are actively looking for merchant cash advance solutions. These leads are validated, pre-qualified, and available for funding negotiations in real time. These live purchases are checked for interest and eligibility before they reach you."
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />

            <PartnerSection
                preHeading="Our Service Approach"
                heading="Trusted MCA Live Transfers For Your Funding Business"
                paragraphs={[
                    "Our MCA live transfer leads give you an advantage by directly connecting you with business owners who are actively looking for financial assistance through a merchant cash advance. These aren’t just queries; they’re screened and verified contacts ready to get finance. With merchant cash advance live transfers, you can take advantage of real-time chances rather than chasing uninterested clients.",
                    <>
                        Using qualified live transfer <Link to="/" className="text-primary hover:underline font-semibold">MCA leads</Link> makes your sales process faster and more focused. Each call allows you to speak with the merchants who are already in need of financing, which improves your close rates and reduces wasted time. When you work with us, you get more than just data; you get access to the types of business live transfer leads that will help you grow. It’s a smarter and more efficient approach to grow your MCA business.
                    </>
                ]}
                buttonText="Order Live Transfers"
                buttonLink="/contact"
            />

            <LiveTransfersFeatures />

            <LiveTransfersWhyChoose />

            <LiveTransfersBenefits />

            <LiveTransfersProcess />

            <LiveTransfersStandards />

            <LiveTransfersGeneration />

            <LiveTransfersIncluded />

            <FAQs items={liveTransferFaqs} />
            <Contact />
            <div className='pb-20 mt-[-100px]'>
                <Testimonials />
            </div>
        </main>
    );
};

export default LiveTransfers;
