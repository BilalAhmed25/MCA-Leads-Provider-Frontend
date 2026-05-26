import React from 'react';
import { FiTrendingUp, FiMaximize2, FiUsers, FiAward } from 'react-icons/fi';

const DMIncluded = () => {
    const items = [
        {
            icon: <FiTrendingUp />,
            title: "Consistent Lead Volume",
            description: "Our active digital marketing campaigns ensure a steady, reliable flow of MCA leads so your sales team always has a full pipeline of qualified prospects to work with."
        },
        {
            icon: <FiMaximize2 />,
            title: "Scalable Campaign Growth",
            description: "Our adaptable digital marketing infrastructure grows with your business needs, helping you scale your lead generation operations according to your funding volume requirements."
        },
        {
            icon: <FiUsers />,
            title: "Better Client Acquisition",
            description: "Our verified digital marketing leads connect you with businesses that have genuine funding needs, making it easier to build productive relationships with new clients."
        },
        {
            icon: <FiAward />,
            title: "Higher Conversion Rates",
            description: "Because our leads are sourced from businesses actively searching for MCA options, your sales team experiences higher engagement rates and improved deal-closing outcomes."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        How We Help
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 leading-tight">
                        How Our Digital Marketing Lead Generation <span className="text-primary">Can Help You?</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-primary rounded-full mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col group text-left"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center text-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-fluid-xl font-extrabold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-250">
                                {item.title}
                            </h3>
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

export default DMIncluded;
