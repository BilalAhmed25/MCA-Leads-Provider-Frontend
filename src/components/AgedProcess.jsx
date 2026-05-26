import React from 'react';
import { FiSearch, FiUserCheck, FiPhoneCall, FiCheck, FiArrowDown } from 'react-icons/fi';

const AgedProcess = () => {
    const steps = [
        {
            number: "01",
            icon: <FiSearch />,
            title: "Data Acquisition",
            description: "Our team aggregates aged MCA data from trustworthy sources and divides it into groups according to lead age, interest, and business kind. This guarantees that each lead is pertinent and fits your funding requirements."
        },
        {
            number: "02",
            icon: <FiUserCheck />,
            title: "Cleaning and Verification",
            description: "Every single lead is put through a rigorous vetting procedure by our team. You are left with confirmed leads that are prepared for outreach after duplicates, invalid contacts, and unnecessary data are eliminated."
        },
        {
            number: "03",
            icon: <FiPhoneCall />,
            title: "Qualify",
            description: "Then, we qualify the merchants. We check the basic information, monthly bank deposit report, credit score, year in business, etc. We review all the information required to qualify the MCA aged leads criteria."
        }
    ];

    const criteria = [
        "Historical interest in Merchant Cash Advances.",
        "Typically 30 to 90 days old data.",
        "Owner, Co-owner, or business partner contacts.",
        "Active U.S. businesses with verified operations.",
        "Monthly revenue reports and bank deposits checked.",
        "Categorized by credit score profiles.",
        "Filtered by industry types and states.",
        "Scrubbed against DNC lists.",
        "Accuracy and commercial validity checked."
    ];

    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-[20%] left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Header Block */}
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        Our Delivery Method
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 leading-tight">
                        Our Step By Step <span className="text-primary">Aged MCA Lead Delivery Process</span>
                    </h2>
                    <p className="text-fluid-base text-slate-600 leading-relaxed max-w-3xl mx-auto mt-6">
                        To make sure you get clean, usable aged MCA leads, we follow a methodical and open procedure. Every step is intended to preserve quality, pertinence, and user-friendliness for your sales force.
                    </p>
                </div>

                {/* Grid Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Timeline Steps */}
                    <div className="lg:col-span-7 relative flex flex-col gap-8">
                        {/* Connecting Line (for timeline design) */}
                        <div className="absolute left-[60px] top-6 bottom-6 w-0.5 bg-slate-100 hidden sm:block"></div>

                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div
                                    className="relative flex flex-col sm:flex-row items-start gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 z-10 text-left"
                                >
                                    {/* Step Indicator Wrapper */}
                                    <div className="flex items-center gap-4 sm:shrink-0">
                                        {/* Circle Icon */}
                                        <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-xl shadow-md shadow-primary/20">
                                            {step.icon}
                                        </div>
                                        {/* Number (visible on mobile only) */}
                                        <span className="text-fluid-lg font-black text-slate-300 sm:hidden">
                                            Step {step.number}
                                        </span>
                                    </div>

                                    {/* Step Content */}
                                    <div className="grow">
                                        <div className="hidden sm:flex justify-between items-center mb-2">
                                            <h3 className="text-fluid-lg font-extrabold text-slate-900">
                                                {step.title}
                                            </h3>
                                            <span className="text-fluid-base font-black text-slate-300">
                                                Step {step.number}
                                            </span>
                                        </div>
                                        <h3 className="text-fluid-lg font-extrabold text-slate-900 mb-2 sm:hidden">
                                            {step.title}
                                        </h3>
                                        <p className="text-fluid-sm text-slate-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="flex justify-center sm:absolute sm:left-[60px] sm:transform sm:-translate-x-1/2 -my-4 z-20 relative">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md border-2 border-white">
                                            <FiArrowDown className="w-4 h-4" />
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Right Column: Criteria Box */}
                    <div className="lg:col-span-5 w-full">
                        <div className="bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-[2.5rem] shadow-sm text-left relative overflow-hidden">
                            {/* Decorative ambient bubble inside card */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

                            <h3 className="text-fluid-xl lg:text-fluid-2xl font-black text-slate-900 mb-6 leading-tight relative z-10">
                                The Criteria We Use To Ensure <span className="text-primary">Aged Leads Quality</span>
                            </h3>

                            <ul className="space-y-4 relative z-10">
                                {criteria.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 group">
                                        <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                                            <FiCheck className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-fluid-sm text-slate-700 font-medium leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AgedProcess;
