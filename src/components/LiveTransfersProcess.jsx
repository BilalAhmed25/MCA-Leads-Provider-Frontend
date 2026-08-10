import React from 'react';
import { FiSearch, FiUserCheck, FiPhoneCall, FiCheck, FiArrowDown } from 'react-icons/fi';

const LiveTransfersProcess = () => {
    const steps = [
        {
            number: "01",
            icon: <FiSearch />,
            title: "Prospecting",
            description: "We prioritize discovering genuine borrowers using clever, focused prospecting techniques. This method enables us to generate high-quality leads, giving your team stronger conversations and a higher probability of closing."
        },
        {
            number: "02",
            icon: <FiUserCheck />,
            title: "Eligibility",
            description: "Each lead is thoroughly examined to ensure genuine interest, which increases your conversion success."
        },
        {
            number: "03",
            icon: <FiPhoneCall />,
            title: "The Transfer Process",
            description: "Our frictionless transfer procedure connects you directly with pre-qualified and ready-to-convert leads."
        }
    ];

    const criteria = [
        "Owner, Co-owner, or business partner.",
        "Active U.S. business with a checking account.",
        "12 months in business.",
        "$15,000 minimum deposit.",
        "No Bankruptcy / No tax liens.",
        "DNC compliant leads.",
        "Need Funds Immediate or Maximum of 15 to 20 Days.",
        "No home-based business.",
        "No Negatives on business checking account."
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
                        Our Step By Step <span className="text-primary">MCA Live Transfer Lead Delivery Process</span>
                    </h2>
                    <p className="text-fluid-base text-slate-600 leading-relaxed max-w-3xl mx-auto mt-6">
                        Our step-by-step MCA live transfer lead supply provides reliable, verified connections. From initial lead evaluation to live transfer, each stage is designed to link you with genuine borrowers who are ready to finance, saving wasted time and increasing your conversion rate.
                    </p>
                </div>

                {/* Grid Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Timeline Steps */}
                    <div className="lg:col-span-7 relative flex flex-col gap-8">
                        {/* Connecting Line (for timeline design) */}
                        <div className="absolute left-[60px] top-6 bottom-6 w-0.5 bg-slate-100 hidden sm:block"></div>

                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div
                                    className="relative flex flex-col sm:flex-row items-start gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-10 group"
                                >
                                    {/* Step Icon Circle */}
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-hover text-white flex items-center justify-center text-xl shadow-md shadow-primary/25 shrink-0 group-hover:scale-105 transition-transform duration-300">
                                        {step.icon}
                                    </div>

                                    {/* Step Content */}
                                    <div className="text-left grow w-full">
                                        <div className="flex items-center justify-between gap-3 mb-2 flex-wrap sm:flex-nowrap">
                                            <h3 className="text-fluid-lg font-extrabold text-slate-900 group-hover:text-primary transition-colors duration-200">
                                                {step.title}
                                            </h3>
                                            <span className="text-4xl sm:text-5xl font-black text-slate-200 group-hover:text-primary/25 transition-colors duration-300 select-none tracking-tighter leading-none shrink-0">
                                                {step.number}
                                            </span>
                                        </div>
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

                    {/* Right Column: Criteria Box */}
                    <div className="lg:col-span-5 w-full">
                        <div className="bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-[2.5rem] shadow-sm text-left relative overflow-hidden">
                            {/* Decorative ambient bubble inside card */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

                            <h3 className="text-fluid-xl lg:text-fluid-3xl font-black text-slate-900 mb-6 leading-tight relative z-10">
                                The Criteria We Use To Ensure <span className="text-primary">MCA Live Transfers</span>
                            </h3>

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

export default LiveTransfersProcess;
