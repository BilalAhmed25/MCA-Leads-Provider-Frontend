import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const LeadGenerationSection = () => {
    return (
        <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column */}
                    <div className="lg:col-span-6 flex flex-col gap-8">
                        <div>
                            <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 leading-tight mb-6">
                                How Do We Generate the <span className="text-primary">Best MCA Leads</span> For Better Conversion?
                            </h2>
                            <p className="text-fluid-sm text-slate-600 leading-relaxed mb-6">
                                In order to make sure that our MCA lead generating process produces high-quality leads that truly convert, we concentrate on data accuracy, targeting, and timing. Each lead goes through a multi-step process to find the best merchants to meet your company's financial needs. Finding merchants that are actively seeking funding is the first step in our approach. We gather intent-driven merchant cash advance leads through web forms, email funnels, advertising campaigns, and data partnerships. Based on factors including funding kind, region, revenue, and business age, these contacts are filtered. We check all contact information and, if necessary, incorporate supporting documentation like bank statements or credit history in order to provide the finest MCA leads. Your team approaches decision-makers more confidently and quickly as a result.
                            </p>
                        </div>

                        {/* Dark Card */}
                        <div className="bg-gradient-to-br from-slate-900 to-[#1e1b4b] rounded-[2.5rem] p-8 lg:p-10 shadow-2xl text-white">
                            <ul className="space-y-8">
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">Social Media Marketing</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            We use targeted advertising on Social Media to reach out to small company owners interested in finance possibilities. These ads are intended to capture intent and increase interaction among company decision-makers. What was the result? Merchant cash advance leads are developed by active users who are already looking for financial services.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">Email Marketing</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            Our email marketing targets prospects who have an interest in loans, advances, or working capital. These emails feature compelling messaging and clear calls to action, encouraging them to respond or apply. This method is used to generate MCA leads with bank statements and related business data, increasing the likelihood of direct conversions.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">Search Engine Optimization (SEO)</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            We rank for important search terms or keywords on Google. We draw inbound traffic for people who are actively seeking finance options. Our content, landing pages, and forms are optimized to capture leads with high purchasing intent, making SEO a long-term and cost-effective component of our MCA lead generation strategy.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-6 flex flex-col gap-8">
                        {/* White Card */}
                        <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-slate-100">
                            <h3 className="text-fluid-2xl lg:text-fluid-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                                Why Buy Business Loan Leads From Us?
                            </h3>
                            <p className="text-fluid-sm text-slate-600 leading-relaxed mb-8">
                                When it comes to funding and loan services, selecting the correct lead supplier has a direct impact on your success. At MCA Leads Provider, we provide business loan leads that can help you close deals quickly and confidently to grow your business. Here's what makes us stand out:
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <FiCheckCircle className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-slate-900 mb-2">Return on Investment</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Every lead we send is intended to improve your bottom line. We assist you in lowering buying expenses and increasing close rates by providing designed MCA leads for sale, including real-time MCA leads and exclusive MCA leads.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <FiCheckCircle className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-slate-900 mb-2">Quality Leads</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            We think that successful results begin with reliable information. That's why all of our business loan leads are validated, pre-qualified, and tailored to your requirements. From MCA leads with bank statements to working capital leads, our data is well-organized and up to date.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Image with Floating Card */}
                        <div className="relative w-full h-[320px] rounded-[2.5rem] overflow-hidden shadow-lg mt-4">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                                alt="Professional working"
                                className="w-full h-full object-cover"
                            />
                            {/* Floating Stat Card */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-5 rounded-2xl shadow-2xl flex flex-col items-center">
                                <div className="text-xs font-semibold text-slate-400 mb-2">2026</div>
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

export default LeadGenerationSection;
