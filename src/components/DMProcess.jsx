import React from 'react';
import { FiSearch, FiMousePointer, FiMail, FiCheck, FiArrowDown } from 'react-icons/fi';

const DMProcess = () => {
    const steps = [
        {
            number: "01",
            icon: <FiMousePointer />,
            title: "Paid Advertising & Campaign Setup",
            description: "We run targeted paid advertising campaigns across Google, Facebook, and industry platforms to reach business owners actively searching for merchant cash advance funding solutions."
        },
        {
            number: "02",
            icon: <FiSearch />,
            title: "SEO & Organic Traffic Generation",
            description: "Our SEO experts rank for high-intent funding-related keywords so that businesses searching for capital naturally find and engage with our landing pages, creating consistent lead flow."
        },
        {
            number: "03",
            icon: <FiMail />,
            title: "Verification & Real-Time Delivery",
            description: "Every lead passes through our quality verification process before real-time delivery to your sales team, ensuring you only receive genuine, intent-driven MCA prospects."
        }
    ];

    const criteria = [
        "Active search intent verification across all channels.",
        "Business qualification and funding eligibility check.",
        "Contact information accuracy and deliverability.",
        "Monthly revenue confirmation (minimum threshold).",
        "Time in business and operational status check.",
        "Duplicate and recycled lead filtering.",
        "Industry and geographic segmentation verification.",
        "Real-time lead scoring and prioritization."
    ];

    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            <div className="absolute top-[20%] left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        Our Process
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 leading-tight">
                        Digital Marketing Lead Generation <span className="text-primary">In Three Steps</span>
                    </h2>
                    <p className="text-fluid-base text-slate-600 leading-relaxed max-w-3xl mx-auto mt-6">
                        MCA Leads Provider uses a proven multi-channel digital strategy to generate high-intent leads. Our process combines paid advertising, organic search, and verification to deliver the best results.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-7 relative flex flex-col gap-8">
                        <div className="absolute left-[60px] top-6 bottom-6 w-0.5 bg-slate-100 hidden sm:block"></div>

                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="relative flex flex-col sm:flex-row items-start gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 z-10 text-left">
                                    <div className="flex items-center gap-4 sm:shrink-0">
                                        <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-xl shadow-md shadow-primary/20">
                                            {step.icon}
                                        </div>
                                        <span className="text-fluid-lg font-black text-slate-300 sm:hidden">Step {step.number}</span>
                                    </div>
                                    <div className="grow">
                                        <div className="hidden sm:flex justify-between items-center mb-2">
                                            <h3 className="text-fluid-lg font-extrabold text-slate-900">{step.title}</h3>
                                            <span className="text-fluid-base font-black text-slate-300">Step {step.number}</span>
                                        </div>
                                        <h3 className="text-fluid-lg font-extrabold text-slate-900 mb-2 sm:hidden">{step.title}</h3>
                                        <p className="text-fluid-sm text-slate-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="flex justify-center -my-4 z-20 relative">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md border-2 border-white">
                                            <FiArrowDown className="w-4 h-4" />
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="lg:col-span-5 w-full">
                        <div className="bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-[2.5rem] shadow-sm text-left relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
                            <h3 className="text-fluid-xl lg:text-fluid-2xl font-black text-slate-900 mb-6 leading-tight relative z-10">
                                Digital Marketing Leads <span className="text-primary">Quality Standards</span>
                            </h3>
                            <p className="text-fluid-sm text-slate-600 leading-relaxed mb-6 relative z-10">
                                Every MCA digital marketing lead we deliver meets strict quality standards. Our verification process ensures that you only receive genuine, high-intent prospects.
                            </p>
                            <ul className="space-y-4 relative z-10">
                                {criteria.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 group">
                                        <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                                            <FiCheck className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-fluid-sm text-slate-700 font-medium leading-relaxed">{item}</span>
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

export default DMProcess;
