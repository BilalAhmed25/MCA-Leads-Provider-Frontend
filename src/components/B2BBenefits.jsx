import React from 'react';
import { FiTarget, FiMap, FiUsers, FiLayers } from 'react-icons/fi';

const B2BBenefits = () => {
    const benefits = [
        {
            icon: <FiTarget />,
            title: "Industry-Specific Targeting",
            description: "Our industry-focused email campaigns connect you with businesses in particular sectors that frequently require funding solutions. We use detailed industry classifications and business intelligence so that your messages reach the most relevant prospects."
        },
        {
            icon: <FiMap />,
            title: "Geographic Segmentation",
            description: "You can access region-specific email databases with our email lead generation B2B, and it helps you target businesses in your preferred markets. Our geographically segmented email leads help in localized marketing strategies and provide better response rates."
        },
        {
            icon: <FiUsers />,
            title: "Decision-Maker Databases",
            description: "Connect directly with business owners and financial decision-makers. Our verified contact lists give direct access to the individuals who have the authority to make the decision."
        },
        {
            icon: <FiLayers />,
            title: "Multi-Channel Integration",
            description: "Use our integrated contact databases and combine email outreach with other marketing channels. We provide complete business profiles that support multi-touch marketing campaigns."
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
                        Benefits Of Buying <span className="bg-clip-text text-transparent bg-linear-to-r from-primary-light to-blue-400">MCA Email Marketing B2B Leads</span>
                    </h2>
                    <p className="text-fluid-base text-slate-300 leading-relaxed max-w-3xl mx-auto mt-6">
                        Our company gives the best lead generation solutions that maximize your MCA business outreach potential. Each service gives quality results and drives growth for your organization.
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

export default B2BBenefits;
