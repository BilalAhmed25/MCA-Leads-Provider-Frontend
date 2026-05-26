import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PartnerSection from '../components/PartnerSection';
import DifferentiationSection from '../components/DifferentiationSection';
import McaServicesProvideSection from '../components/McaServicesProvideSection';
import Contact from '../components/Contact';

const Services = () => {
    return (
        <main>
            <PageHero
                title="Our Services"
                description="Leverage our specialized suite of MCA lead generation services to dramatically boost your daily conversion rates. From high-intent Live Transfers and verified Aged Data to targeted B2B Email Lists, we provide all the tools necessary to keep your closing team busy and successful."
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            />
            <PartnerSection
                className="bg-slate-50 py-2 md:py-0"
                preHeading="Our Service Approach"
                heading="Pre Qualified MCA Leads For Your Funding Business"
                paragraphs={[
                    <React.Fragment key="p1">
                        At <Link to="/" className="text-primary hover:underline font-semibold">MCA Leads Provider</Link>, we understand the importance of connecting with the right businesses at the appropriate time. That’s why we provide dependable, qualified, and <Link to="/" className="text-primary hover:underline font-semibold">verified merchant cash advance leads</Link> that can help your business expand faster. With our established techniques and data-driven strategies, you’ll gain access to leads who are actually interested in funding solutions, ensuring that your time and funds are wisely spent.
                    </React.Fragment>,
                    <React.Fragment key="p2">
                        Our team is committed to using precision-targeted MCA leads to help financing businesses, brokers, and lenders increase their deal-closing rate. Every lead, from UCC lists to actual transfers, is vetted and screened to meet your unique finance requirements.
                    </React.Fragment>
                ]}
                buttonText="Order Your Leads"
                buttonLink="/contact"
            />
            <DifferentiationSection className="py-12 md:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
            <McaServicesProvideSection className="py-12 md:py-16 bg-slate-950" />
            <Contact className="!py-12 md:!py-16" />
        </main>
    );
};

export default Services;
