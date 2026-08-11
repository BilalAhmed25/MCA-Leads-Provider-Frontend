import React from 'react';
import { FiShield, FiDollarSign, FiZap, FiSliders } from 'react-icons/fi';

const BusinessLoanBenefits = () => {
    const benefits = [
        {
            icon: <FiShield />,
            title: "Pre-qualified Leads",
            description: "Our business loan leads are pre-screened to verify that they meet basic funding requirements, including operating status, revenue range, and loan aim. This saves wasteful outreach and allows your sales staff to only contact prospects who are ready to discuss funding."
        },
        {
            icon: <FiDollarSign />,
            title: "Verified Information",
            description: "Each lead we provide has verified contact information with accuracy. To assure you that contacting business owners or authorized financial decision-makers leads to increased response rates and more visible results."
        },
        {
            icon: <FiZap />,
            title: "Geographical and Industry Targeting",
            description: "Buy business loan leads that are sorted by area and industry to meet your funding needs. Targeting the appropriate locations and sectors enhances campaign relevance, personalization, and overall performance."
        },
        {
            icon: <FiSliders />,
            title: "Higher Conversions with ROI",
            description: "By utilizing validated and intent-driven small business loan leads, you can save sales cycles and enhance close rates. This method maximizes return on investment while promoting growth."
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
                        Benefits Of Buying <span className="bg-clip-text text-transparent bg-linear-to-r from-primary-light to-blue-400">Business Loan Leads</span> For Sale
                    </h2>
                    <p className="text-fluid-base text-slate-300 leading-relaxed max-w-3xl mx-auto mt-6">
                        Our pre qualified business loan leads help lenders connect directly with companies actively seeking funding. Our leads are validated to increase outreach with efficiency, lower acquisition expenses, and flawless transaction conversions. You can focus on closing more deals rather than chasing unqualified leads by following reliable data and real buyer intent.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/3 backdrop-blur-md rounded-4xl p-8 lg:p-10 border border-white/8 shadow-2xl hover:border-primary/40 hover:bg-white/6 hover:-translate-y-2 transition-all duration-300 flex flex-col group text-left"
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

export default BusinessLoanBenefits;
