import React from 'react';
import { FiAward, FiActivity, FiUsers } from 'react-icons/fi';

const CallbacksWhyChoose = () => {
    const reasons = [
        {
            icon: <FiAward />,
            title: "Industry Expertise & Experience",
            description: "Our team brings deep knowledge of the MCA industry to target the right businesses. We generate leads that align perfectly with your lending criteria."
        },
        {
            icon: <FiActivity />,
            title: "Advanced Technology & Analytics",
            description: "We use modern data analytics and technology to identify and qualify the leads. Our team presents leads with precision and gives you a competitive edge in the market."
        },
        {
            icon: <FiUsers />,
            title: "Dedicated Support & Partnership",
            description: "We provide ongoing support and guidance to help you maximize your conversion rates and business growth."
        }
    ];

    return (
        <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Column: Heading and stacked cards */}
                    <div className="text-left">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                            Why Choose Us
                        </span>
                        
                        <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900 leading-tight mb-6">
                            Why We're Your Best Partner For the <span className="text-primary">MCA Call Back Leads?</span>
                        </h2>
                        
                        <p className="text-fluid-sm text-slate-600 leading-relaxed mb-10">
                            With 8+ years of expertise in the merchant cash advance industry, we understand what it takes to provide quality results. Our proven track record makes us the trusted choice for businesses seeking premium MCA callback leads generation solutions.
                        </p>

                        <div className="space-y-6">
                            {reasons.map((item, index) => (
                                <div 
                                    key={index}
                                    className="flex gap-5 p-6 rounded-3xl border border-slate-100 hover:border-primary/10 hover:bg-slate-50/50 hover:shadow-xs transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-350">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-200">
                                            {item.title}
                                        </h3>
                                        <p className="text-fluid-sm text-slate-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visual Image with decor background */}
                    <div className="relative lg:mt-0 mt-8">
                        {/* Ambient decorative radial glow behind the image */}
                        <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Image Backdrop shapes */}
                        <div className="absolute inset-0 bg-linear-to-tr from-primary to-blue-600 rounded-[3rem] rotate-3 scale-102 opacity-10"></div>
                        
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-4/3">
                            <img 
                                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Why Choose MCA Callback Leads" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CallbacksWhyChoose;
