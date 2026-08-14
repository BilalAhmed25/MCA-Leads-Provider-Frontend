import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiChevronRight } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './Footer.css';

const Footer = () => {
    const { user, logout } = useAuth();

    return (
        <footer className="footer-section">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

            {/* Background Grid Lines starting from right and fading to left */}
            <div className="footer-vector-bg">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        {/* Grid Pattern definition */}
                        <pattern id="footer-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22d3ee" strokeWidth="1" />
                            <circle cx="0" cy="0" r="1.5" fill="#601fea" />
                        </pattern>

                        {/* Mask Gradient (Solid White on Right, Transparent Black/White on Left) */}
                        <linearGradient id="grid-mask-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.45" />
                        </linearGradient>

                        {/* Mask applying the gradient */}
                        <mask id="footer-grid-mask">
                            <rect width="100%" height="100%" fill="url(#grid-mask-gradient)" />
                        </mask>
                    </defs>

                    {/* Grid Rectangle using the pattern and mask */}
                    <rect width="100%" height="100%" fill="url(#footer-grid-pattern)" mask="url(#footer-grid-mask)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">
                <div className="footer-grid">
                    {/* Column 1: Brand Info */}
                    <div className="footer-col brand-col">
                        <Link to="/" className="footer-logo mb-6">
                            <img src="/logo.png" alt="MCA Leads Provider Logo" style={{ height: '50px', width: 'auto' }} />
                        </Link>
                        <p className="brand-desc text-slate-400 leading-relaxed">
                            With over 8+ years of expertise in the MCA leads generation, we deliver high-quality leads tailored to meet your exact needs.
                        </p>
                    </div>

                    {/* Column 2: Useful Links */}
                    <div className="footer-col links-col">
                        <p className="footer-title">Useful Links</p>
                        <ul className="footer-links">
                            <li><Link to="/"><FiChevronRight className="link-arrow" /> Home</Link></li>
                            <li><Link to="/about/"><FiChevronRight className="link-arrow" /> About Us</Link></li>
                            <li><Link to="/services/"><FiChevronRight className="link-arrow" /> Services</Link></li>
                            <li><Link to="/pricing/"><FiChevronRight className="link-arrow" /> Pricing</Link></li>
                            <li><Link to="/blog/"><FiChevronRight className="link-arrow" /> Blogs</Link></li>
                            <li><Link to="/contact-us/"><FiChevronRight className="link-arrow" /> Contact Us</Link></li>
                            {user ? (
                                <li>
                                    <button onClick={logout} className="text-red-400 hover:text-red-300 font-semibold cursor-pointer text-left flex items-center gap-1">
                                        <FiChevronRight className="link-arrow" /> Logout ({user.name})
                                    </button>
                                </li>
                            ) : (
                                <>
                                    <li><Link to="/login/"><FiChevronRight className="link-arrow" /> Login</Link></li>
                                    <li><Link to="/register/"><FiChevronRight className="link-arrow" /> Register</Link></li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* Column 3: Our Services */}
                    <div className="footer-col links-col">
                        <p className="footer-title">Our Services</p>
                        <ul className="footer-links">
                            <li><Link to="/mca-live-transfer-leads/"><FiChevronRight className="link-arrow" /> MCA Live Transfer Leads</Link></li>
                            <li><Link to="/mca-callback-leads/"><FiChevronRight className="link-arrow" /> MCA Callback Leads</Link></li>
                            <li><Link to="/aged-mca-leads/"><FiChevronRight className="link-arrow" /> Aged MCA Leads</Link></li>
                            <li><Link to="/b2b-email-lists/"><FiChevronRight className="link-arrow" /> MCA B2B Email Lists</Link></li>
                            <li><Link to="/digital-marketing-leads/"><FiChevronRight className="link-arrow" /> MCA Digital Marketing Leads</Link></li>
                            <li><Link to="/business-loan-leads/"><FiChevronRight className="link-arrow" /> Business Loan Leads</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Follow Us */}
                    <div className="footer-col follow-col">
                        <p className="footer-title">Follow</p>
                        <div className="social-links-list">
                            <a href="https://www.facebook.com/mcaleadsprovider" target="_blank" rel="noreferrer" className="social-item-row" aria-label="Facebook">
                                <div className="social-icon-box fb-box">
                                    <FaFacebookF />
                                </div>
                                <span className="social-label">Facebook</span>
                            </a>
                            <a href="https://www.instagram.com/mcaleadsprovider/" target="_blank" rel="noreferrer" className="social-item-row" aria-label="Instagram">
                                <div className="social-icon-box ig-box">
                                    <FaInstagram />
                                </div>
                                <span className="social-label">Instagram</span>
                            </a>
                            <a href="https://www.linkedin.com/company/mcaleadsprovider/" target="_blank" rel="noreferrer" className="social-item-row" aria-label="LinkedIn">
                                <div className="social-icon-box ln-box">
                                    <FaLinkedinIn />
                                </div>
                                <span className="social-label">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 5: Contact Us */}
                    <div className="footer-col contact-col">
                        <p className="footer-title">Contact Us</p>
                        <div className="contact-info-list">
                            <div className="contact-item">
                                <div className="icon-wrapper email-icon">
                                    <FiMail className="icon" />
                                </div>
                                <div className="contact-text">
                                    <h6 className="contact-label">Email</h6>
                                    <a href="mailto:info@mcaleadsprovider.com" className="contact-link">info@mcaleadsprovider.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-wrapper phone-icon">
                                    <FiPhone className="icon" />
                                </div>
                                <div className="contact-text">
                                    <h6 className="contact-label">Call us</h6>
                                    <a href="tel:3477849496" className="contact-link">347-784-9496</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-wrapper address-icon">
                                    <FiMapPin className="icon" />
                                </div>
                                <div className="contact-text">
                                    <h6 className="contact-label">Address</h6>
                                    <span className="contact-val">7901 4th St N STE 22726 St. Petersburg, FL 33702</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider & Copyright */}
                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <p className="copyright-text">
                        Copyright © 2026. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
