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
import { callbacksTestimonials } from '../data/testimonialsData';
import LiveTransfersCTA from '../components/LiveTransfersCTA';

const callbackFaqs = [
    {
        question: "What criteria do you use to qualify MCA Call Back Leads?",
        answer: "We qualify leads on the basis of criteria such as businesses operating for 6+ months, a minimum monthly revenue of $15,000, an active business bank account, no recent bankruptcies, and a clear intent for business funding."
    },
    {
        question: "How do you generate quality leads?",
        answer: "We use proper verification processes to make sure we provide quality leads to our clients. Our team performs targeted prospecting and filtering for the best lead generation."
    },
    {
        question: "Why should I purchase Call Back MCA Leads from your service?",
        answer: "Our leads have a high probability of conversion due to pre-screening. You can receive a favorable return on investment with our verified leads."
    },
    {
        question: "Can you explain your lead delivery process?",
        answer: "Our 3-step process involves Lead Identification and Qualification, Initial Contact and Interest Verification by experienced representatives, and Warm Transfer with Follow-Up Support to your team."
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

            <LiveTransfersCTA
                heading="Contact Us Today and Get Exclusive Leads!"
                buttonText="Get Leads Now"
                showIcon={true}
                className="mt-4 sm:mt-12 lg:mt-0 mb-6 sm:mb-8 relative z-20"
            />

            <PartnerSection
                preHeading="Our Service Approach"
                heading="Best MCA Call Back Leads For Your Funding Business"
                paragraphs={[
                    "Our complete approach that generates merchant cash advance callback leads focuses on quality over quantity. We make sure that every lead we deliver has a genuine interest in funding solutions. Our team uses modern targeting methods and multi-channel verification processes to identify businesses that need capital. The approach helps us develop a pipeline of pre-qualified callback leads for MCA. We monitor market trends and business needs to offer the most relevant prospects.",
                    <>


                        <Link to="/" className="text-primary hover:underline font-semibold">MCA Leads Provider</Link> combines quantitative analytics with our own outreach strategies to make sure that all MCA callback leads give a real opportunity for your business to close deals and generate revenue. Our approach has helped numerous lenders increase their returns and make strong relationships with merchants who need working capital.
                    </>
                ]}
                buttonText="Order Call Back Leads"
                buttonLink="/contact-us/"
            />

            <CallbacksFeatures />

            <CallbacksWhyChoose />
            <LiveTransfersCTA
                heading="Give Us a Call and Let’s Discuss Leads Today!"
                buttonText="Get Leads Now"
                showIcon={true}
            />

            <CallbacksBenefits />

            <CallbacksProcess />

            <CallbacksStandards />

            <CallbacksGeneration />

            <CallbacksIncluded />

            <Testimonials items={callbacksTestimonials} title="What Lenders Say About Our Call Back Leads" />

            <FAQs items={callbackFaqs} />

            <Contact />
        </main>
    );
};

export default CallBacks;
