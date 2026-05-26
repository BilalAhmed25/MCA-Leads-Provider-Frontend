import { Link } from 'react-router-dom';
import { FiArrowLeft, FiLayers, FiTag, FiBookOpen, FiPhoneCall } from 'react-icons/fi';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound-container">
            {/* Ambient background glows */}
            <div className="notfound-glow-1"></div>
            <div className="notfound-glow-2"></div>

            <div className="notfound-content">
                {/* 404 Visual Indicator */}
                <div className="notfound-visual">
                    <h1 className="notfound-code">404</h1>
                    <span className="notfound-badge">Lost in Space</span>
                </div>

                <h2 className="notfound-title">Oops! Page Not Found</h2>
                <p className="notfound-description">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track!
                </p>

                <div className="notfound-actions">
                    {/* Primary Button */}
                    <Link to="/" className="notfound-primary-btn">
                        <FiArrowLeft className="btn-icon" /> Back to Home
                    </Link>

                    {/* Secondary Navigation Suggestions Grid */}
                    <div className="notfound-suggestions">
                        <h3 className="suggestions-title">Or visit one of our main sections</h3>
                        <div className="suggestions-grid">
                            <Link to="/services" className="suggestion-card">
                                <div className="suggestion-icon-wrapper">
                                    <FiLayers />
                                </div>
                                <div className="suggestion-info">
                                    <span className="suggestion-name">Our Services</span>
                                    <span className="suggestion-desc">Explore our live transfers, callbacks, and marketing.</span>
                                </div>
                            </Link>

                            <Link to="/pricing" className="suggestion-card">
                                <div className="suggestion-icon-wrapper">
                                    <FiTag />
                                </div>
                                <div className="suggestion-info">
                                    <span className="suggestion-name">Leads Pricing</span>
                                    <span className="suggestion-desc">View customized pricing packages for MCA leads.</span>
                                </div>
                            </Link>

                            <Link to="/blog" className="suggestion-card">
                                <div className="suggestion-icon-wrapper">
                                    <FiBookOpen />
                                </div>
                                <div className="suggestion-info">
                                    <span className="suggestion-name">Our Blog</span>
                                    <span className="suggestion-desc">Read current insights and cash advance growth tips.</span>
                                </div>
                            </Link>

                            <Link to="/contact" className="suggestion-card">
                                <div className="suggestion-icon-wrapper">
                                    <FiPhoneCall />
                                </div>
                                <div className="suggestion-info">
                                    <span className="suggestion-name">Contact Us</span>
                                    <span className="suggestion-desc">Get in touch with an expert cash advance specialist.</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
