import React from 'react';
import { FiDollarSign, FiCheckCircle, FiBarChart2, FiMail } from 'react-icons/fi';

const BenefitsSection = () => {
    const benefits = [
        {
            icon: <FiDollarSign className="w-8 h-8" />,
            title: "Growth Opportunities",
            description: "We provide business loan leads to assist you in reaching businesses that are actively seeking funding. Each lead represents an opportunity to close agreements and expand your portfolio without the typical delays or cold starts."
        },
        {
            icon: <FiCheckCircle className="w-8 h-8" />,
            title: "100% Verified",
            description: "Our in-house team is available 24/7 to contact retailers, verify interest, and confirm eligibility. The end result is a list of MCA leads for sale that are unique, current, and ready for engagement."
        },
        {
            icon: <FiBarChart2 className="w-8 h-8" />,
            title: "UCC Lists",
            description: "We supply MCA UCC leads based on actual business filings. These leads provide lenders with information about previous funding activity and assist in establishing secure lending prospects supported by UCC filings on borrower assets."
        },
        {
            icon: <FiMail className="w-8 h-8" />,
            title: "Proven & Tested Mail",
            description: "We employ proven messaging to engage qualified businesses and generate working capital leads via email contact that converts. These are actual inquiries, not scraped lists."
        }
    ];

    return (
        <section className="relative py-20 lg:py-28 bg-slate-900 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2000&q=80" 
                    alt="City Skyline" 
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>
            </div>

            <div className="container-custom relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                    <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-white mb-6 leading-tight">
                        Benefits Of Purchasing <span className="text-primary">Business Loan Leads</span> From <span className="text-primary">MCA Leads Provider</span>
                    </h2>
                    <p className="text-fluid-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
                        Our lead generation process is designed to help lenders achieve better results, reduce wasteful outreach, and attract more qualified borrowers. Here's how our service helps you go forward more quickly:
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to action button */}
                <div className="text-center">
                    <a 
                        href="#contact" 
                        className="inline-flex items-center justify-center px-10 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-fluid-sm transition-all duration-300 shadow-[0_0_20px_rgba(96,31,234,0.4)] hover:-translate-y-1"
                    >
                        CONTACT US TODAY
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
