import React from 'react';

const AgedOverview = () => {
    return (
        <section className="py-20 lg:py-28 bg-linear-to-b from-slate-50/80 via-white to-slate-50/80 relative overflow-hidden">
            {/* Ambient subtle background glows */}
            <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Header Block */}
                <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
                    <h2 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 leading-tight">
                        What are <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-600">Aged MCA Leads?</span> How Do They Work?
                    </h2>
                    <div className="h-1.5 w-24 bg-linear-to-r from-primary to-blue-500 rounded-full mx-auto mt-6"></div>
                </div>

                {/* Two Card Layout for Paragraphs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-lg hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-primary to-primary-light"></div>
                        <p className="text-fluid-base lg:text-fluid-lg text-slate-700 leading-relaxed font-normal text-left">
                            Aged MCA leads are contact information for companies that have previously expressed interest in merchant cash advance services, but were not recently created. These leads are typically 30-90 days old and are classified by revenue and loan interest. They function by providing your sales team with access to a pool of pre-engaged prospects.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-lg hover:shadow-2xl hover:border-blue-500/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-blue-500 to-indigo-600"></div>
                        <p className="text-fluid-base lg:text-fluid-lg text-slate-700 leading-relaxed font-normal text-left">
                            What differentiates us is how we handle and distribute these leads. At MCA Leads Provider, we prioritize data accuracy, lead screening, and quality assurance. Unlike others who provide bulk, outdated, or recycled lists, we verify that each lead fulfills specific intent and engagement standards.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgedOverview;
