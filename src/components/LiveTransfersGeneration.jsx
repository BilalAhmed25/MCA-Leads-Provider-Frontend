import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const LiveTransfersGeneration = () => {
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
                                Strategic Generation
                            </span>
                            <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900 leading-tight mb-6">
                                How Do We Generate the Best <span className="text-primary">Live Transfer Leads</span> for More Conversion?
                            </h2>
                            <p className="text-fluid-sm text-slate-600 leading-relaxed">
                                Our process begins with engaging business owners through marketing efforts that focus on alternative funding options. Once interest has been demonstrated, we screen each lead to verify they meet critical funding criteria such as time in business, monthly income, and funding urgency. We generate the highest quality live transfer MCA leads by combining targeted outreach, tight qualification filters, and real-time call transfers.
                            </p>
                        </div>

                        {/* Dark Card */}
                        <div className="bg-linear-to-br from-slate-900 via-[#13113C] to-slate-950 rounded-[2.5rem] p-8 lg:p-10 shadow-2xl text-white">
                            <ul className="space-y-8">
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">Empowered Sales</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            We put you in touch with merchants whose finance requirements match your offerings, giving your staff the confidence and purpose to approach every discussion.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">Data-Driven Leads</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            We find and provide live transfer leads that support your financial plan by using real-time data, which enables you to rank high-value prospects.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">Consistent Pipeline</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            Help you better plan your funding offerings and keep a constant sales funnel by providing you with qualified business live transfer leads on a regular basis.
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

                    {/* Right Column: Why Buy Card & Graphic */}
                    <div className="lg:col-span-6 flex flex-col gap-8 text-left">
                        {/* White Card */}
                        <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-xl border border-slate-100/80">
                            <h3 className="text-fluid-2xl lg:text-fluid-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                                Why Purchase Live Transfers From <span className="text-primary">MCA Leads Provider</span>?
                            </h3>
                            <p className="text-fluid-sm text-slate-600 leading-relaxed mb-8">
                                When you buy MCA live transfer leads from MCA Leads Provider, you're working with a team that values quality, timeliness, and real-time communication. We understand that your sales staff requires direct access to merchants who are ready to discuss funding. Our technology ensures that each lead is pre-screened and interested in a merchant cash advance, allowing you to avoid cold calls and low-quality leads. With us, you will spend less time seeking and more time closing.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <FiCheckCircle className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-slate-900 mb-2">Custom Campaign Filters</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            We apply industry-specific filters to match you with leads that are relevant to your company's focus, resulting in improved compatibility and conversion potential.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <FiCheckCircle className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-slate-900 mb-2">Exclusive Lead Delivery</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Our business funding live transfers are exclusive; once the call is routed to your team, it is not offered to other purchasers. You take a clear lead with no competition.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Graphic Frame with stats card */}
                        <div className="relative w-full h-[360px] rounded-[2.5rem] overflow-hidden shadow-lg mt-4 bg-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                                alt="Professional woman working at desk"
                                className="w-full h-full object-cover"
                            />
                            {/* Floating Stat Card */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-5 rounded-2xl shadow-2xl flex flex-col items-center">
                                <div className="text-[10px] font-semibold text-slate-400 mb-2">YEAR OF 2026</div>
                                <div className="relative w-24 h-24 rounded-full border-[6px] border-slate-100 flex items-center justify-center mb-3">
                                    <div className="absolute inset-0 rounded-full border-[6px] border-t-primary border-r-primary border-b-transparent border-l-transparent transform rotate-45"></div>
                                    <span className="text-xl font-black text-slate-900">21,950</span>
                                </div>
                                <div className="text-[10px] text-slate-500 font-medium">You're doing great!</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LiveTransfersGeneration;
