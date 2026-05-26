import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const B2BGeneration = () => {
    return (
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
            {/* Soft backdrop glows */}
            <div className="absolute top-[20%] left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Process & Dark Card */}
                    <div className="lg:col-span-6 flex flex-col gap-8 text-left">
                        <div>
                            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                                Why Buy From Us
                            </span>
                            <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900 leading-tight mb-6">
                                Why Buy B2B Email Leads From <span className="text-primary">MCA Leads Provider?</span>
                            </h2>
                            <p className="text-fluid-sm text-slate-600 leading-relaxed">
                                We dedicate all resources and generate premium leads. We implement proven strategies that can bring more conversions.
                            </p>
                        </div>

                        {/* Dark Card */}
                        <div className="bg-linear-to-br from-slate-900 via-[#13113C] to-slate-950 rounded-[2.5rem] p-8 lg:p-10 shadow-2xl text-white">
                            <ul className="space-y-8">
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">Data Quality Assurance</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            Our quality control processes remove invalid email addresses and outdated contact information. It will help you to deliver email where it really matters.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">Fresh and Exclusive Contact</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            We provide unique email databases to help you access fresh contacts without any competition with multiple providers for the same prospects.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">Sustainable Email Marketing</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            We use ethical data acquisition practices to generate reliable B2B email leads so that you can have a trustworthy list.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-10 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-fluid-base transition-all duration-300 hover:-translate-y-1 shadow-md self-start"
                        >
                            I WANT LEADS
                        </Link>
                    </div>

                    {/* Right Column: Advantages Card & Graphic */}
                    <div className="lg:col-span-6 flex flex-col gap-8 text-left">
                        {/* White Card */}
                        <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-xl border border-slate-100/80">
                            <h3 className="text-fluid-2xl lg:text-fluid-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                                Advantages Of <span className="text-primary">MCA B2B Email Lists</span>
                            </h3>
                            <p className="text-fluid-sm text-slate-600 leading-relaxed mb-8">
                                If you are a fund provider and you need the most effective USA B2B email database for your funding business, MCA Leads Provider is here at your service. We give you email leads that can bring growth to your MCA business.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <FiCheckCircle className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-slate-900 mb-2">Expert Team</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Our experienced team specializes in MCA industry email marketing, and we provide guidance and support throughout your campaigns.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <FiCheckCircle className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-slate-900 mb-2">Tested Methods</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Our data acquisition methods have produced the best results for various clients, and we use these proven strategies to provide you with quality email contacts.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Graphic Frame with stats card */}
                        <div className="relative w-full h-[360px] rounded-[2.5rem] overflow-hidden shadow-lg mt-4 bg-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80"
                                alt="Professional email marketing team at work"
                                className="w-full h-full object-cover"
                            />
                            {/* Floating Stat Card */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-5 rounded-2xl shadow-2xl flex flex-col items-center">
                                <div className="text-[10px] font-semibold text-slate-400 mb-2">YEAR OF 2026</div>
                                <div className="relative w-24 h-24 rounded-full border-[6px] border-slate-100 flex items-center justify-center mb-3">
                                    <div className="absolute inset-0 rounded-full border-[6px] border-t-primary border-r-primary border-b-transparent border-l-transparent transform rotate-45"></div>
                                    <span className="text-xl font-black text-slate-900">8+yrs</span>
                                </div>
                                <div className="text-[10px] text-slate-500 font-medium">Industry Experience</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default B2BGeneration;
