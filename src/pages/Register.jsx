import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { API_BASE_URL } from '../config';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (formData.password !== formData.confirmPassword) {
            return setError('Passwords do not match');
        }

        setLoading(true);

        try {
            const res = await fetch(`${API_BASE_URL}/noAuth/mca-register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await res.json();
            if (res.ok && data.success) {
                setSuccess('Account created successfully! Redirecting...');
                login(data.token, data.user);
                setTimeout(() => {
                    navigate('/');
                }, 800);
            } else {
                setError(data.message || 'Registration failed. Please try again.');
            }
        } catch (err) {
            console.error('Registration error:', err);
            setError('Unable to connect to server. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="auth-page">
            <div className="auth-container">
                <div className="auth-card shadow-2xl">
                    <div className="auth-header">
                        <span className="auth-badge">Get Started</span>
                        <h1 className="auth-title">Create your account</h1>
                        <p className="auth-subtitle">Join MCA Leads Provider to boost your funding revenue</p>
                    </div>

                    {error && <div className="auth-alert error-alert">{error}</div>}
                    {success && <div className="auth-alert success-alert flex items-center gap-2"><FiCheckCircle /> {success}</div>}

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="auth-input-group">
                            <label className="auth-label">Full Name</label>
                            <div className="auth-input-wrapper">
                                <FiUser className="auth-input-icon" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="auth-input"
                                />
                            </div>
                        </div>

                        <div className="auth-input-group">
                            <label className="auth-label">Email Address</label>
                            <div className="auth-input-wrapper">
                                <FiMail className="auth-input-icon" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="auth-input"
                                />
                            </div>
                        </div>

                        <div className="auth-input-group">
                            <label className="auth-label">Password</label>
                            <div className="auth-input-wrapper">
                                <FiLock className="auth-input-icon" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    minLength={6}
                                    className="auth-input"
                                />
                            </div>
                        </div>

                        <div className="auth-input-group">
                            <label className="auth-label">Confirm Password</label>
                            <div className="auth-input-wrapper">
                                <FiLock className="auth-input-icon" />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="••••••••"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="auth-input"
                                />
                            </div>
                        </div>

                        <button type="submit" disabled={loading} className="auth-submit-btn">
                            {loading ? 'Creating Account...' : (
                                <>
                                    Register Account <FiArrowRight className="inline ml-1" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="auth-footer">
                        Already have an account? <Link to="/login" className="auth-link">Log in</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;
