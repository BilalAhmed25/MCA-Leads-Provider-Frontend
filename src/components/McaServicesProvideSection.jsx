import React from 'react';
import {
    FiPhoneCall,
    FiPhoneIncoming,
    FiDatabase,
    FiMail,
    FiGlobe,
    FiBriefcase
} from 'react-icons/fi';

const McaServicesProvideSection = ({ className = "py-20 lg:py-28 bg-slate-950" }) => {
    const services = [
        {
            icon: <FiPhoneCall className="w-6 h-6" />,
            title: "MCA Live Transfer Leads",
            description: "Connect instantly with pre-qualified business owners who need the funding. They are eager to get financing, so it increases the likelihood of conversion."
        },
        {
            icon: <FiPhoneIncoming className="w-6 h-6" />,
            title: "MCA Call Back Leads",
            description: "Obtain a list of qualified business owners who have expressed interest and requested a follow-up. Warm leads provide efficient engagement."
        },
        {
            icon: <FiDatabase className="w-6 h-6" />,
            title: "Aged MCA Leads",
            description: "Get cost-effective aged leads for MCA. Reach more borrowers as this service connects lenders with merchants who were previously looking for finance."
        },
        {
            icon: <FiMail className="w-6 h-6" />,
            title: "B2B Email Lists",
            description: "For focused efforts, Get access to validated business email lists. Ideal for contacting owners who require financial choices."
        },
        {
            icon: <FiGlobe className="w-6 h-6" />,
            title: "Digital Marketing Leads",
            description: "Leads with high intent are gathered via landing sites, SEO, and paid advertisements. They are always looking for ways to get money."
        },
        {
            icon: <FiBriefcase className="w-6 h-6" />,
            title: "Business Loan Leads",
            description: "Get business loan leads to connect lenders and brokers with pre-qualified merchants seeking working capital."
        }
    ];

    return (
        <section className={`relative ${className} overflow-hidden`}>
            {/* Ambient Background Lights & Grid Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Tech Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-[0.25]"></div>

                {/* Glowing Blur Blobs */}
                <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[130px] pointer-events-none"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-violet-600/10 blur-[150px] pointer-events-none"></div>
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[180px] pointer-events-none"></div>
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-primary-light border border-primary/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block shadow-lg">
                        Service Offerings
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-white mb-6 leading-tight tracking-tight uppercase">
                        MCA Leads Generation <span className="bg-gradient-to-r from-primary-light to-violet-400 bg-clip-text text-transparent">Services We Provide</span>
                    </h2>
                    <div className="w-24 h-[3px] bg-gradient-to-r from-primary to-violet-600 mx-auto rounded-full"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/30 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-slate-800/80 hover:border-primary/40 hover:bg-slate-900/60 hover:shadow-[0_20px_50px_-15px_rgba(96,31,234,0.25)] transition-all duration-500 group flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden"
                        >
                            {/* Accent Glow Spot */}
                            <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 blur-2xl transition-all duration-500"></div>

                            <div>
                                {/* Icon container with double border & hover lift */}
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-violet-600/15 text-primary-light border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-primary group-hover:to-violet-600 group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(96,31,234,0.15)]">
                                    {service.icon}
                                </div>

                                {/* Custom premium animated header line */}
                                <h3 className="text-xl font-bold text-white mb-4 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-primary group-hover:after:w-20 after:transition-all after:duration-500">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default McaServicesProvideSection;
