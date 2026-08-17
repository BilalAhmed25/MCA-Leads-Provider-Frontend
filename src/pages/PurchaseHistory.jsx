import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    FiClock, 
    FiDownload, 
    FiFileText, 
    FiCheckCircle, 
    FiSearch, 
    FiDatabase, 
    FiTrendingUp, 
    FiDollarSign, 
    FiLayers, 
    FiArrowRight, 
    FiLoader,
    FiUser
} from 'react-icons/fi';
import Swal from 'sweetalert2';
import BlogHero from '../components/BlogHero';
import { useAuth } from '../context/AuthContext';
import { useNoIndex } from '../hooks/useNoIndex';
import { API_BASE_URL } from '../config';
import './PurchaseHistory.css';

const PurchaseHistory = () => {
    useNoIndex();
    const navigate = useNavigate();
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    const [stats, setStats] = useState({ total_orders: 0, total_leads_purchased: 0, total_spent: 0 });
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('mca_token');
        const storedUser = localStorage.getItem('mca_user');

        if (!user && !token && !storedUser) {
            localStorage.setItem('mca_redirect_after_login', '/purchase-history/');
            navigate('/login/?redirect=/purchase-history/');
            return;
        }

        const fetchHistory = async () => {
            const userEmail = user?.email || (storedUser ? JSON.parse(storedUser).email : '');
            if (!userEmail) {
                setLoading(false);
                return;
            }

            try {
                const res = await fetch(`${API_BASE_URL}/noAuth/mca-leads/purchase-history?email=${encodeURIComponent(userEmail)}`);
                const data = await res.json();
                if (data.success) {
                    setOrders(data.orders || []);
                    const totalSpent = (data.orders || []).reduce((sum, o) => sum + (parseFloat(o.total_amount) || 0), 0);
                    setStats({
                        total_orders: data.total_orders || (data.orders || []).length,
                        total_leads_purchased: data.total_leads_purchased || 0,
                        total_spent: totalSpent
                    });
                }
            } catch (error) {
                console.error("Error fetching purchase history:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, [user, navigate]);

    // Search filter
    const filteredOrders = orders.filter(order => {
        if (!searchQuery) return true;
        const q = searchQuery.toLowerCase();
        const matchesRef = (order.order_session_id || '').toLowerCase().includes(q);
        const matchesDatasets = (order.datasets || []).some(d => (d.list_name || '').toLowerCase().includes(q));
        return matchesRef || matchesDatasets;
    });

    if (loading) {
        return (
            <main>
                <BlogHero
                    title="Purchase History"
                    breadcrumb="Purchase History"
                    description="View your past transactions, downloaded lead batches, and order manifests."
                />
                <div className="p-24 text-center text-slate-400 flex flex-col items-center gap-3">
                    <FiLoader className="spinner-icon text-4xl text-purple-600" />
                    <span className="font-bold text-lg text-slate-700">Loading your purchase history...</span>
                </div>
            </main>
        );
    }

    if (!user) {
        return (
            <main>
                <BlogHero
                    title="Purchase History"
                    breadcrumb="Purchase History"
                    description="Please log in to review your order history."
                />
                <div className="container-custom py-20 text-center">
                    <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mx-auto mb-4">
                            <FiUser />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-2">Login Required</h2>
                        <p className="text-sm text-slate-500 mb-6">
                            You must be logged in to view your lead purchase history.
                        </p>
                        <Link to="/login/?redirect=/purchase-history/" className="btn-place-order max-w-xs mx-auto">
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
                title="Purchase History"
                breadcrumb="Purchase History"
                description="Manage your verified MCA leads orders, download previous file manifests, and re-order fresh records."
                bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            />

            <section className="purchase-history-page-wrapper">
                <div className="container-custom">
                    {/* Top Metrics Row */}
                    <div className="history-metrics-grid">
                        <div className="history-metric-card">
                            <div className="history-metric-icon-box icon-purple">
                                <FiLayers />
                            </div>
                            <div>
                                <div className="history-metric-label">Total Completed Orders</div>
                                <div className="history-metric-value">{stats.total_orders}</div>
                            </div>
                        </div>

                        <div className="history-metric-card">
                            <div className="history-metric-icon-box icon-emerald">
                                <FiDatabase />
                            </div>
                            <div>
                                <div className="history-metric-label">Total Verified Leads</div>
                                <div className="history-metric-value">{stats.total_leads_purchased.toLocaleString()}</div>
                            </div>
                        </div>

                        <div className="history-metric-card">
                            <div className="history-metric-icon-box icon-blue">
                                <FiDollarSign />
                            </div>
                            <div>
                                <div className="history-metric-label">Total Value Invested</div>
                                <div className="history-metric-value">${stats.total_spent.toFixed(2)}</div>
                            </div>
                        </div>

                        <div className="history-metric-card">
                            <div className="history-metric-icon-box icon-amber">
                                <FiTrendingUp />
                            </div>
                            <div>
                                <div className="history-metric-label">Account Status</div>
                                <div className="history-metric-value text-emerald-600 text-lg">Verified Buyer</div>
                            </div>
                        </div>
                    </div>

                    {/* Main Orders Card */}
                    <div className="history-main-card">
                        <div className="history-header-actions">
                            <div className="history-title-group">
                                <h2>Your Lead Order Manifests</h2>
                                <p>Re-download any previous purchase batch at full resolution in Excel format.</p>
                            </div>

                            <div className="history-search-input-box">
                                <FiSearch className="history-search-icon" />
                                <input
                                    type="text"
                                    placeholder="Search by dataset or category..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {filteredOrders.length === 0 ? (
                            <div className="history-empty-state">
                                <div className="history-empty-icon">
                                    <FiClock />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">
                                    {orders.length === 0 ? "No Purchase Records Found" : "No Matching Orders Found"}
                                </h3>
                                <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                                    {orders.length === 0
                                        ? "You have not completed any lead purchases yet. Browse our inventory to configure and order datasets."
                                        : "Try searching with a different keyword."}
                                </p>
                                <Link to="/pricing/" className="btn-download-pdf max-w-xs mx-auto">
                                    <span>Browse Leads Inventory</span>
                                    <FiArrowRight />
                                </Link>
                            </div>
                        ) : (
                            <div className="orders-list-stack">
                                {filteredOrders.map((order, idx) => (
                                    <div key={order.order_session_id || idx} className="order-entry-card">
                                        <div className="order-top-banner">
                                            <div className="flex items-center gap-3 flex-wrap">
                                                <span className="order-date-text">
                                                    {new Date(order.created_at).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </span>
                                            </div>

                                            <div className="order-status-badge">
                                                <FiCheckCircle />
                                                <span>Delivered & Verified</span>
                                            </div>
                                        </div>

                                        {/* Purchased Datasets in this order */}
                                        <div className="order-datasets-grid">
                                            {(order.datasets || []).map((ds, dIdx) => (
                                                <div key={ds.dataset_id || dIdx} className="dataset-pill-item">
                                                    <div className="dataset-pill-left">
                                                        <span className="dataset-pill-cat">{ds.category || 'MCA Leads'}</span>
                                                        <span className="dataset-pill-name">{ds.list_name}</span>
                                                    </div>
                                                    <span className="dataset-pill-count">
                                                        {ds.quantity.toLocaleString()} leads
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bottom Action Row */}
                                        <div className="order-bottom-actions-row">
                                            <div className="order-total-price-tag">
                                                <span>Total:</span>
                                                ${parseFloat(order.total_amount).toFixed(2)}
                                                <span className="text-xs text-slate-400 font-normal ml-2">
                                                    ({order.total_records} records)
                                                </span>
                                            </div>

                                            <div className="order-downloads-flex">
                                                <a
                                                    href={`${API_BASE_URL}${order.download_excel_url}`}
                                                    className="btn-history-excel"
                                                    download
                                                >
                                                    <FiDownload />
                                                    <span>Download Excel (.xlsx)</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PurchaseHistory;
