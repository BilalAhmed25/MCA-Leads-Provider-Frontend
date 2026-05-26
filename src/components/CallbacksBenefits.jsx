import React from 'react';
import { FiActivity, FiDatabase, FiShield } from 'react-icons/fi';

const CallbacksBenefits = () => {
    const commitments = [
        {
            icon: <FiActivity />,
            title: "Reliable Lead Generation",
            description: "We use ethical lead generation strategies to maintain a consistent and predictable flow of quality prospects."
        },
        {
            icon: <FiDatabase />,
            title: "Lead Filtering Processes",
            description: "Our filtering mechanisms eliminate unqualified prospects to save your time and resources."
        },
        {
            icon: <FiShield />,
            title: "Exclusivity",
            description: "We present exclusive leads so that you do not have to compete with multiple providers for the same opportunity."
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-linear-to-br from-slate-950 via-[#13113C] to-slate-950 text-white relative overflow-hidden">
            {/* Glowing neon sphere background graphics */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/10 text-purple-200 font-semibold text-fluid-xs tracking-widest uppercase mb-4 backdrop-blur-xs">
                        Our Commitment
                    </span>
                    
                    <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-white leading-tight">
                        Our Commitment To Best <span className="bg-linear-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">MCA Call Back Leads</span>
                    </h2>
                    
                    <p className="text-fluid-sm text-slate-300 leading-relaxed mt-6">
                        We put all our efforts into generating quality leads. We use the best strategies that focus on precision and relevance.
                    </p>
                    
                    <div className="h-1 w-20 bg-linear-to-r from-primary to-blue-500 rounded-full mx-auto mt-6"></div>
                </div>

                {/* Glassmorphic Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {commitments.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/3 backdrop-blur-md p-8 lg:p-10 rounded-[2.5rem] border border-white/8 shadow-2xl hover:bg-white/6 hover:border-white/15 hover:-translate-y-2 hover:shadow-primary/5 transition-all duration-300 flex flex-col group text-left"
                        >
                            {/* Icon Circle */}
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-primary flex items-center justify-center text-2xl mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-fluid-lg font-extrabold text-white mb-4 group-hover:text-purple-300 transition-colors duration-200">
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

export default CallbacksBenefits;
