import React from 'react';
import { FiAward, FiTrendingUp, FiClock, FiUsers } from 'react-icons/fi';

const CallbacksIncluded = () => {
    const items = [
        {
            icon: <FiAward />,
            title: "Proven Strategies",
            description: "Our methodologies have delivered outstanding results across diverse market conditions, and we use them to guarantee your success."
        },
        {
            icon: <FiTrendingUp />,
            title: "Scalability",
            description: "Our flexible infrastructure adapts to your business growth, and it helps you to scale your operations as per your needs."
        },
        {
            icon: <FiClock />,
            title: "Time Effective",
            description: "Save your time and resources with our efficient lead delivery system that removes cold calling and prospecting so that you can close maximum deals."
        },
        {
            icon: <FiUsers />,
            title: "Professional Team",
            description: "Our team is professional, and it understands the MCA industry. And we are here to guide and support you."
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-linear-to-br from-slate-50 via-white to-slate-100/50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        Included Features
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900 leading-tight">
                        Grow Your Funding Business With <span className="text-primary">MCA Leads Provider</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-primary rounded-full mx-auto mt-6"></div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-white p-8 lg:p-10 rounded-4xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group text-left"
                        >
                            {/* Icon Wrapper */}
                            <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-extrabold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-200">
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

export default CallbacksIncluded;
