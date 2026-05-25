import React from 'react';
import { FiPhoneCall, FiPhoneIncoming, FiMonitor, FiMessageSquare } from 'react-icons/fi';

const ServicesSection = () => {
    const services = [
        {
            icon: <FiPhoneCall className="w-7 h-7" />,
            title: "MCA Live Transfer Leads",
            description: "We connect lenders with pre-qualified business owners who are actively looking for cash. These prospects are eager to communicate, making live transfers a dependable alternative for faster transaction closes."
        },
        {
            icon: <FiPhoneIncoming className="w-7 h-7" />,
            title: "MCA Call Back Leads",
            description: "Our call-back leads connect lenders with prospective merchants who have sought contact. Your chances of a successful follow-up are increased because these leads are ready to proceed and have already worked with finance offers."
        },
        {
            icon: <FiMonitor className="w-7 h-7" />,
            title: "MCA Aged Leads",
            description: "Looking for cost-effective options? MCA aged leads allow you to reach a greater range of possible borrowers. These contacts have previously expressed interest in funding and may still be in need."
        },
        {
            icon: <FiMessageSquare className="w-7 h-7" />,
            title: "Digital Marketing Leads",
            description: "Our MCA digital marketing lead generation service connects you with qualified MCA sales leads, including aged, live transfer, and callback types. With the correct data and intent, you can buy leads for MCA that meet your sales objectives while also reaching out to businesses looking for finance."
        }
    ];

    return (
        <section className="relative py-20 lg:py-28 bg-slate-900 overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1528659169600-b8c2c8f654b0?auto=format&fit=crop&w=2000&q=80" 
                    alt="Strategic Planning" 
                    className="w-full h-full object-cover opacity-[0.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/50"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Text */}
                    <div className="lg:col-span-5 flex flex-col items-start text-left">
                        <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-white leading-tight mb-8">
                            Our <span className="text-primary">MCA Leads</span> <br className="hidden lg:block"/>
                            Generation Services
                        </h2>
                        
                        <div className="space-y-6 text-slate-300 text-fluid-sm lg:text-fluid-base leading-relaxed mb-10">
                            <p>
                                Our lead-generating services are designed specifically for the merchant cash advance business. Our priority is to provide the best leads that enable lenders and funders to interact with qualified borrowers more quickly and efficiently.
                            </p>
                            <p>
                                We use good research and industry-specific information so that every lead we deliver is relevant, validated, and on time. Whether you want to buy MCA leads or establish a long-term funding pipeline, our options are designed to help you develop.
                            </p>
                            <p>
                                We handle and advise each project with a dedicated team. We perform extensive research to understand borrower behavior.
                            </p>
                            <p>
                                Our mission is straightforward: provide you with the pre qualified business loan leads and working capital leads you require to close more business, boost efficiency, and scale confidently.
                            </p>
                        </div>
                        
                        <a href="#services" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-fluid-sm transition-all duration-300 shadow-[0_0_20px_rgba(96,31,234,0.4)] hover:-translate-y-1">
                            EXPLORE MORE LEADS
                        </a>
                    </div>

                    {/* Right Column: Cards Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-transparent hover:border-primary/20 flex flex-col"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100 group-hover:border-primary/20 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
