import React from 'react';
import { FiCheckCircle, FiDollarSign, FiTrendingUp, FiShield } from 'react-icons/fi';

const CallbacksFeatures = () => {
    const features = [
        {
            icon: <FiCheckCircle />,
            title: "High Probability Of Conversion",
            description: "The leads we provide are pre-screened, and they have merchant cash advance solutions. This is why you have more chances to close the deals."
        },
        {
            icon: <FiDollarSign />,
            title: "Favourable ROI",
            description: "Minimize your marketing spend with our leads that give the best results. We make sure that every dollar that you invest in our callback MCA leads generates good returns for your business."
        },
        {
            icon: <FiTrendingUp />,
            title: "Drive Sales Growth",
            description: "Speed up your business growth with high-quality leads that drive more deals and help you earn more revenue month after month."
        },
        {
            icon: <FiShield />,
            title: "Verified and Qualified",
            description: "Each lead undergoes detailed verification processes to maintain accuracy and qualification. We save your time and resources and offer ready to engage prospects."
        }
    ];

    return (
        <section className="py-12 lg:py-16 bg-linear-to-br from-slate-50 via-white to-slate-100/50 relative overflow-hidden">
            {/* Ambient decorative background glows */}
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        Premium Leads Features
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900 leading-tight">
                        Benefits Of <span className="text-primary">MCA Call Back Leads</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-primary rounded-full mx-auto mt-6"></div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 lg:p-10 rounded-4xl border border-slate-100/80 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col group text-left"
                        >
                            {/* Icon Wrapper */}
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center text-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-fluid-lg font-extrabold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-200 min-h-14 flex items-center">
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

export default CallbacksFeatures;
