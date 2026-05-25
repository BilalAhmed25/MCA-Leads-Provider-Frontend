import React from 'react';
import { Link } from 'react-router-dom';

const PartnerSection = () => {
    return (
        <section className="bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left: Image Collage */}
                    <div className="relative w-full h-[400px] md:h-[600px] mx-auto lg:mx-0">
                        {/* Background shape */}
                        <div className="absolute top-[80px] md:top-[120px] left-[15%] md:left-[25%] w-[260px] md:w-[400px] h-[240px] md:h-[360px] bg-primary rounded-[2rem]"></div>

                        {/* Top-left image */}
                        <div className="absolute top-[40px] md:top-[80px] left-0 w-[320px] md:w-[480px] h-[200px] md:h-[320px] rounded-[2rem] overflow-hidden  bg-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team meeting"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Bottom-right image */}
                        <div className="absolute bottom-[40px] md:bottom-[80px] right-0 w-[320px] md:w-[480px] h-[200px] md:h-[320px] rounded-[2rem] overflow-hidden z-10 bg-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Professional working"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="flex flex-col items-start text-left">
                        <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900 leading-[1.3] mb-6">
                            <span className="text-primary">MCA Leads Provider</span> Is Your <br className="hidden lg:block" />
                            Partner For <span className="text-primary">Working Capital Leads</span>
                        </h2>

                        <p className="text-fluid-base text-slate-700 mb-6 leading-relaxed">
                            We supply merchant cash advance leads to ensure seamless operations and assist you in meeting your daily sales targets. With real-time MCA leads, your team can avoid delays and guessing. Working with us gives you access to solutions that are made to keep your workflow productive, in addition to generating leads. Our process guarantees that you receive quick, accurate, and actionable data to keep your business operating uninterrupted.
                        </p>

                        <p className="text-fluid-base text-slate-700 mb-10 leading-relaxed">
                            Our clients depend on us to provide working capital leads that correspond with their business objectives. From MCA leads with bank statements to exclusive MCA leads, we help you keep in touch with prospects who fit your ideal client profile.
                        </p>

                        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-fluid-sm transition-all duration-300 shadow-md">
                            ORDER LEADS
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerSection;
