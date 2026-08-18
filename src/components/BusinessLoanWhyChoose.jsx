import React from 'react';
import { FiAward, FiSliders, FiCheckCircle } from 'react-icons/fi';

const BusinessLoanWhyChoose = () => {
    const listItems = [
        {
            icon: <FiAward />,
            title: "Focused Lead Qualification",
            description: "Each lead is screened according to established parameters such as time in business, revenue range, and funding intent. This reduces unqualified submissions and allows your team to focus more time on lenders who match your loan requirements."
        },
        {
            icon: <FiSliders />,
            title: "Flexible Lead Delivery Options",
            description: "Choose how your business loan leads are given, whether through real-time form submissions, live transfer calls, or dated leads. This flexibility enables you to align lead delivery with your internal sales process and staffing model."
        },
        {
            icon: <FiCheckCircle />,
            title: "Controlled Lead Flow",
            description: "Business loan leads we provide are exclusive to reduce competition and repetitive outreach. Lead volume can be modified based on performance and capacity, providing you with complete flexibility over intake without requiring long-term commitments."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            {/* Ambient decorative background glows */}
            <div className="absolute top-[20%] right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Header Block */}
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">

                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Exclusive Business Loan Leads <span className="text-primary">For Your Business</span>
                    </h2>
                    <p className="text-fluid-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        We concentrate on fulfilling real demand and clear qualification standards. Our exclusive business loan leads process is designed to help lenders and brokers who require dependable lead flow, clear delivery conditions, and consistent data quality. Every lead is created via compliant channels and structured to match typical lending operations.
                    </p>
                </div>

                {/* Content split grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Vertical Benefits Stack */}
                    <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                        {listItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-100/90 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 group"
                            >
                                {/* Icon circle */}
                                <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>

                                {/* Texts */}
                                <div className="flex flex-col">
                                    <h3 className="text-fluid-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-250">
                                        {item.title}
                                    </h3>
                                    <p className="text-fluid-sm text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Premium Image Layout */}
                    <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] lg:h-[520px] mx-auto lg:mx-0">
                        {/* Background solid decor shape */}
                        <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary/10 rounded-4xl pointer-events-none"></div>

                        {/* Foreground Image container */}
                        <div className="relative w-full h-full rounded-4xl overflow-hidden border border-slate-100 shadow-md bg-slate-200 z-10">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
                                alt="Business professionals analyzing financial loan documents"
                                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BusinessLoanWhyChoose;
