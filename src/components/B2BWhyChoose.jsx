import React from 'react';
import { FiDatabase, FiShield, FiRefreshCw } from 'react-icons/fi';

const B2BWhyChoose = () => {
    const listItems = [
        {
            icon: <FiDatabase />,
            title: "Data Intelligence & Research",
            description: "Our team combines complete market research with data mining techniques to identify quality business email contacts. We present B2B email leads that perfectly match your target market specifications."
        },
        {
            icon: <FiShield />,
            title: "Validation & Data Cleansing",
            description: "We use modern email verification tools and data cleansing processes for maximum deliverability rates. Our technology provides you with a clean and correct USA B2B email database that presents optimal campaign performance."
        },
        {
            icon: <FiRefreshCw />,
            title: "Ongoing Database Management",
            description: "Our B2B email lead generation company provides continuous database updates and maintenance to keep your email contacts current and effective."
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
                        Email Marketing B2B Lead Generation Partner: <span className="text-primary">Why Choose Us?</span>
                    </h2>
                    <p className="text-fluid-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        MCA Leads Provider has great experience in B2B data acquisition and the MCA industry. We understand the importance of accurate and targeted email marketing. Our clients trust us, and our dedicated approach makes us the preferred choice for lenders who want to buy B2B email leads.
                    </p>
                </div>

                {/* Content split grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Vertical Benefits Stack */}
                    <div className="lg:col-span-7 flex flex-col gap-6 text-left">
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
                                <div className="flex flex-col">
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
                        <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary/10 rounded-4xl pointer-events-none"></div>

                        {/* Foreground Image container */}
                        <div className="relative w-full h-full rounded-4xl overflow-hidden border border-slate-100 shadow-md bg-slate-200 z-10">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                                alt="Professional team working on email marketing campaigns"
                                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default B2BWhyChoose;
