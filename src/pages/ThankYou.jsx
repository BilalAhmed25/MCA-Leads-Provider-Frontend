import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
    FiCheckCircle, 
    FiDownload, 
    FiFileText, 
    FiArrowRight, 
    FiShield, 
    FiLoader, 
    FiDatabase,
    FiUser,
    FiDollarSign
} from 'react-icons/fi';
import BlogHero from '../components/BlogHero';
import { useNoIndex } from '../hooks/useNoIndex';
import { API_BASE_URL } from '../config';
import './ThankYou.css';

const ThankYou = () => {
    useNoIndex();
    const location = useLocation();
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const searchParams = new URLSearchParams(location.search);
    const sessionId = searchParams.get('session_id');

    useEffect(() => {
        // Clear stored cart on payment confirmation
        localStorage.removeItem('mca_checkout_cart');
        localStorage.removeItem('mca_redirect_after_login');

        if (!sessionId) {
            setLoading(false);
            setError('No payment session reference found. If you completed a purchase, please check your email.');
            return;
        }

        const verifyOrder = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/noAuth/mca-leads/verify-order/${sessionId}`);
                const data = await res.json();
                if (data.success) {
                    setOrderData(data);
                } else {
                    setError(data.message || 'Could not verify payment session.');
                }
            } catch (err) {
                console.error("Order verification error:", err);
                setError('Failed to contact verification server.');
            } finally {
                setLoading(false);
            }
        };

        verifyOrder();
    }, [sessionId]);

    if (loading) {
        return (
            <main>
                <BlogHero
                    title="Verifying Payment..."
                    breadcrumb="Verification"
                    description="Please wait while we verify your transaction and prepare your lead download package."
                />
                <div className="p-24 text-center text-slate-500 flex flex-col items-center gap-3">
                    <FiLoader className="spinner-icon text-4xl text-purple-600" />
                    <span className="font-bold text-lg text-slate-700">Verifying secure payment session...</span>
                </div>
            </main>
        );
    }

    if (error || !orderData) {
        return (
            <main>
                <BlogHero
                    title="Order Confirmation"
                    breadcrumb="Order Status"
                    description="Thank you for visiting MCA Leads Provider. Review your order status below."
                />
                <div className="container-custom py-16 text-center">
                    <div className="max-w-lg mx-auto bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mx-auto mb-4">
                            <FiShield />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-2">Order Status Notice</h2>
                        <p className="text-sm text-slate-500 mb-6">{error || 'Order details are currently unavailable.'}</p>
                        <Link to="/pricing/" className="btn-place-order max-w-xs mx-auto">
                            <span>Browse Leads Pricing</span>
                            <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    const { session, items = [], records = [] } = orderData;
    const downloadExcelUrl = `${API_BASE_URL}/noAuth/mca-leads/download-leads/${sessionId}?format=excel`;

    return (
        <main>
            <BlogHero
                title="Payment Successful!"
                breadcrumb="Thank You"
                description="Your transaction was processed securely. Your verified MCA lead files are ready for instant download below."
                bgImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="thank-you-page-wrapper">
                <div className="container-custom">
                    {/* Top Hero Confirmation Card */}
                    <div className="thank-you-hero-card">
                        <div className="success-icon-badge">
                            <FiCheckCircle />
                        </div>
                        <h1 className="thank-you-main-heading">Thank You for Your Order!</h1>
                        <p className="thank-you-subheading">
                            Your payment has been approved and your lead dataset manifest is packaged. Click below to download your complete database file in Excel (.xlsx) format.
                        </p>

                        {/* Download Buttons Action Row */}
                        <div className="flex justify-center mt-6">
                            <a 
                                href={downloadExcelUrl} 
                                className="btn-download-excel"
                                style={{ maxWidth: '420px', width: '100%', justifyContent: 'center' }}
                                download
                            >
                                <FiDownload className="text-xl" />
                                <span>Download Leads (Excel .XLSX)</span>
                            </a>
                        </div>
                    </div>

                    {/* Order Details & Summary Card */}
                    <div className="thank-you-card">
                        <h2 className="text-xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                            <FiShield className="text-purple-600" />
                            <span>Transaction & Delivery Summary</span>
                        </h2>

                        <div className="order-details-grid">
                            <div className="order-detail-item">
                                <span className="order-detail-label">Payment Status</span>
                                <span className="order-detail-value paid-pill">
                                    <FiCheckCircle /> {session.payment_status?.toUpperCase() || 'PAID'}
                                </span>
                            </div>

                            <div className="order-detail-item">
                                <span className="order-detail-label">Total Amount Paid</span>
                                <span className="order-detail-value text-purple-700">
                                    ${session.amount_total} {session.currency?.toUpperCase() || 'USD'}
                                </span>
                            </div>

                            <div className="order-detail-item">
                                <span className="order-detail-label">Delivery Customer</span>
                                <span className="order-detail-value">
                                    {session.customer_name || session.customer_email || 'Verified Customer'}
                                </span>
                            </div>

                            <div className="order-detail-item">
                                <span className="order-detail-label">Confirmation Reference</span>
                                <span className="order-detail-value font-mono text-xs text-slate-600 truncate" title={sessionId}>
                                    {sessionId.slice(0, 22)}...
                                </span>
                            </div>
                        </div>

                        {/* Purchased Records Sample Preview */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                                    <FiDatabase className="text-purple-600" />
                                    <span>Purchased Lead Datasets Preview</span>
                                </h3>
                                <span className="text-xs font-bold text-slate-400">
                                    {items.length} dataset{items.length > 1 ? 's' : ''} purchased
                                </span>
                            </div>

                            <div className="thank-you-table-wrapper">
                                <table className="thank-you-table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>DATASET</th>
                                            <th>CONTACT NAME</th>
                                            <th>COMPANY</th>
                                            <th>PHONE NUMBER</th>
                                            <th>EMAIL</th>
                                            <th>STATE</th>
                                            <th>REVENUE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {records.slice(0, 10).map((rec, index) => (
                                            <tr key={rec.id || index}>
                                                <td className="font-mono text-slate-400">{index + 1}</td>
                                                <td>
                                                    <span className="font-bold text-slate-900">
                                                        {rec.dataset_name || 'MCA Leads'}
                                                    </span>
                                                </td>
                                                <td className="font-semibold">
                                                    {rec.first_name} {rec.last_name}
                                                </td>
                                                <td>{rec.company || '—'}</td>
                                                <td className="font-mono text-slate-700">{rec.phone_number || '—'}</td>
                                                <td className="text-blue-600">{rec.email || '—'}</td>
                                                <td>{rec.state || '—'}</td>
                                                <td className="font-semibold text-emerald-600">{rec.revenue || '—'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {records.length > 10 && (
                                <p className="text-xs text-slate-400 mt-2 text-center">
                                    Showing sample preview of {records.length} records. All records are available in full in the downloaded Excel file.
                                </p>
                            )}
                        </div>

                        {/* Back to Home / Pricing */}
                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                            <p className="text-xs text-slate-400 font-medium">
                                A confirmation receipt and validation checksum have been dispatched to your email.
                            </p>
                            <Link to="/pricing/" className="btn-place-order max-w-xs">
                                <span>Browse More Leads</span>
                                <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ThankYou;
