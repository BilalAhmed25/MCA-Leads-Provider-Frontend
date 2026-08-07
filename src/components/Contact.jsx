import { useState, useRef, useEffect } from 'react';
import { FiPhone, FiMail, FiMapPin, FiUser, FiBarChart2, FiCalendar, FiClock, FiMessageSquare, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const LEAD_TYPE_OPTIONS = [
    "Realtime MCA Live Transfer Leads",
    "Realtime MCA Callback Leads",
    "Aged MCA Leads",
    "Digital Marketing Leads",
    "B2B Email Lists",
    "Exclusive MCA Leads",
    "MCA Leads with Bank Statements"
];

const Contact = ({ className = "" }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        leadType: '',
        preferredDate: '',
        preferredTimeHour: '09',
        preferredTimeMinute: '00',
        preferredTimeAmPm: 'AM',
        message: ''
    });

    const [isLeadTypeOpen, setIsLeadTypeOpen] = useState(false);
    const leadTypeRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (leadTypeRef.current && !leadTypeRef.current.contains(event.target)) {
                setIsLeadTypeOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
        setFormData({
            name: '',
            phone: '',
            email: '',
            leadType: '',
            preferredDate: '',
            preferredTimeHour: '09',
            preferredTimeMinute: '00',
            preferredTimeAmPm: 'AM',
            message: ''
        });
    };

    return (
        <section className={`contact-section ${className}`} id="contact">
            <div className="container-custom">
                <div className="contact-wrapper-card">
                    <div className="contact-grid">

                        {/* Left Column: Image, Info & Socials */}
                        <div className="contact-info-panel">
                            <div className="contact-image-container">
                                <img
                                    src="/contact_presenter.png"
                                    alt="Business meeting presentation"
                                    className="contact-image"
                                />
                            </div>
                            <p className="contact-info-desc">
                                Let’s explore possibilities together – your success is just a conversation away.
                            </p>

                            <div className="contact-social-section">
                                <span className="social-section-title">Follow Our Social Account :</span>
                                <div className="contact-social-icons">
                                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="Twitter">
                                        <FaTwitter />
                                    </a>
                                    <a href="https://www.linkedin.com/company/mcaleadsprovider/" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="LinkedIn">
                                        <FaLinkedinIn />
                                    </a>
                                    <a href="https://www.instagram.com/mcaleadsprovider/" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="Instagram">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Title and Form */}
                        <div className="contact-form-panel">
                            <h6 className="contact-form-title">Get In Contact For a Free Consultation!</h6>

                            <form onSubmit={handleSubmit} className="bg-slate-50/70 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm w-full">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    {/* Your Name */}
                                    <div className="relative flex items-center gap-3 px-4 py-3.5 bg-white border border-slate-300 hover:border-slate-400 rounded-2xl shadow-sm focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-200">
                                        <FiUser className="w-5 h-5 text-slate-400 shrink-0" />
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-transparent border-none outline-none text-sm text-slate-800 placeholder-slate-400 focus:ring-0 p-0"
                                        />
                                    </div>

                                    {/* Your Email */}
                                    <div className="relative flex items-center gap-3 px-4 py-3.5 bg-white border border-slate-300 hover:border-slate-400 rounded-2xl shadow-sm focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-200">
                                        <FiMail className="w-5 h-5 text-slate-400 shrink-0" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-transparent border-none outline-none text-sm text-slate-800 placeholder-slate-400 focus:ring-0 p-0"
                                        />
                                    </div>

                                    {/* Your Phone */}
                                    <div className="relative flex items-center gap-3 px-4 py-3.5 bg-white border border-slate-300 hover:border-slate-400 rounded-2xl shadow-sm focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-200">
                                        <FiPhone className="w-5 h-5 text-slate-400 shrink-0" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Your Phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-none outline-none text-sm text-slate-800 placeholder-slate-400 focus:ring-0 p-0"
                                        />
                                    </div>

                                    {/* Lead Type Custom Dropdown */}
                                    <div
                                        ref={leadTypeRef}
                                        className="relative flex items-center gap-3 px-4 py-2 bg-white border border-slate-300 hover:border-slate-400 rounded-2xl shadow-sm focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-200 cursor-pointer select-none"
                                        onClick={() => setIsLeadTypeOpen(!isLeadTypeOpen)}
                                    >
                                        <FiBarChart2 className="w-5 h-5 text-slate-400 shrink-0" />
                                        <div className="flex flex-col w-full overflow-hidden">
                                            <label className="text-[11px] font-semibold text-primary cursor-pointer">Lead Type</label>
                                            <span className={`text-sm font-medium truncate ${formData.leadType ? 'text-slate-800' : 'text-slate-400'}`}>
                                                {formData.leadType || "Select Lead Type"}
                                            </span>
                                        </div>
                                        {isLeadTypeOpen ? (
                                            <FiChevronUp className="w-4 h-4 text-primary shrink-0 transition-transform" />
                                        ) : (
                                            <FiChevronDown className="w-4 h-4 text-slate-400 shrink-0 transition-transform" />
                                        )}

                                        {/* Custom Options Popover */}
                                        {isLeadTypeOpen && (
                                            <div className="absolute top-[calc(100%+8px)] left-0 right-[calc(-150px)] sm:right-0 z-50 bg-white border border-slate-200 rounded-2xl shadow-2xl py-2 max-h-64 overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
                                                {LEAD_TYPE_OPTIONS.map((option) => {
                                                    const isSelected = formData.leadType === option;
                                                    return (
                                                        <div
                                                            key={option}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setFormData(prev => ({ ...prev, leadType: option }));
                                                                setIsLeadTypeOpen(false);
                                                            }}
                                                            className={`px-5 py-3 text-sm cursor-pointer transition-colors duration-150 font-medium ${isSelected
                                                                    ? 'bg-blue-50 text-primary font-semibold'
                                                                    : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
                                                                }`}
                                                        >
                                                            {option}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>

                                    {/* Preferred Date */}
                                    <div className="relative flex items-center gap-3 px-4 py-2 bg-white border border-slate-300 hover:border-slate-400 rounded-2xl shadow-sm focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-200">
                                        <FiCalendar className="w-5 h-5 text-slate-400 shrink-0" />
                                        <div className="flex flex-col w-full">
                                            <label className="text-[11px] font-semibold text-primary">Preferred Date</label>
                                            <input
                                                type="date"
                                                name="preferredDate"
                                                value={formData.preferredDate}
                                                onChange={handleChange}
                                                className="bg-transparent border-none outline-none text-sm text-slate-800 p-0 focus:ring-0 cursor-pointer w-full"
                                            />
                                        </div>
                                    </div>

                                    {/* Preferred Time */}
                                    <div className="relative flex items-center gap-3 px-4 py-2 bg-white border border-slate-300 hover:border-slate-400 rounded-2xl shadow-sm focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-200">
                                        <FiClock className="w-5 h-5 text-slate-400 shrink-0" />
                                        <div className="flex flex-col w-full">
                                            <label className="text-[11px] font-semibold text-primary">
                                                Preferred Time <span className="text-red-500">*</span>
                                            </label>
                                            <div className="flex items-center gap-1.5 text-sm text-slate-800 font-medium">
                                                <select
                                                    name="preferredTimeHour"
                                                    value={formData.preferredTimeHour}
                                                    onChange={handleChange}
                                                    className="bg-transparent border-none outline-none p-0 text-sm font-medium text-slate-800 cursor-pointer focus:ring-0"
                                                >
                                                    {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0')).map(h => (
                                                        <option key={h} value={h}>{h}</option>
                                                    ))}
                                                </select>
                                                <span className="text-slate-400 font-bold">:</span>
                                                <select
                                                    name="preferredTimeMinute"
                                                    value={formData.preferredTimeMinute}
                                                    onChange={handleChange}
                                                    className="bg-transparent border-none outline-none p-0 text-sm font-medium text-slate-800 cursor-pointer focus:ring-0"
                                                >
                                                    {['00', '15', '30', '45'].map(m => (
                                                        <option key={m} value={m}>{m}</option>
                                                    ))}
                                                </select>
                                                <select
                                                    name="preferredTimeAmPm"
                                                    value={formData.preferredTimeAmPm}
                                                    onChange={handleChange}
                                                    className="ml-1.5 bg-primary text-white text-xs font-bold px-2.5 py-0.5 rounded-full border-none outline-none cursor-pointer hover:bg-primary-hover transition-colors"
                                                >
                                                    <option value="AM">AM</option>
                                                    <option value="PM">PM</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message (Full Width) */}
                                    <div className="sm:col-span-2 relative flex items-start gap-3 px-4 py-3 bg-white border border-slate-300 hover:border-slate-400 rounded-2xl shadow-sm focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-200">
                                        <FiMessageSquare className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-transparent border-none outline-none text-sm text-slate-800 placeholder-slate-400 resize-y focus:ring-0 p-0"
                                        ></textarea>
                                    </div>

                                </div>

                                <div className="mt-6 flex justify-start">
                                    <button
                                        type="submit"
                                        className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                    {/* Bottom Row: 3 Address Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-18">
                        {/* Phone Card */}
                        <div className="bg-slate-50/50 rounded-2xl p-5 hover:bg-white transition-all duration-300 flex items-center gap-4 group border border-slate-200/60 hover:border-primary/30">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <FiPhone className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-slate-900 mb-0.5">Call Us</p>
                                <a href="tel:3477849496" className="text-sm text-slate-600 hover:text-primary transition-colors duration-300 font-medium">347-784-9496</a>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-slate-50/50 rounded-2xl p-5 hover:bg-white transition-all duration-300 flex items-center gap-4 group border border-slate-200/60 hover:border-primary/30">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <FiMail className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-slate-900 mb-0.5">Email Us</p>
                                <a href="mailto:info@mcaleadsprovider.com" className="text-sm text-slate-600 hover:text-primary transition-colors duration-300 font-medium break-all">info@mcaleadsprovider.com</a>
                            </div>
                        </div>

                        {/* Address Card */}
                        <div className="bg-slate-50/50 rounded-2xl p-5 hover:bg-white transition-all duration-300 flex items-center gap-4 group border border-slate-200/60 hover:border-primary/30">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <FiMapPin className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-slate-900 mb-0.5">Location</p>
                                <span className="text-sm text-slate-600 leading-snug font-medium block">
                                    7901 4th St N STE 22726 St. Petersburg, FL 33702
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
