import React from 'react';
import { FiShield, FiDollarSign, FiZap, FiSliders } from 'react-icons/fi';

const AgedBenefits = () => {
    const benefits = [
        {
            icon: <FiShield />,
            title: "Verified Leads Quality",
            description: "Every lead we supply is thoroughly checked for accuracy and commercial validity. This ensures that you don't waste time on fraudulent, closed, or unqualified contacts. Our concentration is on data that will help you convert."
        },
        {
            icon: <FiDollarSign />,
            title: "Cost-effective Approach",
            description: "Our aged MCA leads offer a low-cost approach to reaching out to firms seeking finance. You obtain valuable data without the exorbitant cost of live transmission. It's an effective technique to expand your reach while staying within your budget."
        },
        {
            icon: <FiZap />,
            title: "Faster Prospecting",
            description: "With pre-qualified aged MCA data leads, your team can focus on closing rather than hunting. These leads are ready for follow-up, allowing you to expedite your sales process. No cold calling, just targeted effort."
        },
        {
            icon: <FiSliders />,
            title: "Custom Filtering Options",
            description: "We allow you to select data segments based on industry, region, and lead age. This personalization will enable you to target the correct businesses at the right time. What was the result? Better relationships and more meaningful conversations."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-linear-to-br from-slate-950 via-[#13113C] to-slate-950 relative overflow-hidden text-white">
            {/* Soft decorative neon glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[130px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[130px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-primary-light font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        Exclusive Benefits
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-white leading-tight">
                        Benefits of Purchasing <span className="bg-clip-text text-transparent bg-linear-to-r from-primary-light to-blue-400">Aged MCA Leads</span> from MCA Leads Provider
                    </h2>
                    <p className="text-fluid-base text-slate-300 leading-relaxed max-w-3xl mx-auto mt-6">
                        For unique, high-converting leads, mca aged leads are the best option. Every lead is validated, saving you time and guaranteeing that you contact companies that are ready for investment.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/3 backdrop-blur-md rounded-4xl p-8 lg:p-10 border border-white/8 shadow-2xl hover:border-primary/40 hover:bg-white/6 hover:-translate-y-2 transition-all duration-300 flex flex-col group text-left"
                        >
                            {/* Icon Wrapper */}
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-primary-light flex items-center justify-center text-2xl mb-8 group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-fluid-xl font-bold text-white mb-4 group-hover:text-primary-light transition-colors duration-200">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-fluid-sm text-slate-300 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgedBenefits;
