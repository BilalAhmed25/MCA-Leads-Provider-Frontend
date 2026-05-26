import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PartnerSection from '../components/PartnerSection';
import CallbacksFeatures from '../components/CallbacksFeatures';
import CallbacksWhyChoose from '../components/CallbacksWhyChoose';
import CallbacksBenefits from '../components/CallbacksBenefits';
import CallbacksProcess from '../components/CallbacksProcess';
import CallbacksStandards from '../components/CallbacksStandards';
import CallbacksGeneration from '../components/CallbacksGeneration';
import CallbacksIncluded from '../components/CallbacksIncluded';
import FAQs from '../components/FAQs';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

const callbackFaqs = [
    {
        question: "What are MCA Callback Leads?",
        answer: "MCA callback leads are pre-qualified leads from business owners who have expressed interest in a merchant cash advance and requested a callback to discuss funding options. These leads expect a call from your sales team."
    },
    {
        question: "How are callback leads qualified?",
        answer: "Each lead is qualified based on criteria such as monthly revenue (minimum $15,000), time in business (6+ months), active business bank account, and no recent bankruptcies. We verify their intent and contact details before delivery."
    },
    {
        question: "Are the callback leads exclusive?",
        answer: "Yes, we provide 100% exclusive MCA callback leads. Once a lead is assigned to your business, it is not shared with any other lenders or marketing firms."
    },
    {
        question: "How fast are callback leads delivered?",
        answer: "Callback leads are generated and delivered in real-time or near-real-time to ensure you contact the merchants while their interest is at its peak, typically within minutes of interest verification."
    }
];

const CallBacks = () => {
    return (
        <main>
            <PageHero 
                title="MCA Call Back Leads To Generate Quality Outcomes"
                description="Get MCA callback leads to connect with qualified merchants actively seeking funding solutions, and increase your conversion rates. We specialize in providing the best MCA callback leads, ensuring your connection with potential merchants to help you achieve your revenue goals."
                image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />
            
            <PartnerSection
                preHeading="Our Service Approach"
                heading="Best MCA Call Back Leads For Your Funding Business"
                paragraphs={[
                    "Our complete approach that generates merchant cash advance callback leads focuses on quality over quantity. We make sure that every lead we deliver has a genuine interest in funding solutions. Our team uses modern targeting methods and multi-channel verification processes to identify businesses that need capital. The approach helps us develop a pipeline of pre-qualified callback leads for MCA. We monitor market trends and business needs to offer the most relevant prospects.",
                    <>
                        MCA Leads Provider combines quantitative analytics with our own outreach strategies to make sure that all callback <Link to="/" className="text-primary hover:underline font-semibold">MCA leads</Link> give a real opportunity for your business to close deals and generate revenue. Our approach has helped numerous lenders increase their returns and make strong relationships with merchants who need working capital.
                    </>
                ]}
                buttonText="Order Call Back Leads"
                buttonLink="/contact"
            />

            <CallbacksFeatures />

            <CallbacksWhyChoose />

            <CallbacksBenefits />

            <CallbacksProcess />

            <CallbacksStandards />

            <CallbacksGeneration />

            <CallbacksIncluded />

            <FAQs items={callbackFaqs} />
            
            <Contact />
            
            <div className='pb-20 mt-[-100px]'>
                <Testimonials />
            </div>
        </main>
    );
};

export default CallBacks;
