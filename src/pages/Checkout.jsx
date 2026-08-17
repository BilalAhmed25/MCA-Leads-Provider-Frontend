import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
    FiShoppingCart, 
    FiUser, 
    FiMail, 
    FiCheckCircle, 
    FiTrash2, 
    FiArrowLeft, 
    FiArrowRight, 
    FiShield, 
    FiLoader, 
    FiDatabase
} from 'react-icons/fi';
import Swal from 'sweetalert2';
import BlogHero from '../components/BlogHero';
import { useAuth } from '../context/AuthContext';
import { useNoIndex } from '../hooks/useNoIndex';
import { API_BASE_URL } from '../config';
import './Checkout.css';

const Checkout = () => {
    useNoIndex();
    const navigate = useNavigate();
    const location = useLocation();
    const { user, token } = useAuth();

    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [contactPhone, setContactPhone] = useState('');
    const [notes, setNotes] = useState('');

    // Auth & Cart Check on mount
    useEffect(() => {
        // Enforce login requirement
        const token = localStorage.getItem('mca_token');
        const storedUser = localStorage.getItem('mca_user');

        if (!user && !token && !storedUser) {
            localStorage.setItem('mca_redirect_after_login', '/checkout/');
            Swal.fire({
                icon: 'info',
                title: 'Login Required',
                text: 'You must be logged in to access the Checkout page. Please log in or create an account.',
                confirmButtonColor: '#601FEA',
                confirmButtonText: 'Go to Login'
            }).then(() => {
                navigate('/login/?redirect=/checkout/');
            });
            setLoading(false);
            return;
        }

        const searchParams = new URLSearchParams(location.search);
        if (searchParams.get('canceled') === 'true' || searchParams.get('cancelled') === 'true') {
            Swal.fire({
                icon: 'warning',
                title: 'Payment Cancelled',
                text: 'Your payment was not completed. Your selected lead datasets remain safely saved in your cart.',
                confirmButtonColor: '#601FEA',
                confirmButtonText: 'Back to Checkout'
            });
        }

        const loadCart = () => {
            const rawCart = localStorage.getItem('mca_checkout_cart');
            if (rawCart) {
                try {
                    const parsed = JSON.parse(rawCart);
                    // Check if cart is expired (24 hours expiry)
                    if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
                        localStorage.removeItem('mca_checkout_cart');
                        setCart(null);
                    } else {
                        setCart(parsed);
                    }
                } catch (e) {
                    console.error("Failed to parse cart:", e);
                    setCart(null);
                }
            } else {
                setCart(null);
            }
            setLoading(false);
        };

        loadCart();
    }, [user, location.search, navigate]);

    // Remove single item from cart
    const handleRemoveItem = (itemId) => {
        if (!cart || !cart.items) return;
        const updatedItems = cart.items.filter(item => item.id !== itemId);
        if (updatedItems.length === 0) {
            localStorage.removeItem('mca_checkout_cart');
            setCart(null);
            return;
        }

        const newGrandTotal = updatedItems.reduce((sum, item) => sum + (parseFloat(item.total) || 0), 0);
        const updatedCart = {
            ...cart,
            items: updatedItems,
            grandTotal: newGrandTotal
        };

        localStorage.setItem('mca_checkout_cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    // Clear entire cart
    const handleClearCart = () => {
        localStorage.removeItem('mca_checkout_cart');
        setCart(null);
    };

    // Finalize / Place Order (Redirects to Stripe Checkout)
    const handlePlaceOrder = async () => {
        if (!user) {
            localStorage.setItem('mca_redirect_after_login', '/checkout/');
            navigate('/login/?redirect=/checkout/');
            return;
        }

        if (!cart || !cart.items || cart.items.length === 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Cart is Empty',
                text: 'Please select leads from the Pricing page first.'
            });
            return;
        }

        // Enforce $500 minimum order requirement
        if (parseFloat(cart.grandTotal || 0) < 500) {
            Swal.fire({
                icon: 'warning',
                title: 'Minimum Order: $500',
                text: `Your current order total is $${parseFloat(cart.grandTotal).toFixed(2)}. Please add more leads on the Pricing page to meet the minimum $500 requirement.`,
                confirmButtonText: 'Back to Pricing',
                confirmButtonColor: '#601FEA'
            }).then(() => {
                navigate('/pricing/');
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const payload = {
                items: cart.items,
                user_email: user.email || '',
                user_name: user.name || '',
                customer_phone: contactPhone || '',
                notes: notes || '',
                origin: window.location.origin
            };

            const res = await fetch(`${API_BASE_URL}/noAuth/mca-leads/create-stripe-session`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            if (data.success && data.url) {
                // Redirect user to Stripe Checkout hosted payment page
                window.location.href = data.url;
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Payment Error',
                    text: data.message || 'Failed to initialize Stripe checkout session.'
                });
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error("Order error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Submission Error',
                text: 'Failed to initiate secure Stripe checkout session. Please try again.'
            });
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return (
            <main className="checkout-page-wrapper flex items-center justify-center p-20">
                <div className="text-center text-slate-400 flex flex-col items-center gap-3">
                    <FiLoader className="spinner-icon text-3xl text-purple-600" />
                    <span>Loading your checkout summary...</span>
                </div>
            </main>
        );
    }

    if (!user && !localStorage.getItem('mca_token')) {
        return (
            <main>
                <BlogHero
                    title="Checkout"
                    breadcrumb="Checkout"
                    description="Please log in or register to finalize your MCA leads order."
                />
                <div className="container-custom py-20 text-center">
                    <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mx-auto mb-4">
                            <FiUser />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-2">Login Required</h2>
                        <p className="text-sm text-slate-500 mb-6">
                            You must be logged in to view and complete your lead purchase checkout.
                        </p>
                        <Link to="/login/?redirect=/checkout/" className="btn-place-order max-w-xs mx-auto">
                            <span>Go to Login</span>
                            <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main>
            <BlogHero
                title="Checkout"
                breadcrumb="Checkout"
                description="Review your selected lead records and finalize dataset delivery. Your selections are safely preserved across your session."
                bgImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="checkout-page-wrapper">
                <div className="container-custom">
                    {!cart || !cart.items || cart.items.length === 0 ? (
                        <div className="empty-cart-state">
                            <div className="empty-cart-icon-box">
                                <FiShoppingCart />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 mb-2">Your Lead Cart is Empty</h2>
                            <p className="text-sm text-slate-500 mb-6">
                                You have not selected any lead records yet. Browse our inventory to choose and configure datasets.
                            </p>
                            <Link to="/pricing/" className="btn-place-order max-w-xs mx-auto">
                                <FiArrowLeft />
                                <span>Browse Pricing Inventory</span>
                            </Link>
                        </div>
                    ) : (
                        <div className="checkout-grid-layout">
                            {/* Left Column: Selected Items & Customer Details */}
                            <div>
                                {/* 1. Itemized Dataset Table Card */}
                                <div className="checkout-card">
                                    <div className="checkout-card-header">
                                        <div className="checkout-card-title-flex">
                                            <div className="checkout-icon-badge">
                                                <FiDatabase />
                                            </div>
                                            <div>
                                                <h2 className="checkout-card-title">Selected MCA Lead Datasets</h2>
                                                <p className="text-xs text-slate-400 mt-0.5">
                                                    {cart.items.length} listing{cart.items.length > 1 ? 's' : ''} in cart
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleClearCart}
                                            className="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1"
                                        >
                                            <FiTrash2 />
                                            <span>Clear All</span>
                                        </button>
                                    </div>

                                    <div className="checkout-table-wrapper">
                                        <table className="checkout-table">
                                            <thead>
                                                <tr>
                                                    <th>DATASET</th>
                                                    <th className="text-center">QUANTITY</th>
                                                    <th>UNIT PRICE</th>
                                                    <th>SUBTOTAL</th>
                                                    <th className="text-right">REMOVE</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.items.map((item) => (
                                                    <tr key={item.id}>
                                                        <td>
                                                            <div className="checkout-item-title">{item.name}</div>
                                                            <span className="checkout-item-cat">{item.category || 'MCA Leads'}</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="checkout-qty-badge">
                                                                {Number(item.quantity).toLocaleString()} leads
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="checkout-price-unit">
                                                                ${parseFloat(item.price || 0).toFixed(2)}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="checkout-price-total">
                                                                ${parseFloat(item.total || 0).toFixed(2)}
                                                            </span>
                                                        </td>
                                                        <td className="text-right">
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemoveItem(item.id)}
                                                                className="w-8 h-8 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 inline-flex items-center justify-center transition-colors"
                                                                title="Remove Item"
                                                            >
                                                                <FiTrash2 />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* 2. Delivery & Customer Contact Information */}
                                <div className="checkout-card">
                                    <div className="checkout-card-header">
                                        <div className="checkout-card-title-flex">
                                            <div className="checkout-icon-badge">
                                                <FiUser />
                                            </div>
                                            <div>
                                                <h2 className="checkout-card-title">Delivery & Contact Information</h2>
                                                <p className="text-xs text-slate-400 mt-0.5">
                                                    Lead export files and validation hashes will be sent to this account
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                                                Account Name
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 outline-none"
                                                value={user?.name || 'Verified Customer'}
                                                readOnly
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                                                Delivery Email
                                            </label>
                                            <input
                                                type="email"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 outline-none"
                                                value={user?.email || ''}
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                                                Contact Phone Number (Optional)
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:border-purple-600 outline-none"
                                                placeholder="(555) 000-0000"
                                                value={contactPhone}
                                                onChange={(e) => setContactPhone(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                                                Order Notes / Specific Filter Requirements
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:border-purple-600 outline-none"
                                                placeholder="e.g. Exclude California, minimum $50k revenue"
                                                value={notes}
                                                onChange={(e) => setNotes(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Order Summary Sidebar */}
                            <div>
                                <div className="checkout-summary-card">
                                    <h3 className="text-lg font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                                        Order Summary
                                    </h3>

                                    <div className="summary-row">
                                        <span>Total Records:</span>
                                        <span className="font-bold text-slate-900">
                                            {cart.items.reduce((s, i) => s + (parseInt(i.quantity) || 0), 0).toLocaleString()} leads
                                        </span>
                                    </div>

                                    <div className="summary-row">
                                        <span>Subtotal:</span>
                                        <span className="font-bold text-slate-900">
                                            ${parseFloat(cart.grandTotal || 0).toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="summary-row">
                                        <span>Data Verification Fee:</span>
                                        <span className="text-emerald-600 font-bold">FREE ($0.00)</span>
                                    </div>

                                    <div className="summary-divider" />

                                    <div className="summary-total-row">
                                        <span className="summary-total-label">Grand Total:</span>
                                        <span className="summary-total-value">
                                            ${parseFloat(cart.grandTotal || 0).toFixed(2)}
                                        </span>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn-place-order"
                                        onClick={handlePlaceOrder}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <FiLoader className="spinner-icon" />
                                                <span>Finalizing Order...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Place Leads Order</span>
                                                <FiArrowRight />
                                            </>
                                        )}
                                    </button>

                                    <Link to="/pricing/" className="btn-back-pricing">
                                        <FiArrowLeft />
                                        <span>Modify Quantities on Pricing Page</span>
                                    </Link>

                                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
                                        <FiShield className="text-purple-600" />
                                        <span>Encrypted & TCPA Compliant Delivery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Checkout;
