import React from 'react';
import { FiDatabase, FiShield, FiSend, FiCheck, FiArrowDown } from 'react-icons/fi';

const B2BProcess = () => {
    const steps = [
        {
            number: "01",
            icon: <FiDatabase />,
            title: "Database Mining and Compilation",
            description: "We use advanced data mining techniques and tools to identify companies that match your ideal client profile. Our team combines email databases on the basis of your specific industry, size, and geographic requirements."
        },
        {
            number: "02",
            icon: <FiShield />,
            title: "Verification and Validation",
            description: "We use our verification systems for email deliverability and contact accuracy. Email verification is important for the success of a campaign."
        },
        {
            number: "03",
            icon: <FiSend />,
            title: "Segmented Delivery and Support",
            description: "We organize qualified B2B email leads into targeted segments and provide detailed analytics and campaign guidance. Our team gives complete database documentation and ongoing support for your email marketing success."
        }
    ];

    const criteria = [
        "Real-time email validation and deliverability testing.",
        "Business verification and operational status confirmation.",
        "Contact role validation and decision-maker identification.",
        "Market segment verification.",
        "Geographic location confirmation.",
        "Business size and revenue range qualification.",
        "Complete company profile and contact documentation.",
        "Compliance with email marketing regulations and standards."
    ];

    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-[20%] left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Header Block */}
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        Our Delivery Method
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 leading-tight">
                        Email Marketing B2B Lead Generation <span className="text-primary">In Three Steps</span>
                    </h2>
                    <p className="text-fluid-base text-slate-600 leading-relaxed max-w-3xl mx-auto mt-6">
                        MCA Leads Provider follows a proven methodology to give the highest quality email marketing B2B lead generation. Our systematic approach gives the best outcomes from our campaigns.
                    </p>
                </div>

                {/* Grid Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Timeline Steps */}
                    <div className="lg:col-span-7 relative flex flex-col gap-8">
                        {/* Connecting Line */}
                        <div className="absolute left-[60px] top-6 bottom-6 w-0.5 bg-slate-100 hidden sm:block"></div>

                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="relative flex flex-col sm:flex-row items-start gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 z-10 text-left">
                                    {/* Step Indicator */}
                                    <div className="flex items-center gap-4 sm:shrink-0">
                                        <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-xl shadow-md shadow-primary/20">
                                            {step.icon}
                                        </div>
                                        <span className="text-fluid-lg font-black text-slate-300 sm:hidden">
                                            Step {step.number}
                                        </span>
                                    </div>

                                    {/* Step Content */}
                                    <div className="grow">
                                        <div className="hidden sm:flex justify-between items-center mb-2">
                                            <h3 className="text-fluid-lg font-extrabold text-slate-900">
                                                {step.title}
                                            </h3>
                                            <span className="text-fluid-base font-black text-slate-300">
                                                Step {step.number}
                                            </span>
                                        </div>
                                        <h3 className="text-fluid-lg font-extrabold text-slate-900 mb-2 sm:hidden">
                                            {step.title}
                                        </h3>
                                        <p className="text-fluid-sm text-slate-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="flex justify-center sm:absolute sm:left-[60px] sm:transform sm:-translate-x-1/2 -my-4 z-20 relative">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md border-2 border-white">
                                            <FiArrowDown className="w-4 h-4" />
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Right Column: Verification Checklist */}
                    <div className="lg:col-span-5 w-full">
                        <div className="bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-[2.5rem] shadow-sm text-left relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

                            <h3 className="text-fluid-xl lg:text-fluid-2xl font-black text-slate-900 mb-6 leading-tight relative z-10">
                                B2B Email Marketing Leads <span className="text-primary">Verification Process</span>
                            </h3>
                            <p className="text-fluid-sm text-slate-600 leading-relaxed mb-6 relative z-10">
                                Our verification process is very professional, and it helps us to guarantee that every email contact we deliver is verified. We consider multiple data quality indicators to recognize the campaign-ready prospects.
                            </p>

                            <ul className="space-y-4 relative z-10">
                                {criteria.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 group">
                                        <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                                            <FiCheck className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-fluid-sm text-slate-700 font-medium leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default B2BProcess;
