import React from 'react';
import { FiAward, FiTrendingUp, FiPhoneOutgoing } from 'react-icons/fi';

const LiveTransfersWhyChoose = () => {
    const listItems = [
        {
            icon: <FiAward />,
            title: "Increased Success Ratio",
            description: "Enhance your chances of success by using pre-qualified MCA live transfer leads. Connect rapidly with high-intent borrowers, decrease missed opportunities, and speed up conversions."
        },
        {
            icon: <FiTrendingUp />,
            title: "Classifying Quality Over Quantity",
            description: "Quality is our top priority when it comes to our MCA live transfer leads. Every lead is carefully screened to confirm sincere interest, which improves relationships and increases conversions."
        },
        {
            icon: <FiPhoneOutgoing />,
            title: "Only True Outcomes",
            description: "Our goal is to produce apparent, quantifiable outcomes. No false promises, only top-notch MCA leads that put you in touch with funding-ready, serious borrowers."
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
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Why Choose Our <span className="text-primary">MCA Live Transfer Leads?</span>
                    </h2>
                    <p className="text-fluid-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Your sales process may succeed or fail based on your choice of lead source. Verified, time-efficient, and designed for high engagement are our MCA live transfer leads. We assist your team in connecting with actual business owners who are prepared to discuss finance through focused outreach and quality assurance.
                    </p>
                </div>

                {/* Content split grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Vertical Benefits Stack */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
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
                                <div className="flex flex-col text-left">
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
                        <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary/10 rounded-[2.5rem] pointer-events-none"></div>

                        {/* Foreground Image container */}
                        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-md bg-slate-200 z-10">
                            <img
                                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop"
                                alt="Counting and holding money bills"
                                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LiveTransfersWhyChoose;
