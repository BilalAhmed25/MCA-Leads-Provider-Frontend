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
                            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                                Why Choose Us
                            </span>
                            <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900 leading-tight mb-6">
                                Why Buy Digital Marketing Leads From <span className="text-primary">MCA Leads Provider?</span>
                            </h2>
                            <p className="text-fluid-sm text-slate-600 leading-relaxed">
                                We dedicate all resources to generate premium digital marketing leads. Our in-house campaigns are built to bring more qualified conversations and higher conversions for your funding business.
                            </p>
                        </div>

                        {/* Dark Card */}
                        <div className="bg-linear-to-br from-slate-900 via-[#13113C] to-slate-950 rounded-[2.5rem] p-8 lg:p-10 shadow-2xl text-white">
                            <ul className="space-y-8">
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">100% In-House Lead Generation</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            We produce all of our leads in-house through focused digital campaigns, ensuring accuracy, intent, and exclusivity — with no recycling or third-party data.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">Customizable Lead Selection</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            We provide alternatives based on business size, industry, and funding history, allowing you to choose the digital marketing MCA leads you receive.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">Transparent Reporting</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            We provide full visibility into your lead campaigns with detailed reporting so you always know exactly what you are getting and how your investment is performing.
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

                    {/* Right Column */}
                    <div className="lg:col-span-6 flex flex-col gap-8 text-left">
                        <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-xl border border-slate-100/80">
                            <h3 className="text-fluid-2xl lg:text-fluid-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                                Advantages Of <span className="text-primary">MCA Digital Marketing Leads</span>
                            </h3>
                            <p className="text-fluid-sm text-slate-600 leading-relaxed mb-8">
                                If you are a fund provider looking for the most effective digital marketing leads, MCA Leads Provider is here at your service. We give you leads that can bring real growth to your MCA business through targeted, intent-driven campaigns.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <FiCheckCircle className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-slate-900 mb-2">Experienced Digital Marketing Team</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Our team specializes in MCA industry digital marketing, providing campaign guidance and ongoing support throughout your lead generation journey.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <FiCheckCircle className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-slate-900 mb-2">Proven Multi-Channel Methods</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Our digital acquisition methods combining SEO, PPC, and social media have produced excellent results for lenders across the country.
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

export default DMGeneration;
