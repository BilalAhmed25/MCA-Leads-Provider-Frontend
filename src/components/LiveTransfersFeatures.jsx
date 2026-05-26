import React from 'react';
import { FiHeadphones, FiUserCheck, FiRefreshCw, FiTarget } from 'react-icons/fi';

const LiveTransfersFeatures = () => {
    const features = [
        {
            icon: <FiHeadphones />,
            title: "Real Time Transfers",
            description: "Our MCA live transfer leads put you directly on a call with interested prospects the moment they show interest. This real-time interaction isn't just a convenience; it's a powerful advantage, significantly boosting your credibility and accelerating your ability to close deals quickly."
        },
        {
            icon: <FiUserCheck />,
            title: "Pre-Qualified",
            description: "Each lead is screened to verify they meet the basic financial requirements. By removing unqualified connections, we only transfer those who are actively looking into merchant cash advance live transfers, saving your team's valuable time and work."
        },
        {
            icon: <FiRefreshCw />,
            title: "Regular Lead Flow",
            description: "In order to keep your sales funnel filled and help you avoid sluggish times, we offer a consistent flow of business live transfer leads. Your company can grow quietly and confidently with a steady stream of calls."
        },
        {
            icon: <FiTarget />,
            title: "Conversion Focused",
            description: "Connecting with the appropriate prospects at the right time results in higher conversions. Our inexpensive MCA live transfer leads provide your team with direct access to motivated business owners, allowing you to close more sales in less time."
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
                        Premium Leads Features
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900 leading-tight">
                        Business Funding <span className="text-primary">Live Transfers</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-primary rounded-full mx-auto mt-6"></div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 lg:p-10 rounded-4xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col group"
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

export default LiveTransfersFeatures;
