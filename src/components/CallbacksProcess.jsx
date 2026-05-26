import React from 'react';
import { FiSearch, FiUserCheck, FiAward, FiCheck, FiArrowDown } from 'react-icons/fi';

const CallbacksProcess = () => {
    const steps = [
        {
            number: "Step 01",
            title: "Identification and Qualification",
            description: "We use advanced data analytics and market research to identify businesses that are in search of funds. Our team qualifies each prospect on the basis of your particular criteria, which include revenue and credit requirements.",
            icon: <FiSearch />
        },
        {
            number: "Step 02",
            title: "Initial Contact and Interest Verification",
            description: "Our experienced representatives make initial contact to verify genuine interest and gather important business information. We confirm the merchant's funding needs and timeline and make sure that they are ready to proceed with the application process.",
            icon: <FiUserCheck />
        },
        {
            number: "Step 03",
            title: "Final Qualification",
            description: "Only the most qualified leads who pass the verification and screening standards make it to your list. We do not conclude the deal for the lenders.",
            icon: <FiAward />
        }
    ];

    const verificationPoints = [
        "Real-time phone verification and contact confirmation.",
        "Business legitimacy and registration verification.",
        "Financial stability and creditworthiness assessment.",
        "Industry compatibility and funding suitability.",
        "Decision-maker identification and direct contact.",
        "Immediate funding needs confirmation.",
        "Complete business profile documentation.",
        "Compliance with all regulatory requirements."
    ];

    return (
        <section className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-[20%] left-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-[-5%] w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        Lead Delivery Process
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900 leading-tight">
                        Our 3-Step Call Back <span className="text-primary">MCA Leads Delivery Process</span>
                    </h2>
                    <p className="text-fluid-sm text-slate-600 leading-relaxed mt-4">
                        MCA Leads Provider follows a proven process to offer the highest quality callback leads. Our systematic approach presents the finest results and maximum conversion rates for your business.
                    </p>
                    <div className="h-1.5 w-20 bg-primary rounded-full mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Timeline Steps (spans 7 columns on lg) */}
                    <div className="lg:col-span-7 relative text-left">
                        {/* Vertical connection line running through the center of icons */}
                        <div className="absolute left-[30px] sm:left-[40px] top-[40px] bottom-[40px] w-0.5 bg-slate-200 pointer-events-none"></div>

                        <div className="space-y-12">
                            {steps.map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="flex gap-6 sm:gap-8 items-start">
                                        {/* Step Icon Container */}
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-2xl sm:text-3xl text-primary shrink-0 relative z-10 hover:border-primary/20 hover:scale-105 transition-all duration-300">
                                            {item.icon}
                                        </div>

                                        {/* Content Card */}
                                        <div className="bg-white p-6 sm:p-8 rounded-4xl border border-slate-100/80 shadow-xs hover:shadow-lg transition-shadow duration-300 flex-1">
                                            <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
                                                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                                                    {item.title}
                                                </h3>
                                                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider shrink-0">
                                                    {item.number}
                                                </span>
                                            </div>
                                            <p className="text-fluid-sm text-slate-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Centered Flow Direction Indicator Arrow */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute left-[30px] sm:left-[40px] translate-x-[-12px] bottom-[-34px] w-6.5 h-6.5 rounded-full bg-primary text-white flex items-center justify-center text-xs shadow-md z-20">
                                            <FiArrowDown className="w-3.5 h-3.5" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Pre-qualification checklist card (spans 5 columns on lg) */}
                    <div className="lg:col-span-5 text-left h-full flex">
                        <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100/80 shadow-md flex flex-col justify-between w-full h-full">
                            <div>
                                <h3 className="text-xl font-extrabold text-slate-900 mb-4 border-b border-slate-100 pb-4">
                                    MCA Call Back Leads Verification Process
                                </h3>
                                <p className="text-fluid-sm text-slate-600 leading-relaxed mb-6">
                                    Our complete verification process makes sure that every lead we deliver is thoroughly screened and validated. We focus on multiple quality indicators and provide only the most conversion-ready prospects for your business.
                                </p>
                                <ul className="space-y-4">
                                    {verificationPoints.map((point, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                                <FiCheck className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-fluid-sm text-slate-700 font-semibold leading-relaxed">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CallbacksProcess;
