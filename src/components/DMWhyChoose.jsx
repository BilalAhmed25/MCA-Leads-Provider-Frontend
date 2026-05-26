import React from 'react';
import { FiGlobe, FiSearch, FiMail } from 'react-icons/fi';

const DMWhyChoose = () => {
    const listItems = [
        {
            icon: <FiGlobe />,
            title: "Paid Advertising Campaigns",
            description: "We address specific business audiences who are actively looking for finance. Paid advertising lets us drive high-intent visitors to our landing pages so that you connect with the most relevant prospects."
        },
        {
            icon: <FiSearch />,
            title: "SEO-Driven Organic Traffic",
            description: "By ranking for relevant funding-related searches, we use SEO to attract organic traffic and ensure a consistent stream of incoming MCA prospects from businesses looking for capital."
        },
        {
            icon: <FiMail />,
            title: "Email Marketing Re-Engagement",
            description: "Our email marketing campaigns help re-engage and convert interested businesses, producing steady, qualified MCA digital marketing leads that are ready for your sales team."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            <div className="absolute top-[20%] right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-fluid-xs tracking-widest uppercase mb-4">
                        Lead Generation Strategy
                    </span>
                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        How Do We Generate the Best <span className="text-primary">Digital Marketing Leads For MCA?</span>
                    </h2>
                    <p className="text-fluid-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        We use a combination of paid advertisements, SEO, and email marketing to produce the best MCA digital marketing leads, creating a steady pipeline of qualified, intent-driven prospects for your funding business.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                        {listItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-100/90 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
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

                    <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] lg:h-[520px] mx-auto lg:mx-0">
                        <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary/10 rounded-4xl pointer-events-none"></div>
                        <div className="relative w-full h-full rounded-4xl overflow-hidden border border-slate-100 shadow-md bg-slate-200 z-10">
                            <img
                                src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop"
                                alt="Digital marketing strategy team"
                                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DMWhyChoose;
