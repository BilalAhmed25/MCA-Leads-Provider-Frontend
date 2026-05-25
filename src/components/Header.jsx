import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiPhone, FiMail, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="header-wrapper">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="top-bar-container">
                    <div className="top-bar-contact">
                        <a href="tel:3477849496" className="top-bar-link">
                            <FiPhone />
                            347-784-9496
                        </a>
                        <a href="mailto:info@mcaleadsprovider.com" className="top-bar-link">
                            <FiMail />
                            info@mcaleadsprovider.com
                        </a>
                    </div>
                    <div className="top-bar-socials">
                        <a href="https://www.facebook.com/mcaleadsprovider" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/mcaleadsprovider/" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/company/mcaleadsprovider/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="header-container">
                    {/* Logo */}
                    <Link to="/" className="logo">
                        <img src="/logo-black.png" alt="MCA Leads Provider Logo" className="logo-img" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link">
                                    Services
                                    <FiChevronDown className="dropdown-icon" />
                                </NavLink>
                                {/* Dropdown Menu */}
                                <div className="dropdown-menu">
                                    <Link to="/services" className="dropdown-item">MCA Leads</Link>
                                    <Link to="/services" className="dropdown-item">Aged Data</Link>
                                    <Link to="/services" className="dropdown-item">Live Transfers</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blog" className="nav-link">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* CTA Button */}
                    <Link to="/contact" className="cta-button">
                        Get your leads now
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            <FiX className="mobile-menu-icon" />
                        ) : (
                            <FiMenu className="mobile-menu-icon" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="mobile-nav">
                        <ul className="mobile-nav-list">
                            <li className="mobile-nav-item"><NavLink to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</NavLink></li>
                            <li className="mobile-nav-item"><NavLink to="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>About</NavLink></li>
                            <li className="mobile-nav-item"><NavLink to="/services" className="mobile-nav-link" onClick={toggleMobileMenu}>Services</NavLink></li>
                            <li className="mobile-nav-item"><NavLink to="/pricing" className="mobile-nav-link" onClick={toggleMobileMenu}>Pricing</NavLink></li>
                            <li className="mobile-nav-item"><NavLink to="/blog" className="mobile-nav-link" onClick={toggleMobileMenu}>Blog</NavLink></li>
                            <li className="mobile-nav-item"><NavLink to="/contact" className="mobile-nav-link" onClick={toggleMobileMenu}>Contact</NavLink></li>
                        </ul>
                        <Link to="/contact" className="mobile-cta-button" onClick={toggleMobileMenu}>
                            Get your leads now
                        </Link>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;
