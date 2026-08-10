import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhoneCall, FiSend } from 'react-icons/fi';

const LiveTransfersCTA = ({
    heading = (
        <>
            Give Us a Call and<br className="hidden sm:inline" /> Let’s Discuss Leads Today!
        </>
    ),
    phone = "3477849496",
    callText = "CALL NOW",
    buttonText = "GET YOUR LEADS",
    buttonLink = "/contact-us/",
    showIcon = false,
    className = "pb-20 lg:pb-28 pt-4 bg-white relative overflow-hidden"
}) => {
    return (
        <section className={className}>
            <div className="container-custom relative z-10">
                <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#8B61FF] via-[#646BF6] to-[#3E7DF6] p-6 sm:p-8 md:p-10 lg:px-14 lg:py-10 shadow-xl shadow-indigo-500/15">
                    {/* Hexagon Pattern Overlay */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                            <defs>
                                <pattern id="cta-hex-grid" width="56" height="97" patternUnits="userSpaceOnUse">
                                    <path
                                        d="M28 0 L56 16.166 L56 48.5 L28 64.666 L0 48.5 L0 16.166 Z M28 97 L56 80.834 L56 48.5 L28 64.666 L0 48.5 L0 80.834 Z"
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="1.2"
                                    />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#cta-hex-grid)" />
                        </svg>
                    </div>

                    {/* Ambient Glows */}
                    <div className="absolute -top-24 -left-24 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-blue-400/20 rounded-full blur-2xl pointer-events-none"></div>

                    {/* Content Layout */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-10">
                        {/* Heading */}
                        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-white leading-snug sm:leading-tight text-center md:text-left tracking-tight max-w-xl">
                            {heading}
                        </h4>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
                            <a
                                href={`tel:${phone}`}
                                className="w-full sm:w-auto inline-flex items-center justify-center h-12 sm:h-[52px] px-6 sm:px-8 rounded-full bg-black hover:bg-[#1e1e1e] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 box-border leading-none"
                            >
                                {callText}
                            </a>
                            <Link
                                to={buttonLink}
                                className="w-full sm:w-auto inline-flex items-center justify-center h-12 sm:h-[52px] px-6 sm:px-8 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 gap-2.5 box-border leading-none"
                            >
                                {showIcon && (
                                    <span className="w-6 h-6 rounded-full bg-[#646BF6] text-white flex items-center justify-center text-xs shrink-0 shadow-xs">
                                        <FiSend className="w-3 h-3 translate-x-[-0.5px]" />
                                    </span>
                                )}
                                <span>{buttonText}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveTransfersCTA;
