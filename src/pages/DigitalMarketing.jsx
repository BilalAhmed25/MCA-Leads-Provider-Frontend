import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PartnerSection from '../components/PartnerSection';
import DMFeatures from '../components/DMFeatures';
import DMWhyChoose from '../components/DMWhyChoose';
import DMBenefits from '../components/DMBenefits';
import DMProcess from '../components/DMProcess';
import DMStandards from '../components/DMStandards';
import DMGeneration from '../components/DMGeneration';
import DMIncluded from '../components/DMIncluded';
import FAQs from '../components/FAQs';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

const digitalMarketingFaqs = [
    {
        question: "What are MCA digital marketing leads?",
        answer: "MCA digital marketing leads are chances gathered from online means such as SEO, paid advertising, and social media. These are the merchants that are actively looking for merchant cash advance options."
    },
    {
        question: "What makes your leads better than other providers?",
        answer: "We produce all of our leads in-house through focused digital campaigns, ensuring accuracy, intent, and exclusivity. There is no recycling or third-party data involved."
    },
    {
        question: "How quickly are leads supplied after generation?",
        answer: "Leads are supplied in real time once they have passed our verification procedure, allowing you to contact interested prospects immediately while their interest is at its peak."
    },
    {
        question: "Can I choose the types of MCA leads I receive?",
        answer: "Yes, we provide alternatives based on business size, industry, and funding history, allowing you to choose the digital marketing MCA leads you receive to best match your lending criteria."
    }
];

const DigitalMarketing = () => {
    return (
        <main>
            <PageHero
                title="Effective Digital Marketing For Generating Quality MCA Leads"
                description="Get MCA digital marketing leads that are generated through targeted online techniques that attract businesses seeking working capital for their business. We discover genuine merchant cash advance chances using methods such as SEO, social networks, and PPC. This strategy ensures a consistent flow of qualified and intent-driven MCA leads."
                image="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />

            <PartnerSection
                preHeading="Our Service Approach"
                heading="Trusted MCA Digital Marketing Leads To Grow Your Funding Business"
                paragraphs={[
                    "MCA Leads Provider ensures that each lead meets quality criteria and demonstrates a genuine interest in MCA services. We use data-driven digital marketing to target high-potential clients. It helps funding companies to connect with qualified applicants and close deals more quickly.",
                    <>
                        Our complete approach to generating <Link to="/" className="text-primary hover:underline font-semibold">MCA leads</Link> combines paid advertising, SEO, and email marketing to build a reliable pipeline of intent-driven prospects. We continuously monitor campaign performance and market trends to ensure every digital marketing lead we deliver represents a genuine opportunity for your funding business.
                    </>
                ]}
                buttonText="Order Digital Marketing Leads"
                buttonLink="/contact"
            />

            <DMFeatures />

            <DMWhyChoose />

            <DMBenefits />

            <DMProcess />

            <DMStandards />

            <DMGeneration />

            <DMIncluded />

            <FAQs items={digitalMarketingFaqs} />

            <Contact />

            <div className='pb-20 mt-[-100px]'>
                <Testimonials />
            </div>
        </main>
    );
};

export default DigitalMarketing;
