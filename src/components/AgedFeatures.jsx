import React from 'react';
import { FiUserCheck, FiZap, FiDollarSign, FiDatabase } from 'react-icons/fi';

const AgedFeatures = () => {
    const features = [
        {
            icon: <FiUserCheck />,
            title: "Lead Reliability",
            description: "Aged MCA leads are collected from real business owners who have previously expressed interest in funding. With appropriate filtering, these leads can be an appropriate source for outreach."
        },
        {
            icon: <FiZap />,
            title: "Potential Conversion",
            description: "Aged leads continue to generate high response rates for many MCA businesses. These clients have the potential to become real customers with the correct pitch and follow-up plan. It all comes down to timing, regularity, and customized communication."
        },
        {
            icon: <FiDollarSign />,
            title: "Cost-effective Approach",
            description: "Aged leads MCA are less expensive than live leads. You may reach a broader audience without spending too much on lead generation. It reduces contracting expenses while maintaining a full stream."
        },
        {
            icon: <FiDatabase />,
            title: "Growth With Data",
            description: "Using validated MCA aged data allows you to grow regularly. It connects thousands of potential clients who have already expressed an interest in finance. These datasets enable improved targeting, planning, and long-term scaling."
        }
    ];

    return (
        <section className="py-12 lg:py-16 bg-linear-to-br from-slate-50 via-white to-slate-100/50 relative overflow-hidden">
            {/* Ambient decorative background glows */}
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        Strategic Value
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900 leading-tight">
                        The Strategic Value Of <span className="text-primary">Aged MCA Leads</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-primary rounded-full mx-auto mt-6"></div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 lg:p-10 rounded-4xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col group text-left"
                        >
                            {/* Icon Wrapper */}
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center text-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-fluid-xl font-extrabold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-200">
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

export default AgedFeatures;
