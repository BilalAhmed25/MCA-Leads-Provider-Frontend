import React from 'react';
import { Link } from 'react-router-dom';

const DriveResultsSection = ({
    title = "Merchant Cash Advance Leads That Drive Results",
    paragraphs = [
        "Our focus is to help you spend less time on cold outreach by providing you with exclusive data and real-time merchant cash advance leads that are relevant to your target audience.",
        "Our accuracy and reliability are our strongest points. We offer reliable leads for MCA firms that increase closing rates and promote consistent growth, whether you're looking for working capital leads, UCC data, or leads for MCA. In a fiercely competitive market, you keep one step ahead with our committed support and prompt delivery.",
        "Our merchant cash advance leads provide accuracy, timeliness, and relevancy, regardless of your level of experience as a lender."
    ],
    buttonText,
    buttonLink
}) => {
    return (
        <section className="bg-white py-12 lg:py-10 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

                    {/* Left: Text Card */}
                    <div className="bg-primary text-white p-8 lg:p-12 xl:p-16 rounded-[2rem] flex flex-col justify-center shadow-lg">
                        <h2 className="text-fluid-2xl lg:text-fluid-4xl font-extrabold mb-6 leading-tight">
                            {title}
                        </h2>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className={`text-fluid-base text-white/90 leading-relaxed ${index !== paragraphs.length - 1 ? 'mb-5' : ''}`}>
                                {paragraph}
                            </p>
                        ))}
                        {buttonText && buttonLink && (
                            <div className="mt-8">
                                <Link 
                                    to={buttonLink} 
                                    className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary hover:bg-slate-100 rounded-full font-bold text-fluid-sm transition-all duration-300 shadow-md"
                                >
                                    {buttonText}
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Right: Image */}
                    <div className="w-full h-full min-h-[300px] lg:min-h-full rounded-[2rem] overflow-hidden bg-slate-200 shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Diverse team of professionals"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DriveResultsSection;
