import React from 'react';
import {
    FiLock,
    FiZap,
    FiCheckCircle,
    FiDollarSign,
    FiTarget,
    FiSliders,
    FiTrendingUp,
    FiShare2
} from 'react-icons/fi';

const DifferentiationSection = ({ className = "py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50" }) => {
    const cards = [
        {
            icon: <FiLock className="w-6 h-6" />,
            title: "Exclusive Leads",
            description: "We provide 100% exclusive leads, which means that only you will receive them. No clash, no sharing. This keeps your marketing ROI high and improves your chances of closing more business."
        },
        {
            icon: <FiZap className="w-6 h-6" />,
            title: "Real-Time Delivery",
            description: "Loans focus heavily on timing. Our real-time MCA leads are supplied as soon as they are generated, allowing your team to contact borrowers at the very moment they indicate an interest in funding."
        },
        {
            icon: <FiCheckCircle className="w-6 h-6" />,
            title: "Verified & Qualified",
            description: "Every MCA lead we provide is pre-screened, validated, and qualified. Our leads meet every criteria, such as time in business, monthly income, and financial requirements."
        },
        {
            icon: <FiDollarSign className="w-6 h-6" />,
            title: "Increased Conversion",
            description: "Fill your sales funnel with genuine chances. Close more deals, decrease waste, and grow your funding business with confidence."
        },
        {
            icon: <FiTarget className="w-6 h-6" />,
            title: "Industry Specific Targeting",
            description: "Speak with the appropriate merchants in the appropriate sectors. To improve your chances of success, we focus on industries that are most likely to require MCA funding."
        },
        {
            icon: <FiSliders className="w-6 h-6" />,
            title: "Personalized Solutions",
            description: "Our team goes deep to understand your specific needs, crafting personalized solutions designed precisely to achieve your distinct goals and drive measurable results."
        },
        {
            icon: <FiTrendingUp className="w-6 h-6" />,
            title: "Focused Strategy",
            description: "We use a professional approach to generate the best leads for the lenders. We use specific criteria such as location, loan size, credit ratings, business tenure, and gross deposits to target prospects."
        },
        {
            icon: <FiShare2 className="w-6 h-6" />,
            title: "Multichannel Lead Generation",
            description: "We send high-intent leads that convert using a variety of trusted channels, including paid ads and organic forms."
        }
    ];

    return (
        <section className={`${className} relative overflow-hidden`}>
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-blue-400/5 blur-[130px]"></div>
            </div>

            <div className="container-custom relative z-10">
                {/* Header Block */}
                <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs md:text-sm tracking-wider uppercase mb-4 shadow-sm border border-primary/5">
                        Our Differentiators
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                        Factors That Differ Us <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">From the Rest</span>
                    </h2>
                    <p className="text-fluid-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Our merchant cash advance leads are intended to put you in touch with legitimate merchants that are looking for working capital.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(96,31,234,0.12)] border border-slate-100 hover:border-primary/20 transition-all duration-300 flex flex-col items-start group hover:-translate-y-1 relative overflow-hidden"
                        >
                            {/* Decorative hover gradient border at top */}
                            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-primary/50 to-violet-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Icon block */}
                            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                                {card.icon}
                            </div>

                            {/* Card Content */}
                            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                {card.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DifferentiationSection;
