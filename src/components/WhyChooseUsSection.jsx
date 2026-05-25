import React from 'react';
import { FiTrendingUp, FiClock, FiCheckCircle, FiShield } from 'react-icons/fi';

const WhyChooseUsSection = () => {
    const features = [
        {
            icon: <FiTrendingUp className="w-8 h-8" />,
            title: "Exclusive Leads",
            description: "Shared data can slow you down when there is a lot of competition. Increasing the likelihood of direct communication, improving engagement, and closing deals more quickly, each lead is obtained from verified channels and matched to your funding strategy."
        },
        {
            icon: <FiClock className="w-8 h-8" />,
            title: "Real-Time Delivery",
            description: "Loans focus heavily on timing. Our real-time MCA leads are supplied as soon as they are generated, allowing your team to contact borrowers at the very moment they indicate an interest in funding."
        },
        {
            icon: <FiCheckCircle className="w-8 h-8" />,
            title: "Verified & Qualified",
            description: "We verify and qualify every lead before it reaches you. Each lead includes critical information such as the business kind, revenue status, bank statements, and finance requirements. This screening technique allows your sales staff to avoid dead ends and focus on high-potential leads."
        },
        {
            icon: <FiShield className="w-8 h-8" />,
            title: "TCPA Compliant & DNC Filtered",
            description: "For complete peace of mind, all our leads adhere to TCPA and DNC compliance standards. Each lead is diligently pre-qualified, extensively checked, and cross-verified, ensuring you receive only high-quality, actionable contacts."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
                <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-400/5 blur-[100px]"></div>
            </div>

            <div className="container-custom relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-widest uppercase mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Trusted <span className="text-primary">Business Loan Leads</span> To Grow Your Business Faster
                    </h2>
                    <p className="text-fluid-base text-slate-600 leading-relaxed max-w-4xl mx-auto">
                        In the lending business, trust is just as important as speed. Our leads for MCA are therefore based on both. We provide accurate, up-to-date, and conversion-ready merchant cash advance leads. We help you connect with merchants that are actually in need of assistance, whether you are a funding organization or an individual lender. Finding business owners who have expressed interest in funding is the main goal of our MCA lead generation strategies. Our solution allows you to buy MCA leads that are filtered by geography, business type, revenue range, or funding amount for those seeking to enhance their lead generation through MCA-focused targeting. The outcome? Better leads, quicker closes, and a reliable pipeline that keeps expanding.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col items-start group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <div className="text-primary group-hover:text-white transition-colors duration-300">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
