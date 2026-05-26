import React from 'react';
import { FiActivity, FiZap, FiDatabase, FiShield } from 'react-icons/fi';

const LiveTransfersBenefits = () => {
    const benefits = [
        {
            icon: <FiActivity />,
            title: "Consistent Lead Flow",
            description: "We understand the importance of maintaining momentum in your sales cycle. Our technology generates a consistent stream of business live transfer leads, ensuring that your agents always have someone new to talk to—no long pauses, no lead droughts."
        },
        {
            icon: <FiZap />,
            title: "Instantaneous Connections",
            description: "It's all about timing. Our live transfers for business funding put you in touch with merchants who are actively seeking funding. While interest is strong, this immediate interaction increases engagement and facilitates the advancement of the conversation."
        },
        {
            icon: <FiDatabase />,
            title: "UCC Lists",
            description: "UCC (Uniform Commercial Code) lists are public records of businesses that have previously secured loans or leases with collateral. These lists are useful because they emphasize organizations that are conversant with alternative lending, making them ideal candidates for merchant cash advance live transfers."
        },
        {
            icon: <FiShield />,
            title: "Peace Of Mind",
            description: "When you purchase from MCA Leads Provider, you are not taking risks. Each lead is pre-qualified. This relieves pressure on your team and ensures that your outreach remains focused and productive."
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
                        Benefits of Purchasing <span className="bg-clip-text text-transparent bg-linear-to-r from-primary-light to-blue-400">Live Transfer Leads</span> from MCA Leads Provider
                    </h2>
                    <p className="text-fluid-base text-slate-300 leading-relaxed max-w-3xl mx-auto mt-6">
                        Working with MCA Leads Provider means having access to consistent, high-converting MCA live transfer leads. Our process is designed to deliver excellent interactions, allowing your team to close business more quickly and efficiently.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/3 backdrop-blur-md rounded-4xl p-8 lg:p-10 border border-white/8 shadow-2xl hover:border-primary/40 hover:bg-white/6 hover:-translate-y-2 transition-all duration-300 flex flex-col group"
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

export default LiveTransfersBenefits;
