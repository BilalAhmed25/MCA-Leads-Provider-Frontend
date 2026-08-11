import React from 'react';
import { FiTrendingUp, FiSearch, FiAward, FiCheckSquare } from 'react-icons/fi';

const BusinessLoanIncluded = () => {
    const items = [
        {
            icon: <FiTrendingUp />,
            title: "Consistent Lead Flow",
            description: "Business loan leads give a consistent stream of startups actively seeking small business loan leads. This consistent demand ensures the conversion path stays active while reducing dependency entirely on cold outreach."
        },
        {
            icon: <FiSearch />,
            title: "Scalable Outreach",
            description: "Business loan leads for sale are based on volume and delivery preferences. We match lead consumption with sales capability, ensuring that our exclusive business loan leads are handled efficiently without disturbance."
        },
        {
            icon: <FiAward />,
            title: "Improved Response Timing",
            description: "Sales teams and borrowers are connected in real time at the point of funding intent through business loan leads live transfer. Higher engagement rates and increased conversions are supported by the fastest reaction times."
        },
        {
            icon: <FiCheckSquare />,
            title: "Focused Sales Effort",
            description: "Our pre-qualified business loan leads check out invalid entries before they are delivered. Sales teams focus on verified clients who fulfill lending criteria, which improves efficiency and closing rates."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
            {/* Ambient decorative background glows */}
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        What's Included
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 leading-tight">
                        How Our Business Loan Leads <span className="text-primary">Support Your Sales Process</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-primary rounded-full mx-auto mt-6"></div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col group text-left"
                        >
                            {/* Icon circle */}
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center text-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-fluid-xl font-extrabold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-250">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-fluid-sm text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessLoanIncluded;
