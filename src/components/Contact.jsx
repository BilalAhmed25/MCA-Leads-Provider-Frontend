import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = ({ className = "" }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically integrate form submission logic
        alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
        setFormData({
            name: '',
            phone: '',
            email: '',
            subject: '',
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
                                Have questions about our MCA lead generation? Get in touch with our team of lead experts to find the perfect campaign for your funding targets.
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
                            <h2 className="contact-form-title">We'd Love to Hear from You</h2>

                            <form onSubmit={handleSubmit} className="contact-form-box">
                                <div className="form-fields-grid">
                                    <div className="form-field">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-field">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-field">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-field">
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-field full-width">
                                    <textarea
                                        name="message"
                                        placeholder="Example Text"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-submit-row">
                                    <button type="submit" className="contact-submit-btn">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                {/* Bottom Row: 3 Address Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8">
                    {/* Phone Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group border border-slate-100">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <FiPhone className="w-8 h-8" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Call Us</h4>
                        <a href="tel:3477849496" className="text-fluid-base text-slate-600 hover:text-primary transition-colors duration-300 font-medium">347-784-9496</a>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group border border-slate-100">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <FiMail className="w-8 h-8" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Email Us</h4>
                        <a href="mailto:info@mcaleadsprovider.com" className="text-fluid-base text-slate-600 hover:text-primary transition-colors duration-300 font-medium">info@mcaleadsprovider.com</a>
                    </div>

                    {/* Address Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group border border-slate-100">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <FiMapPin className="w-8 h-8" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Location</h4>
                        <span className="text-sm text-slate-600 leading-relaxed font-medium">
                            7901 4th St N STE 22726<br />St. Petersburg, FL 33702
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
