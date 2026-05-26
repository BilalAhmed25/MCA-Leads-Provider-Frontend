import React from 'react';
import { FiCheckCircle, FiClock, FiBarChart2, FiDollarSign } from 'react-icons/fi';

const DMBenefits = () => {
    const benefits = [
        {
            icon: <FiCheckCircle />,
            title: "Clear Leads",
            description: "To minimize the likelihood of acquiring invalid or uninterested clients, our MCA digital marketing leads are carefully selected and collected using reliable online techniques."
        },
        {
            icon: <FiClock />,
            title: "Minimize Your Work",
            description: "We save your time and money by managing all digital outreach, including SEO, paid marketing, and social media interaction, and delivering ready-to-contact prospects."
        },
        {
            icon: <FiBarChart2 />,
            title: "High-Quality Leads",
            description: "Each lead is produced using specific digital tactics aimed at identifying funding intent, ensuring that you connect with companies that are actively looking for MCA solutions."
        },
        {
            icon: <FiDollarSign />,
            title: "Profitable Outcomes",
            description: "Our digital marketing MCA leads are more accurate and targeted, which raises your chances of closing funding deals and makes each lead a wise investment."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-linear-to-br from-slate-950 via-[#13113C] to-slate-950 relative overflow-hidden text-white">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[130px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[130px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-primary-light font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        Key Benefits
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-white leading-tight">
                        Benefits Of Purchasing <span className="bg-clip-text text-transparent bg-linear-to-r from-primary-light to-blue-400">Digital Marketing Leads From MCA Leads Provider</span>
                    </h2>
                    <p className="text-fluid-base text-slate-300 leading-relaxed max-w-3xl mx-auto mt-6">
                        Our company gives the best digital marketing lead generation solutions that maximize your MCA business outreach potential. Each service gives quality results and drives growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/3 backdrop-blur-md rounded-4xl p-8 lg:p-10 border border-white/8 shadow-2xl hover:border-primary/40 hover:bg-white/6 hover:-translate-y-2 transition-all duration-300 flex flex-col group text-left"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-primary-light flex items-center justify-center text-2xl mb-8 group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-fluid-xl font-bold text-white mb-4 group-hover:text-primary-light transition-colors duration-200">
                                {item.title}
                            </h3>
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

export default DMBenefits;
