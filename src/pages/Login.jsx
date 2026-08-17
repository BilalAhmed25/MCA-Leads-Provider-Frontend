import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { API_BASE_URL } from '../config';
import { useAuth } from '../context/AuthContext';
import { useNoIndex } from '../hooks/useNoIndex';
import './Auth.css';

const Login = () => {
    useNoIndex();
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const searchParams = new URLSearchParams(location.search);
    const redirectParam = searchParams.get('redirect') || localStorage.getItem('mca_redirect_after_login') || '/';

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            const res = await fetch(`${API_BASE_URL}/noAuth/mca-login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (res.ok && data.success) {
                setSuccess('Login successful! Redirecting...');
                login(data.token, data.user);
                localStorage.removeItem('mca_redirect_after_login');
                setTimeout(() => {
                    navigate(redirectParam);
                }, 700);
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            console.error('Login error:', err);
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
                        <span className="auth-badge">Welcome Back</span>
                        <h1 className="auth-title">Log in to your account</h1>
                        <p className="auth-subtitle">Access your exclusive MCA leads dashboard & services</p>
                    </div>

                    {error && <div className="auth-alert error-alert">{error}</div>}
                    {success && <div className="auth-alert success-alert flex items-center gap-2"><FiCheckCircle /> {success}</div>}

                    <form onSubmit={handleSubmit} className="auth-form">
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
                                    className="auth-input"
                                />
                            </div>
                        </div>

                        <button type="submit" disabled={loading} className="auth-submit-btn">
                            {loading ? 'Logging in...' : (
                                <>
                                    Log In <FiArrowRight className="inline ml-1" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="auth-footer">
                        Don't have an account? <Link to="/register" className="auth-link">Sign Up Now</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
