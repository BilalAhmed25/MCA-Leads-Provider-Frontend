import React from 'react';
import PageHero from '../components/PageHero';
import DriveResultsSection from '../components/DriveResultsSection';
import Contact from '../components/Contact';

const BusinessLoans = () => {
    return (
        <main>
            <PageHero 
                title="Business Loan Leads"
                description="Get pre-qualified business loan leads to connect lenders and brokers with active merchants seeking term loans, lines of credit, and SBA financing."
                image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            />
            
            <DriveResultsSection 
                title="Detailed Financial Profiles for Loan Brokers"
                paragraphs={[
                    "Our Business Loan Leads are specifically filtered for brokers and financing firms that offer structured loan solutions, term loans, SBA funding, or corporate lines of credit to creditworthy small business owners.",
                    "We collect detailed financial variables from each prospect—such as credit rating ranges, years in business, annual gross revenue, and standard deposit patterns—saving you significant time during the initial pre-screening phase.",
                    "Build credibility, expand your financial product line, and close larger ticket loans with fresh, compliant, and verified business loan applications."
                ]}
                buttonText="Order Business Loan Leads"
                buttonLink="/contact"
            />
            
            <Contact />
        </main>
    );
};

export default BusinessLoans;
