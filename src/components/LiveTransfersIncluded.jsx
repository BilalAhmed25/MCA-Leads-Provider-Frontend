import React from 'react';
import { FiCheckSquare, FiHeadphones, FiUsers, FiDatabase } from 'react-icons/fi';

const LiveTransfersIncluded = () => {
    const items = [
        {
            icon: <FiCheckSquare />,
            title: "Access To Pre-Qualified Businesses",
            description: "You will only receive leads that satisfy the fundamental requirements, which include time in business, monthly income, and funding purpose."
        },
        {
            icon: <FiHeadphones />,
            title: "Real-Time Live Call Transfers",
            description: "Connect with live calls with interested merchants."
        },
        {
            icon: <FiUsers />,
            title: "Special Access To Leads",
            description: "You are the only recipient of each MCA live transfer lead; there is no reselling or competition from other agents—just a direct exchange with the merchant."
        },
        {
            icon: <FiDatabase />,
            title: "Comprehensive Lead Data",
            description: "In order to properly prepare your pitch, you will obtain essential business Information before the transfer, including the industry, the need for funds, and contact history."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
            {/* Ambient decorative background glows */}
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        What's Included
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 leading-tight">
                        What's Included with Our <span className="text-primary">MCA Live Transfers?</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-primary rounded-full mx-auto mt-6"></div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col group text-left"
                        >
                            {/* Icon circle */}
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center text-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-fluid-xl font-extrabold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-250">
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

export default LiveTransfersIncluded;
