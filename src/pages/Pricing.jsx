import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    FiSearch,
    FiFilter,
    FiRotateCcw,
    FiMinus,
    FiPlus,
    FiMenu,
    FiEdit2,
    FiTrash2,
    FiX,
    FiArrowRight,
    FiLoader,
    FiCheck,
    FiDatabase
} from 'react-icons/fi';
import Swal from 'sweetalert2';
import BlogHero from '../components/BlogHero';
import { useAuth } from '../context/AuthContext';
import { API_BASE_URL } from '../config';
import './Pricing.css';

const Pricing = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const isAdmin = user?.role === 'admin' || user?.email === 'zunairkhan742@gmail.com';

    // State
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [sortByPrice, setSortByPrice] = useState('default');
    const [showFilters, setShowFilters] = useState(false);

    // Selected quantities per lead: { [leadId]: quantity }
    const [selectedQuantities, setSelectedQuantities] = useState({});

    // Modal state for description / data mapping preview
    const [modalLead, setModalLead] = useState(null);
    const [modalSampleRecord, setModalSampleRecord] = useState(null);
    const [loadingSample, setLoadingSample] = useState(false);

    // Fetch lead listings exclusively from database (with user availability if logged in)
    const fetchLeads = async () => {
        setLoading(true);
        try {
            const userEmail = user?.email || '';
            const url = userEmail 
                ? `${API_BASE_URL}/noAuth/mca-leads?user_email=${encodeURIComponent(userEmail)}`
                : `${API_BASE_URL}/noAuth/mca-leads`;
            const res = await fetch(url);
            const data = await res.json();
            if (data.success) {
                setLeads(data.leads || []);
            }
        } catch (error) {
            console.error("Error fetching leads from database:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();

        // Restore previously selected quantities if within expiry
        try {
            const rawCart = localStorage.getItem('mca_checkout_cart');
            if (rawCart) {
                const parsed = JSON.parse(rawCart);
                if (parsed.expiresAt && Date.now() < parsed.expiresAt && parsed.items) {
                    const restored = {};
                    parsed.items.forEach(item => {
                        if (item.id) restored[item.id] = item.quantity;
                    });
                    setSelectedQuantities(restored);
                }
            }
        } catch (e) {
            console.error("Error restoring saved cart quantities:", e);
        }
    }, [user]);

    // Dynamically derive category filter options strictly from database records
    const dynamicCategories = ['ALL', ...Array.from(new Set(leads.map(l => (l.category || '').trim()).filter(Boolean)))];

    // Filter and Sort leads based on search query, category, and price sorting
    let filteredLeads = leads.filter(lead => {
        const matchesSearch = !searchQuery ||
            (lead.list_name && lead.list_name.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (lead.category && lead.category.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesCategory = selectedCategory === 'ALL' ||
            (lead.category && lead.category.toUpperCase() === selectedCategory.toUpperCase());

        return matchesSearch && matchesCategory;
    });

    if (sortByPrice === 'low-to-high') {
        filteredLeads = [...filteredLeads].sort((a, b) => (parseFloat(a.price_per_lead) || 0) - (parseFloat(b.price_per_lead) || 0));
    } else if (sortByPrice === 'high-to-low') {
        filteredLeads = [...filteredLeads].sort((a, b) => (parseFloat(b.price_per_lead) || 0) - (parseFloat(a.price_per_lead) || 0));
    }

    // Quantity Handlers
    const handleQuantityChange = (leadId, value, maxAvailable) => {
        const num = parseInt(value) || 0;
        const clamped = Math.max(0, Math.min(num, maxAvailable));
        setSelectedQuantities(prev => ({
            ...prev,
            [leadId]: clamped
        }));
    };

    const handleIncrement = (leadId, maxAvailable) => {
        const current = selectedQuantities[leadId] || 0;
        const next = Math.min(current + 1, maxAvailable);
        setSelectedQuantities(prev => ({ ...prev, [leadId]: next }));
    };

    const handleDecrement = (leadId) => {
        const current = selectedQuantities[leadId] || 0;
        const next = Math.max(0, current - 1);
        setSelectedQuantities(prev => ({ ...prev, [leadId]: next }));
    };

    const handleResetQuantity = (leadId) => {
        setSelectedQuantities(prev => ({ ...prev, [leadId]: 0 }));
    };

    const handleMaxQuantity = (leadId, maxAvailable) => {
        setSelectedQuantities(prev => ({ ...prev, [leadId]: maxAvailable }));
    };

    // Calculation Handlers
    const getRowTotal = (lead) => {
        const qty = selectedQuantities[lead.id] || 0;
        const unitPrice = parseFloat(lead.price_per_lead) || 0;
        return (qty * unitPrice).toFixed(2);
    };

    const calculateGrandTotal = () => {
        let total = 0;
        leads.forEach(lead => {
            const qty = selectedQuantities[lead.id] || 0;
            const unitPrice = parseFloat(lead.price_per_lead) || 0;
            total += qty * unitPrice;
        });
        return total;
    };

    const grandTotal = calculateGrandTotal();

    // Open Description & Data Mapping Modal (Fetches sample records from database)
    const handleOpenDescriptionModal = async (lead) => {
        setModalLead(lead);
        setLoadingSample(true);
        setModalSampleRecord(null);

        try {
            const res = await fetch(`${API_BASE_URL}/noAuth/mca-leads/${lead.id}`);
            const data = await res.json();
            if (data.success && data.records && data.records.length > 0) {
                setModalSampleRecord(data.records[0]);
            } else {
                setModalSampleRecord(null);
            }
        } catch (e) {
            console.error("Error loading database lead sample:", e);
            setModalSampleRecord(null);
        } finally {
            setLoadingSample(false);
        }
    };

    // Delete Lead from Database (Admin Only)
    const handleDeleteLead = async (leadId, listName) => {
        if (!isAdmin) return;

        const result = await Swal.fire({
            title: 'Delete Lead Dataset?',
            text: `Are you sure you want to delete "${listName}"? This action cannot be undone.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc2626',
            cancelButtonColor: '#64748b',
            confirmButtonText: 'Yes, Delete It'
        });

        if (result.isConfirmed) {
            try {
                const res = await fetch(`${API_BASE_URL}/noAuth/mca-leads/${leadId}`, {
                    method: 'DELETE'
                });
                const data = await res.json();
                if (data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted',
                        text: 'Lead dataset removed from database.',
                        timer: 1500,
                        showConfirmButton: false
                    });
                    fetchLeads();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: data.message || 'Could not delete lead dataset.'
                    });
                }
            } catch (err) {
                console.error("Delete error:", err);
            }
        }
    };

    // Mask sensitive fields for preview
    const maskText = (text, type = 'general') => {
        if (!text) return '—';
        const str = String(text).trim();
        if (type === 'phone') {
            if (str.length <= 4) return str + '****';
            return str.slice(0, 4) + '****';
        }
        if (type === 'email') {
            const parts = str.split('@');
            if (parts.length === 2) {
                const name = parts[0];
                const domain = parts[1];
                return (name.length > 3 ? name.slice(0, 3) : name) + '***@' + domain;
            }
            return str.slice(0, 3) + '***';
        }
        if (type === 'revenue') {
            if (str.length <= 4) return str + '***';
            return str.slice(0, 4) + '***';
        }
        return str;
    };

    // Checkout Proceed Handler
    const handleCheckout = () => {
        if (grandTotal <= 0) {
            Swal.fire({
                icon: 'warning',
                title: 'No Leads Selected',
                text: 'Please select record quantities before proceeding to checkout.',
                confirmButtonColor: '#601FEA'
            });
            return;
        }

        // Enforce $500 minimum order requirement
        if (grandTotal < 500) {
            Swal.fire({
                icon: 'warning',
                title: 'Minimum Order: $500',
                html: `
                    <div style="font-size: 0.95rem; color: #475569; margin-top: 6px;">
                        The minimum order requirement is <b>$500.00</b>.<br />
                        Your current selection total is <b style="color: #dc2626;">$${grandTotal.toFixed(2)}</b>.
                        <p style="margin-top: 10px; font-size: 0.85rem; color: #64748b;">
                            Please add more lead records to meet the $500 minimum threshold before proceeding to checkout.
                        </p>
                    </div>
                `,
                confirmButtonText: 'Add More Leads',
                confirmButtonColor: '#601FEA'
            });
            return;
        }

        const selectedItems = leads
            .filter(lead => (selectedQuantities[lead.id] || 0) > 0)
            .map(lead => ({
                id: lead.id,
                name: lead.list_name,
                category: lead.category,
                quantity: selectedQuantities[lead.id],
                price: parseFloat(lead.price_per_lead),
                total: (selectedQuantities[lead.id] * parseFloat(lead.price_per_lead)).toFixed(2)
            }));

        const cartData = {
            items: selectedItems,
            grandTotal: grandTotal,
            savedAt: Date.now(),
            expiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
        };

        localStorage.setItem('mca_checkout_cart', JSON.stringify(cartData));

        if (!user) {
            localStorage.setItem('mca_redirect_after_login', '/checkout/');
            Swal.fire({
                icon: 'info',
                title: 'Please Log In',
                text: 'Your selected leads have been saved. Please log in or register to complete your checkout.',
                confirmButtonText: 'Proceed to Login',
                confirmButtonColor: '#601FEA',
                showCancelButton: true,
                cancelButtonText: 'Stay on Pricing'
            }).then((res) => {
                if (res.isConfirmed) {
                    navigate('/login/?redirect=/checkout/');
                }
            });
        } else {
            navigate('/checkout/');
        }
    };

    return (
        <main>
            {/* Hero Section */}
            <BlogHero
                title="Plans and Pricing"
                breadcrumb="Pricing"
                description={
                    <>
                        <Link to="/" className="text-blue-400 hover:text-blue-300 underline font-semibold mr-1">
                            MCA Leads Provider
                        </Link>
                        serves clients and helps them in merchant cash advance lead generation by using the latest marketing tools and techniques. We have modern resources and technology and it helps us to reach the target audience.
                    </>
                }
                bgImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="pricing-page-wrapper">
                <div className="container-custom">
                    {/* Header Bar */}
                    <div className="pricing-header-bar">
                        <div className="pricing-title-flex">
                            <div className="title-accent-bar" />
                            <h1 className="pricing-main-title">
                                MCA Leads ({filteredLeads.length > 0 ? `1-${filteredLeads.length}` : '0'})
                            </h1>
                        </div>

                        <div className="pricing-actions-flex">
                            {/* Search Input */}
                            <div className="pricing-search-box">
                                <FiSearch className="text-slate-400 text-base" />
                                <input
                                    type="text"
                                    className="pricing-search-input"
                                    placeholder="Search leads..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchQuery('')}
                                        className="text-slate-400 hover:text-slate-600"
                                    >
                                        <FiX />
                                    </button>
                                )}
                            </div>

                            {/* Filters Toggle Button */}
                            <button
                                type="button"
                                className={`pricing-filter-btn ${showFilters ? 'active' : ''}`}
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <FiFilter />
                                <span>Filters</span>
                            </button>
                        </div>
                    </div>

                    {/* Expandable Filter Panel Card */}
                    {showFilters && (
                        <div className="pricing-filter-panel">
                            <div className="filter-item-group">
                                <label className="filter-label">Category</label>
                                <div className="filter-select-wrapper">
                                    <select
                                        className="filter-select"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        <option value="ALL">All Categories</option>
                                        {dynamicCategories.filter(c => c !== 'ALL').map((cat) => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="filter-item-group">
                                <label className="filter-label">Sort by Price</label>
                                <div className="filter-select-wrapper">
                                    <select
                                        className="filter-select"
                                        value={sortByPrice}
                                        onChange={(e) => setSortByPrice(e.target.value)}
                                    >
                                        <option value="default">Default</option>
                                        <option value="low-to-high">Low to High</option>
                                        <option value="high-to-low">High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Main Table Card */}
                    <div className="pricing-table-card">
                        {loading ? (
                            <div className="p-16 text-center text-slate-400 flex flex-col items-center justify-center gap-3">
                                <FiLoader className="spinner-icon text-3xl text-purple-600" />
                                <span className="font-semibold text-slate-600">Loading live lead inventory from database...</span>
                            </div>
                        ) : filteredLeads.length === 0 ? (
                            <div className="p-16 text-center text-slate-400">
                                <FiDatabase className="text-4xl text-slate-300 mx-auto mb-3" />
                                <p className="font-semibold text-slate-600">No lead listings found in database.</p>
                            </div>
                        ) : (
                            <div className="pricing-table-container">
                                <table className="pricing-table">
                                    <thead>
                                        <tr>
                                            <th className="th-sno">S.NO</th>
                                            <th className="th-category">CATEGORY</th>
                                            <th className="th-listname">LIST NAME</th>
                                            <th className="th-records-selector text-center">RECORDS SELECTOR</th>
                                            <th className="th-you-can-buy">YOU CAN BUY</th>
                                            <th className="th-unit-price">UNIT PRICE</th>
                                            <th className="th-total-price">TOTAL PRICE</th>
                                            <th className="th-action text-center">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredLeads.map((lead, index) => {
                                            const availableMax = lead.user_available_quantity !== undefined 
                                                ? Math.max(0, parseInt(lead.user_available_quantity) || 0) 
                                                : (parseInt(lead.quantity) || 0);
                                            const currentQty = selectedQuantities[lead.id] || 0;
                                            const rowTotal = getRowTotal(lead);

                                            return (
                                                <tr key={lead.id} className="pricing-row">
                                                    {/* S.No */}
                                                    <td className="td-sno">{index + 1}</td>

                                                    {/* Category */}
                                                    <td className="td-category">
                                                        <span className="category-pill-badge">
                                                            {lead.category || 'General'}
                                                        </span>
                                                    </td>

                                                    {/* List Name */}
                                                    <td className="td-listname">
                                                        <div className="lead-name-text">{lead.list_name}</div>
                                                    </td>

                                                    {/* Records Selector Pill */}
                                                    <td className="td-records-selector">
                                                        <div className="stepper-pill-container">
                                                            <button
                                                                type="button"
                                                                className="stepper-reset-btn"
                                                                onClick={() => handleResetQuantity(lead.id)}
                                                                title="Reset to 0"
                                                            >
                                                                <FiRotateCcw />
                                                            </button>

                                                            <button
                                                                type="button"
                                                                className="stepper-btn"
                                                                onClick={() => handleDecrement(lead.id)}
                                                                disabled={currentQty <= 0}
                                                                title="Decrease 1"
                                                            >
                                                                <FiMinus />
                                                            </button>

                                                            <input
                                                                type="number"
                                                                className="stepper-input"
                                                                value={currentQty === 0 ? '' : currentQty}
                                                                placeholder="0"
                                                                min="0"
                                                                max={availableMax}
                                                                onChange={(e) => handleQuantityChange(lead.id, e.target.value, availableMax)}
                                                            />

                                                            <button
                                                                type="button"
                                                                className="stepper-btn"
                                                                onClick={() => handleIncrement(lead.id, availableMax)}
                                                                disabled={currentQty >= availableMax}
                                                                title="Increase 1"
                                                            >
                                                                <FiPlus />
                                                            </button>

                                                            <button
                                                                type="button"
                                                                className="stepper-max-pill"
                                                                onClick={() => handleMaxQuantity(lead.id, availableMax)}
                                                                title="Select Maximum Available"
                                                            >
                                                                MAX
                                                            </button>
                                                        </div>
                                                    </td>

                                                    {/* You Can Buy */}
                                                    <td className="td-you-can-buy">
                                                        {availableMax.toLocaleString()}
                                                    </td>

                                                    {/* Unit Price */}
                                                    <td className="td-price">
                                                        ${parseFloat(lead.price_per_lead || 0).toFixed(2)}
                                                    </td>

                                                    {/* Total Price */}
                                                    <td className={`td-total-price ${currentQty > 0 ? 'active' : ''}`}>
                                                        ${rowTotal}
                                                    </td>

                                                    {/* Actions */}
                                                    <td className="td-action">
                                                        <div className="row-actions-group">
                                                            {/* View Description / Mapping Modal */}
                                                            <button
                                                                type="button"
                                                                className="action-icon-box action-desc-btn"
                                                                onClick={() => handleOpenDescriptionModal(lead)}
                                                                title="View Description and Sample Data Mapping"
                                                            >
                                                                <FiMenu />
                                                            </button>

                                                            {/* Admin Edit Icon (Routes to Edit Leads UI) */}
                                                            {isAdmin && (
                                                                <Link
                                                                    to={`/edit-lead/${lead.id}/`}
                                                                    className="action-icon-box action-edit-btn"
                                                                    title="Edit Lead List (Admin Only)"
                                                                >
                                                                    <FiEdit2 />
                                                                </Link>
                                                            )}

                                                            {/* Admin Delete Icon */}
                                                            {isAdmin && (
                                                                <button
                                                                    type="button"
                                                                    className="action-icon-box action-delete-btn"
                                                                    onClick={() => handleDeleteLead(lead.id, lead.list_name)}
                                                                    title="Delete Lead List (Admin Only)"
                                                                >
                                                                    <FiTrash2 />
                                                                </button>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* Checkout Summary Bar (Relative Document Flow) */}
                    <div className="checkout-summary-bar">
                        <div className="checkout-left-info">
                            <div className="checkout-header-badge-row">
                                <span className="checkout-summary-title">CHECKOUT SUMMARY</span>
                                <span className="min-order-pill">(min. order $500)</span>
                            </div>
                            <div className="checkout-grand-total">
                                ${grandTotal.toFixed(2)}
                            </div>
                        </div>

                        <button
                            type="button"
                            className={`btn-proceed-checkout ${grandTotal > 0 ? 'active' : ''}`}
                            onClick={handleCheckout}
                            disabled={grandTotal <= 0}
                        >
                            <span>Proceed to Checkout</span>
                            <FiArrowRight />
                        </button>
                    </div>

                    {/* MODAL 1: Description & Data Mapping Modal (Pure Database Data) */}
                    {modalLead && (
                        <div className="custom-modal-overlay" onClick={() => setModalLead(null)}>
                            <div className="description-modal-box" onClick={(e) => e.stopPropagation()}>
                                <div className="modal-header-flex">
                                    <div>
                                        <h3 className="modal-title-bold">{modalLead.list_name}</h3>
                                        <span className="modal-category-subbadge">
                                            {modalLead.category || 'General'}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        className="modal-close-btn"
                                        onClick={() => setModalLead(null)}
                                    >
                                        <FiX />
                                    </button>
                                </div>

                                <div className="modal-body-scroll">
                                    {/* Description Box */}
                                    <div className="mb-6">
                                        <div className="modal-section-title">
                                            <div className="section-bar-blue" />
                                            <span>DESCRIPTION</span>
                                        </div>
                                        <p className="modal-desc-text">
                                            {modalLead.description || 'No description available for this lead list.'}
                                        </p>
                                    </div>

                                    {/* Data Mapping Preview Box */}
                                    <div>
                                        <div className="modal-section-title">
                                            <div className="section-bar-green" />
                                            <span>DATA MAPPING PREVIEW</span>
                                        </div>
                                        <p className="mapping-preview-note">
                                            Below is an example record from the database for this list. Note that other records may not contain all columns or data.
                                        </p>

                                        <div className="mapping-preview-table-container">
                                            {loadingSample ? (
                                                <div className="p-6 text-center text-slate-400">
                                                    <FiLoader className="spinner-icon text-xl text-blue-600 inline-block mb-1" />
                                                    <p className="text-xs">Loading database preview...</p>
                                                </div>
                                            ) : modalSampleRecord ? (
                                                <table className="mapping-preview-table">
                                                    <thead>
                                                        <tr>
                                                            <th>PHONE NUMBER / MOBILE PHONE</th>
                                                            <th>FIRST NAME</th>
                                                            <th>LAST NAME</th>
                                                            <th>EMAIL</th>
                                                            <th>COMPANY</th>
                                                            <th>REVENUE</th>
                                                            <th>STATE</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{maskText(modalSampleRecord.phone_number, 'phone')}</td>
                                                            <td>{modalSampleRecord.first_name || '—'}</td>
                                                            <td>{modalSampleRecord.last_name || '—'}</td>
                                                            <td className="email-cell">{maskText(modalSampleRecord.email, 'email')}</td>
                                                            <td>{modalSampleRecord.company || '—'}</td>
                                                            <td>{maskText(modalSampleRecord.revenue, 'revenue')}</td>
                                                            <td>{modalSampleRecord.state || '—'}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            ) : (
                                                <table className="mapping-preview-table">
                                                    <thead>
                                                        <tr>
                                                            <th>PHONE NUMBER / MOBILE PHONE</th>
                                                            <th>FIRST NAME</th>
                                                            <th>LAST NAME</th>
                                                            <th>EMAIL</th>
                                                            <th>COMPANY</th>
                                                            <th>REVENUE</th>
                                                            <th>STATE</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>8888****</td>
                                                            <td>Jhon</td>
                                                            <td>Devid</td>
                                                            <td className="email-cell">jhon***@gmail.com</td>
                                                            <td>Microsoft</td>
                                                            <td>2335***</td>
                                                            <td>California</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            )}
                                        </div>
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

export default Pricing;
