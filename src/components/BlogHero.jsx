import React from 'react';
import { Link } from 'react-router-dom';

const BlogHero = ({
    title = "Blogs",
    description = "Explore our latest industry insights, actionable MCA lead generation strategies, and expert guides to grow your funding business.",
    bgImage = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
}) => {
    return (
        <section className="pt-[130px] lg:pt-[160px] pb-6 bg-white">
            <div className="container-fluid">
                <div className="relative w-full py-16 lg:py-24 overflow-hidden bg-slate-950 text-white shadow-xl">
                    {/* Background Image with Dark Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={bgImage}
                            alt={title}
                            className="w-full h-full object-cover object-center opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center px-6">
                        {/* H1 Heading Centered */}
                        <h1 className="text-fluid-4xl lg:text-fluid-6xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
                            {title}
                        </h1>



                        {/* Centered Breadcrumbs at the Bottom */}
                        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium">
                            <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                                Home
                            </Link>
                            <span className="text-slate-400 text-xs">•</span>
                            <span className="text-primary font-semibold">Blogs</span>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
