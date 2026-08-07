import React from 'react';
import { Link } from 'react-router-dom';

const AboutStorySection = () => {
    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

                    {/* Left: Image with Offset Background */}
                    <div className="relative w-full mx-auto lg:mx-0">
                        {/* Decorative Background Shape */}
                        <div className="absolute -top-10 lg:-top-10 w-[80%] h-[90%] bg-primary rounded-[2.5rem]"></div>

                        {/* Main Image */}
                        <div className="relative w-[95%] h-[400px] rounded-[2.5rem] overflow-hidden bg-slate-200 ml-auto">
                            <img
                                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Professional woman working on laptop"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="flex flex-col items-start text-left">
                        <h4 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-primary mb-6 leading-tight">
                            Our Story
                        </h4>

                        <div className="space-y-6 text-fluid-sm lg:text-fluid-base text-slate-700 leading-relaxed mb-10">
                            <p>
                                MCA Leads Provider was formed with one clear objective in mind: to provide businesses in the merchant cash advance marketplace with consistent, high-converting leads. We realized the growing need for <a style={{ color: "#601FEA" }} href="/">reliable MCA leads</a> and resolved to fill it with detail, professionalism, and performance. We’ve assisted lenders, funding companies, and brokers in connecting with eligible merchants for immediate financial solutions.
                            </p>
                            <p>
                                Over the years, our team has established an impeccable track record for supplying MCA leads that are tailored to individual client needs. Whether you’re looking for <a style={{ color: "#601FEA" }} href="/">UCC leads</a>, <a style={{ color: "#601FEA" }} href="/aged-mca-leads/">aged MCA</a>, or <a style={{ color: "#601FEA" }} href="/mca-live-transfer-leads/">MCA live transfers</a>, we design each campaign to your specific business objectives. Our tried-and-true tactics and reliable data gathering keep you one step ahead in the competitive finance arena.
                            </p>

                        </div>

                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center px-10 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-fluid-sm transition-all duration-300 hover:-translate-y-1"
                        >
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStorySection;
