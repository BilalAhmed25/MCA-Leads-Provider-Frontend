import { FiPhone, FiArrowRight, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './HomeHero.css';

const HomeHero = () => {
    return (
        <main className="relative w-full bg-slate-50 pt-[140px] pb-16 lg:pt-[180px] lg:pb-24 overflow-hidden home-hero">
            {/* Background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[800px] h-[400px] rounded-full bg-blue-300/20 blur-[150px]"></div>
            </div>

            <div className="container-custom relative z-10 flex flex-col gap-8">

                {/* Top Row: Text & Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text & Buttons */}
                    <div className="flex flex-col items-start text-left">
                        <h1 className="text-fluid-5xl lg:text-fluid-6xl font-extrabold text-slate-900 leading-[1.1] mb-5 tracking-tight">
                            Exclusive MCA Leads <br className="hidden lg:block" /> For Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Funding Business</span>
                        </h1>
                        <p className="text-fluid-lg text-slate-600 mb-8 leading-relaxed">
                            Finding the appropriate clients can make all the difference in how well your business runs. With high-quality MCA leads, you can connect with businesses that are constantly looking for finance options. These are not random connections; they are targeted candidates who are interested in merchant cash advance offerings, increasing your chances of conversion.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
                            <Link to="/contact" className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-fluid-base transition-all duration-300 hover:-translate-y-1">
                                Get your leads now
                            </Link>
                            <a href="tel:3477849496" className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-transparent border border-slate-300 hover:border-primary text-slate-800 hover:text-primary rounded-full font-bold text-fluid-base transition-all duration-300">
                                Call us
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Image & Floating Card */}
                    <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
                        <img
                            src="/hero_image.png"
                            alt="Business Professional"
                            className="w-full h-full object-cover"
                        />
                        {/* Floating Card (Glassmorphism effect) */}
                        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/40 min-w-[200px]">
                            <p className="text-sm text-slate-500 font-medium mb-1">Conversion Rate</p>
                            <p className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                                24.8% <FiTrendingUp className="text-green-500 text-lg" />
                            </p>
                            <div className="w-full h-12 mt-3 flex items-end gap-1">
                                <div className="w-1/5 bg-primary/20 h-[30%] rounded-t-sm"></div>
                                <div className="w-1/5 bg-primary/40 h-[50%] rounded-t-sm"></div>
                                <div className="w-1/5 bg-primary/60 h-[70%] rounded-t-sm"></div>
                                <div className="w-1/5 bg-primary/80 h-[90%] rounded-t-sm"></div>
                                <div className="w-1/5 bg-primary h-[100%] rounded-t-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 mt-4">

                    {/* Card 1: Large Dark Card */}
                    <div className="md:col-span-12 lg:col-span-7 bg-gradient-to-br from-dark to-dark-gradient rounded-3xl p-8 lg:p-10 text-white flex flex-col justify-center relative overflow-hidden">
                        {/* Decorative glow inside dark card */}
                        <div className="absolute right-0 top-0 w-64 h-64 bg-primary/30 blur-[80px] rounded-full mix-blend-screen"></div>

                        <h3 className="text-fluid-xl lg:text-fluid-2xl font-bold mb-3 z-10">High-Converting Prospects</h3>
                        <p className="text-fluid-sm lg:text-fluid-base text-white/80 leading-relaxed z-10">
                            We help you focus on leads that are more likely to convert, whether they are real-time merchant cash advance leads or leads with bank statements. By prioritizing reliable opportunities instead of cold lists, this supports the steady growth of your organization.
                        </p>
                    </div>

                    {/* Card 2: Light Tint Card */}
                    <div className="md:col-span-6 lg:col-span-3 bg-primary-light rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                        <div className="flex items-center justify-center mb-4">
                            <FiCheckCircle className="w-12 h-12 text-primary" />
                        </div>
                        <h3 className="text-fluid-4xl font-extrabold text-primary mb-2">10K+</h3>
                        <p className="text-fluid-base text-slate-700 font-medium">Leads Delivered</p>
                    </div>

                    {/* Card 3: Primary Color Card */}
                    <div className="md:col-span-6 lg:col-span-2 bg-primary rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white">
                        <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center mb-4">
                            <FiTrendingUp className="text-2xl text-white" />
                        </div>
                        <h3 className="text-fluid-3xl font-bold mb-1">95%</h3>
                        <p className="text-fluid-xs text-white/80">Client Retention</p>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default HomeHero;
