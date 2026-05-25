import React from 'react';

const StorySection = () => {
    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

                    {/* Left: Image with Offset Background */}
                    <div className="relative w-full mx-auto lg:mx-0">
                        {/* Decorative Background Shape */}
                        <div className="absolute -top-10 lg:-top-10 left-10 w-[80%] h-[90%] bg-primary rounded-[2.5rem]"></div>

                        {/* Main Image */}
                        <div className="relative w-[90%] h-[400px] rounded-[2.5rem] overflow-hidden bg-slate-200 ml-auto">
                            <img
                                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Professional woman working on laptop"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="flex flex-col items-start text-left">
                        <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-primary mb-6 leading-tight">
                            Our Story
                        </h2>

                        <div className="space-y-6 text-fluid-sm lg:text-fluid-base text-slate-700 leading-relaxed mb-10">
                            <p>
                                MCA Leads Provider was formed with one objective in mind: to make it easier for lenders to connect with businesses looking for funding. With 9+ years of experience in the finance and lead generation industries, we witnessed the issues that lenders faced, including wasted time, unconfirmed data, and missed opportunities.
                            </p>
                            <p>
                                We designed our service to address all of these. By focusing on real-time merchant cash advance leads, verified connections, and correct data, we've helped lenders around the United States close more deals and reach out to serious borrowers faster. We've created a solution that works for both small businesses asking for working capital and lenders looking for MCA leads using bank statements or UCC data.
                            </p>
                            <p>
                                What began as a small operation has since developed into a reliable source for MCA lead generation. We combine industry knowledge, hands-on research, and responsive service to ensure that every client receives the help and leads they require to move forward every time.
                            </p>
                        </div>

                        <a
                            href="#discover-more"
                            className="inline-flex items-center justify-center px-10 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-fluid-sm transition-all duration-300 hover:-translate-y-1"
                        >
                            DISCOVER MORE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
