import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiPhone, FiMail, FiChevronDown, FiMenu, FiX, FiPlusCircle, FiRss, FiUserCheck, FiClock, FiShoppingCart, FiHeadphones, FiLogOut } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        setIsProfileOpen(false);
        logout();
    };

    const getUserInitial = () => {
        if (!user || !user.name) return 'Z';
        return user.name.trim().charAt(0).toUpperCase();
    };

    return (
        <div className="header-wrapper">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="top-bar-container">
                    <div className="top-bar-contact">
                        <a href="tel:3477849496" className="top-bar-link">
                            <FiPhone className="top-bar-icon" />
                            <span>347-784-9496</span>
                        </a>
                        <a href="mailto:info@mcaleadsprovider.com" className="top-bar-link">
                            <FiMail className="top-bar-icon" />
                            <span>info@mcaleadsprovider.com</span>
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
                                <NavLink to="/about/" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services/" className="nav-link">
                                    Services
                                    <FiChevronDown className="dropdown-icon" />
                                </NavLink>
                                {/* Dropdown Menu */}
                                <div className="dropdown-menu">
                                    <NavLink to="/mca-live-transfer-leads/" className="dropdown-item">MCA Live Transfer Leads</NavLink>
                                    <NavLink to="/mca-callback-leads/" className="dropdown-item">MCA Callback Leads</NavLink>
                                    <NavLink to="/aged-mca-leads/" className="dropdown-item">Aged MCA Leads</NavLink>
                                    <NavLink to="/business-loan-leads/" className="dropdown-item">Business Loan Leads</NavLink>
                                    <NavLink to="/digital-marketing-leads/" className="dropdown-item">MCA Digital Marketing Leads</NavLink>
                                    <NavLink to="/b2b-email-lists/" className="dropdown-item">B2B Email Leads</NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pricing/" className="nav-link">Pricing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blog/" className="nav-link">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact-us/" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* Right side controls: Profile Avatar Dropdown or CTA */}
                    <div className="header-right-actions flex items-center gap-4">
                        {user ? (
                            <div className="profile-dropdown-container relative" ref={profileRef}>
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="profile-avatar-btn flex items-center gap-1.5 focus:outline-none cursor-pointer"
                                    aria-label="User Profile"
                                >
                                    <div className="profile-avatar-circle flex items-center justify-center text-white font-extrabold shadow-md">
                                        {getUserInitial()}
                                    </div>
                                    <FiChevronDown className={`profile-chevron-icon transition-transform duration-200 text-slate-700 ${isProfileOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Profile Popover Menu */}
                                {isProfileOpen && (
                                    <div className="profile-popover-menu absolute right-0 top-full mt-3 w-80 bg-white rounded-3xl shadow-2xl border border-slate-100 py-6 px-5 z-50 animate-in fade-in zoom-in-95 duration-150">
                                        {/* User Info Header */}
                                        <div className="profile-header-info mb-4 pb-4 border-b border-slate-100 px-2">
                                            <h4 className="user-profile-name font-bold text-slate-900 text-base uppercase tracking-tight">
                                                {user.name || 'USER NAME'}
                                            </h4>
                                            <p className="user-profile-email text-xs text-slate-400 font-medium truncate mt-0.5">
                                                {user.email || 'user@example.com'}
                                            </p>
                                        </div>

                                        {/* Menu List */}
                                        <div className="profile-menu-items space-y-1">
                                            {user?.email === 'zunairkhan742@gmail.com' && (
                                                <>
                                                    <Link
                                                        to="/add-leads/"
                                                        onClick={() => setIsProfileOpen(false)}
                                                        className="profile-menu-item flex items-center gap-3.5 w-full text-left px-3 py-2.5 rounded-2xl hover:bg-slate-50 transition-colors text-slate-700 font-semibold text-sm"
                                                    >
                                                        <div className="menu-icon-box bg-slate-100 text-slate-600 p-2 rounded-xl">
                                                            <FiPlusCircle className="w-4 h-4" />
                                                        </div>
                                                        <span>Add Leads</span>
                                                    </Link>

                                                    <Link
                                                        to="/manage-blogs/"
                                                        onClick={() => setIsProfileOpen(false)}
                                                        className="profile-menu-item flex items-center gap-3.5 w-full text-left px-3 py-2.5 rounded-2xl hover:bg-slate-50 transition-colors text-slate-700 font-semibold text-sm"
                                                    >
                                                        <div className="menu-icon-box bg-slate-100 text-slate-600 p-2 rounded-xl">
                                                            <FiRss className="w-4 h-4" />
                                                        </div>
                                                        <span>Manage Blogs</span>
                                                    </Link>

                                                    <Link
                                                        to="/manage-users/"
                                                        onClick={() => setIsProfileOpen(false)}
                                                        className="profile-menu-item flex items-center gap-3.5 w-full text-left px-3 py-2.5 rounded-2xl hover:bg-slate-50 transition-colors text-slate-700 font-semibold text-sm"
                                                    >
                                                        <div className="menu-icon-box bg-slate-100 text-slate-600 p-2 rounded-xl">
                                                            <FiUserCheck className="w-4 h-4" />
                                                        </div>
                                                        <span>Manage Users</span>
                                                    </Link>
                                                </>
                                            )}

                                            <Link 
                                                to="/purchase-history/"
                                                onClick={() => setIsProfileOpen(false)}
                                                className="profile-menu-item flex items-center gap-3.5 w-full text-left px-3 py-2.5 rounded-2xl hover:bg-slate-50 transition-colors text-slate-700 font-semibold text-sm"
                                            >
                                                <div className="menu-icon-box bg-slate-100 text-slate-600 p-2 rounded-xl">
                                                    <FiClock className="w-4 h-4" />
                                                </div>
                                                <span>Purchase History</span>
                                            </Link>

                                            <Link 
                                                to="/checkout/"
                                                onClick={() => setIsProfileOpen(false)}
                                                className="profile-menu-item flex items-center gap-3.5 w-full text-left px-3 py-2.5 rounded-2xl hover:bg-slate-50 transition-colors text-slate-700 font-semibold text-sm"
                                            >
                                                <div className="menu-icon-box bg-slate-100 text-slate-600 p-2 rounded-xl">
                                                    <FiShoppingCart className="w-4 h-4" />
                                                </div>
                                                <span>My Leads / Checkout</span>
                                            </Link>
                                        </div>

                                        {/* Sign Out Button */}
                                        <div className="pt-4 mt-2 border-t border-slate-100">
                                            <button
                                                onClick={handleLogout}
                                                className="signout-btn flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-red-50 hover:bg-red-100 text-red-600 rounded-2xl font-extrabold text-sm transition-all duration-200"
                                            >
                                                <FiLogOut className="w-4 h-4" />
                                                <span>Sign Out</span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/contact-us/" className="cta-button">
                                Get your leads now
                            </Link>
                        )}

                        {/* Mobile Menu Button */}
                        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <FiX className="mobile-menu-icon" />
                            ) : (
                                <FiMenu className="mobile-menu-icon" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="mobile-nav">
                        <ul className="mobile-nav-list">
                            <li className="mobile-nav-item"><NavLink to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</NavLink></li>
                            <li className="mobile-nav-item"><NavLink to="/about/" className="mobile-nav-link" onClick={toggleMobileMenu}>About</NavLink></li>
                            <li className="mobile-nav-item"><NavLink to="/services/" className="mobile-nav-link" onClick={toggleMobileMenu}>Services</NavLink></li>
                            <li className="mobile-nav-item"><NavLink to="/pricing/" className="mobile-nav-link" onClick={toggleMobileMenu}>Pricing</NavLink></li>
                            <li className="mobile-nav-item"><NavLink to="/blog/" className="mobile-nav-link" onClick={toggleMobileMenu}>Blog</NavLink></li>
                            <li className="mobile-nav-item"><NavLink to="/contact-us/" className="mobile-nav-link" onClick={toggleMobileMenu}>Contact</NavLink></li>
                        </ul>
                        <Link to="/contact-us/" className="mobile-cta-button" onClick={toggleMobileMenu}>
                            Get your leads now
                        </Link>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;
