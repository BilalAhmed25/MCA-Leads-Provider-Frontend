import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PartnerSection from '../components/PartnerSection';
import BusinessLoanFeatures from '../components/BusinessLoanFeatures';
import BusinessLoanWhyChoose from '../components/BusinessLoanWhyChoose';
import BusinessLoanOverview from '../components/BusinessLoanOverview';
import BusinessLoanBenefits from '../components/BusinessLoanBenefits';
import BusinessLoanProcess from '../components/BusinessLoanProcess';
import BusinessLoanGeneration from '../components/BusinessLoanGeneration';
import BusinessLoanIncluded from '../components/BusinessLoanIncluded';
import FAQs from '../components/FAQs';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import { businessLoansTestimonials } from '../data/testimonialsData';
import LiveTransfersCTA from '../components/LiveTransfersCTA';

const businessLoanFaqs = [
    {
        question: "What form of business loan leads do you offer?",
        answer: "We offer business loan leads in a variety of formats, including real-time form submissions, live transfer calls, and aged business loan leads. Lead type and volume can be chosen according to your sales process and staffing style."
    },
    {
        question: "Are these business loan leads exclusive?",
        answer: "Exclusive business financing leads are provided and supplied to one buyer. Shared lead options may also be available based on volume and cost preferences."
    },
    {
        question: "How are business loan leads qualified before delivery?",
        answer: "Before delivery, leads are judged using basic criteria such as time in business, monthly revenue range, funding amount requested, and stated finance needs."
    },
    {
        question: "How quickly do leads arrive following submission?",
        answer: "Real-time leads and live transfers are supplied immediately upon verification. Aged business loan leads are given on a regular basis according to the timeframe chosen."
    }
];

const BusinessLoans = () => {
    return (
        <main>
            <PageHero
                title="Bussiness Loan Leads"
                description="Our business loan leads connect lenders and brokers with business owners actively seeking financing, including merchant cash advances and other funding options. These leads come from firms looking for working capital, term loans, equipment financing, or growth funds. Each lead is generated with a pre-qualified lead generation process, such as time in company, monthly revenue, and financing purpose, before being given as real-time leads, live transfers, or aged data, depending on your purchasing methodology."
                image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />

            <LiveTransfersCTA
                heading="Contact Us Today for Live Transfer and Aged Business Loan Leads!"
                buttonText="Get Leads Now"
                showIcon={true}
                className="mt-4 sm:mt-12 lg:mt-0 mb-6 sm:mb-8 relative z-20"
            />

            <PartnerSection
                preHeading="Services Include"
                heading="Pre-Qualified Business Loan Leads For Funding Businesses"
                paragraphs={[
                    "Exclusive business loan leads are delivered individually to a single broker at the time of submission. It ensures that the lead is not offered to every lender. Each lead is designed for a business owner who has submitted a finance request and completed basic screening formalities. This process eliminates competition, limits repeated outreach to the same prospect, and gives your team control of the conversation from the start.",
                    <>


                        Business loan leads live transfer connects your sales team directly with business owners when they need funding. Calls are routed in real time following first verification, allowing for instant discussion of loan requirements, eligibility, and next actions. <Link to="/mca-live-transfer-leads/" className="text-primary hover:underline font-semibold">Live transfers</Link> boost response time, contact rates, and the possibility of converting eligible prospects into active loan applications.
                    </>
                ]}
                buttonText="Order Business Loan Leads"
                buttonLink="/contact-us/"
            />

            <BusinessLoanFeatures />

            <BusinessLoanWhyChoose />

            <LiveTransfersCTA
                heading="Give Us a Call and Let’s Talk Leads Today!"
                buttonText="Get Leads Now"
            />


            <BusinessLoanBenefits />

            <BusinessLoanProcess />

            <BusinessLoanGeneration />

            <BusinessLoanIncluded />

            <Testimonials items={businessLoansTestimonials} title="What Our Clients Say About Us" />

            <FAQs items={businessLoanFaqs} />

            <Contact />
        </main>
    );
};

export default BusinessLoans;
