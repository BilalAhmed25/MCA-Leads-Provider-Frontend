import React from 'react';
import { FiTrendingUp, FiTarget, FiShield, FiZap } from 'react-icons/fi';

const DMFeatures = () => {
    const features = [
        {
            icon: <FiTrendingUp />,
            title: "High ROI",
            description: "Our leads are generated through active internet campaigns, enhancing your chances of securing finance and providing a high return on investment."
        },
        {
            icon: <FiTarget />,
            title: "Correct Targeting",
            description: "We focus on businesses that are actively asking for merchant cash advances, ensuring that your marketing efforts are directed to the correct people."
        },
        {
            icon: <FiShield />,
            title: "Lead Authenticity",
            description: "Each lead is sourced totally from our internal efforts, with no recycling or third-party data, resulting in clean, exclusive prospects."
        },
        {
            icon: <FiZap />,
            title: "Real-Time Delivery",
            description: "Leads are supplied in real time once they have passed our verification procedure, allowing you to contact interested prospects immediately."
        }
    ];

    return (
        <section className="py-12 lg:py-16 bg-linear-to-br from-slate-50 via-white to-slate-100/50 relative overflow-hidden">
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        Why Choose Our Leads
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900 leading-tight">
                        Why Choose Our <span className="text-primary">MCA Digital Marketing Leads?</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-primary rounded-full mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 lg:p-10 rounded-4xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col group text-left"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center text-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-fluid-xl font-extrabold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-200">
                                {item.title}
                            </h3>
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

export default DMFeatures;
