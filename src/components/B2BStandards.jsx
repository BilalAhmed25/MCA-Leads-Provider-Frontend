import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiArrowRight, FiTarget } from 'react-icons/fi';

const B2BStandards = () => {
    const leftCriteria = [
        "Real-time email validation and deliverability testing.",
        "Business verification and operational status.",
        "Contact role validation and decision-maker ID.",
        "Market segment verification.",
        "Geographic location confirmation.",
        "Business size and revenue range qualification.",
        "Complete company profile documentation.",
        "Compliance with email marketing regulations.",
        "Fresh and deduplicated contact records."
    ];

    const pricingDetails = [
        "Industry-Specific Segmentation",
        "Geographic Filtering Options",
        "Decision-Maker Contact Verified",
        "Real-time Deliverability Check",
        "Ongoing Database Updates"
    ];

    return (
        <section className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Full-width Header with CTA button aligned right on desktop */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 gap-6">
                    <div className="max-w-4xl text-left">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-3">
                            Data Quality Standards
                        </span>

                        <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900 leading-tight">
                            B2B Email Lead <span className="text-primary">Quality Criteria</span>
                        </h2>

                        <p className="text-fluid-sm text-slate-600 leading-relaxed mt-3">
                            We maintain rigorous quality control processes to ensure every email contact we deliver is verified, fresh, and campaign-ready for your MCA business outreach.
                        </p>
                    </div>
                    <div className="shrink-0 flex">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-fluid-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary/20 hover:shadow-xl group"
                        >
                            GET LEADS NOW
                            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                    </div>
                </div>

                {/* Grid layout: 2/3 for criteria, 1/3 for pricing */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                    {/* Left Column: Verification Criteria Checklist Grid */}
                    <div className="lg:col-span-2 bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100/80 shadow-xs flex flex-col justify-between text-left">
                        <div>
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <FiCheck className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-extrabold text-slate-900">
                                    Verification Criteria
                                </h3>
                            </div>

                            {/* Checklist in 2 or 3 columns */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                                {leftCriteria.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-4 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-xs transition-all duration-200"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <FiCheck className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-fluid-sm font-semibold text-slate-700 leading-snug">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Pricing Premium Card */}
                    <div className="lg:col-span-1 flex">
                        <div className="bg-linear-to-br from-primary via-[#5317d6] to-[#3a0bb5] rounded-[2.5rem] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-350 flex flex-col justify-between w-full h-full text-left">
                            {/* Accent graphics */}
                            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
                            <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>

                            <div className="relative z-10 w-full">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-fluid-xs font-bold tracking-wider uppercase mb-6">
                                    <FiTarget /> Best Value Leads
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="text-fluid-xs font-semibold text-purple-200 uppercase tracking-widest">Pricing Plan</div>
                                    <div className="flex items-baseline mt-2">
                                        <span className="text-fluid-4xl lg:text-fluid-5xl font-black tracking-tight">$0.10</span>
                                        <span className="text-fluid-xs text-purple-200 ml-2 font-medium">/ Each</span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-white/15 mb-6"></div>

                                {/* Features list */}
                                <ul className="space-y-3.5 mb-6">
                                    {pricingDetails.map((detail, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0">
                                                <FiCheck className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-fluid-sm font-medium text-slate-100">
                                                {detail}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Bottom note */}
                            <p className="text-[10px] text-purple-200 leading-normal italic relative z-10 mt-auto pt-4">
                                * Pricing and volume criteria are subjected to terms and conditions.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default B2BStandards;
