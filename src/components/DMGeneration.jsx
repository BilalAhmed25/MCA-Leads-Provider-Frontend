import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const DMGeneration = () => {
    return (
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
            <div className="absolute top-[20%] left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column */}
                    <div className="lg:col-span-6 flex flex-col gap-8 text-left">
                        <div>

                            <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900 leading-tight mb-6">
                                How Do We Generate the Best
                                <span className="text-primary"> Digital Marketing Leads For MCA?</span>
                            </h2>
                            <p className="text-fluid-sm text-slate-600 leading-relaxed">
                                We use a combination of paid advertisements, SEO, and email marketing to produce the best MCA digital marketing leads. By addressing specific business audiences who are actively looking for finance, paid advertising lets us drive high-intent visitors to our landing sites. By ranking for relevant funding-related searches, we utilize SEO to attract organic traffic and ensure a consistent stream of incoming MCA prospects. Our email marketing campaigns help re-engage and convert them, producing steady, qualified MCA digital marketing leads.
                            </p>
                        </div>

                        {/* Dark Card */}
                        <div className="bg-linear-to-br from-slate-900 via-[#13113C] to-slate-950 rounded-[2.5rem] p-8 lg:p-10 shadow-2xl text-white">
                            <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-100 leading-tight mb-6">
                                Our Approach To High-Converting MCA Leads

                            </h2>
                            <ul className="space-y-8">
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Recognize the Needs Of the Business
                                        </h3>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            We examine each lead's funding objective to make sure it fits your loan requirements and financial solutions.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Make the Correct Connections
                                        </h3>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            By providing leads that fit your ideal client profile, our digital marketing initiatives enable you to concentrate on companies that have the highest conversion rates.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Encourage Smart Financing Choices</h3>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            Our leads provide you with the information you need to present the appropriate MCA product at the appropriate moment, according to precise data and precise purpose.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <Link
                            to="/contact-us/"
                            className="inline-flex items-center justify-center px-10 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-fluid-base transition-all duration-300 hover:-translate-y-1 shadow-md self-start"
                        >
                            I WANT LEADS
                        </Link>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-6 flex flex-col gap-8 text-left">
                        <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-xl border border-slate-100/80">
                            <h3 className="text-fluid-2xl lg:text-fluid-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                                Why Buy MCA Digital Marketing Leads From <span className="text-primary">MCA Leads Provider?</span>
                            </h3>
                            <p className="text-fluid-sm text-slate-600 leading-relaxed mb-8">
                                Getting MCA digital marketing leads from us gives you direct access to merchants who are looking for finance. Our leads are produced using targeted internet advertising, as opposed to generic data lists. You save your team time and increase your chances of closing more business by using our tried-and-true methods to generate qualified MCA prospects who are prepared for follow-up visits.

                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <FiCheckCircle className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900 mb-2">Real Time Qualified Prospects
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Our MCA digital marketing leads are sourced from actual campaigns targeting organizations for funding, giving you access to prospects that are ready to interact.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <FiCheckCircle className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900 mb-2">No Guesswork or Cold Outreach
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Each lead is created through digital channels with proven interest in merchant cash advances, eliminating the need for cold calling and increasing closing rates.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Image with Stat */}
                        <div className="relative w-full h-[360px] rounded-[2.5rem] overflow-hidden shadow-lg mt-4 bg-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                                alt="Digital marketing analytics dashboard"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-5 rounded-2xl shadow-2xl flex flex-col items-center">
                                <div className="text-[10px] font-semibold text-slate-400 mb-2">YEAR OF 2026</div>
                                <div className="relative w-24 h-24 rounded-full border-[6px] border-slate-100 flex items-center justify-center mb-3">
                                    <div className="absolute inset-0 rounded-full border-[6px] border-t-primary border-r-primary border-b-transparent border-l-transparent transform rotate-45"></div>
                                    <span className="text-xl font-black text-slate-900">21,950</span>
                                </div>
                                <div className="text-[10px] text-slate-500 font-medium">You're doing good</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DMGeneration;
