import React from 'react';
import { FiInbox, FiDollarSign, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

const B2BFeatures = () => {
    const features = [
        {
            icon: <FiInbox />,
            title: "Reach the Right Recipient",
            description: "Our MCA B2B email lists help you to reach decision-makers directly in their inbox, and you can immediately access the businesses that need funding solutions."
        },
        {
            icon: <FiDollarSign />,
            title: "Cost-Effective Marketing",
            description: "Reduce your customer acquisition costs with our targeted email leads that produce maximum impact for your marketing budget. Every email contact shows a strategic investment in your business growth."
        },
        {
            icon: <FiTrendingUp />,
            title: "Scalable Outreach Campaigns",
            description: "Our complete email databases help in large-scale marketing campaigns that speed up your growth and help you reach thousands of potential clients."
        },
        {
            icon: <FiCheckCircle />,
            title: "Accurate Data",
            description: "Buy B2B email leads that undergo strong validation processes to maintain deliverability and accuracy. We provide fresh data for your outreach."
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
                        Targeted Lead Generation
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900 leading-tight">
                        Targeted <span className="text-primary">B2B Email Lead Generation</span>
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

export default B2BFeatures;
