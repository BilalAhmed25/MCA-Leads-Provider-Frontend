import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../context/AuthContext';
import { useNoIndex } from '../hooks/useNoIndex';
import { API_BASE_URL } from '../config';
import { FiSearch, FiPlus, FiCheckCircle, FiEdit, FiTrash2, FiExternalLink, FiX, FiShield } from 'react-icons/fi';
import './ManageBlogs.css';

const ManageBlogs = () => {
    useNoIndex();
    const { user } = useAuth();
    const [blogs, setBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Modal state for Create / Edit
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [formData, setFormData] = useState({ title: '', slug: '', image: '', content: '', excerpt: '' });
    const [modalSubmitting, setModalSubmitting] = useState(false);

    const isAdmin = user && user.email === 'zunairkhan742@gmail.com';

    useEffect(() => {
        if (isAdmin) {
            fetchBlogs();
        } else {
            setLoading(false);
        }
    }, [isAdmin]);

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE_URL}/noAuth/mca-blogs`);
            const data = await res.json();
            if (data.success && data.blogs) {
                setBlogs(data.blogs);
            } else {
                setError('Failed to load blogs');
            }
        } catch (err) {
            console.error('Error fetching blogs:', err);
            setError('Error connecting to server');
        } finally {
            setLoading(false);
        }
    };

    const handleOpenCreateModal = () => {
        setEditingBlog(null);
        setFormData({ title: '', slug: '', image: '', content: '', excerpt: '' });
        setIsModalOpen(true);
    };

    const handleOpenEditModal = (blog) => {
        setEditingBlog(blog);
        const cleanT = (blog.title || '').replace(/\s*\|\s*MCA Leads Provider/gi, '').replace(/\s*-\s*MCA Leads Provider/gi, '');
        setFormData({
            title: cleanT,
            slug: blog.slug || '',
            image: blog.image || '',
            content: blog.content || '',
            excerpt: blog.excerpt || blog.meta_description || ''
        });
        setIsModalOpen(true);
    };

    const handleTitleChange = (e) => {
        const titleVal = e.target.value;
        if (!editingBlog) {
            // Auto generate slug for new blogs
            const autoSlug = titleVal.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            setFormData(prev => ({ ...prev, title: titleVal, slug: autoSlug }));
        } else {
            setFormData(prev => ({ ...prev, title: titleVal }));
        }
    };

    const handleSaveBlog = async (e) => {
        e.preventDefault();
        setModalSubmitting(true);

        const url = editingBlog
            ? `${API_BASE_URL}/noAuth/mca-blogs/${editingBlog.id}`
            : `${API_BASE_URL}/noAuth/mca-blogs`;
        const method = editingBlog ? 'PUT' : 'POST';

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (data.success) {
                setIsModalOpen(false);
                fetchBlogs();
            } else {
                alert(data.message || 'Operation failed');
            }
        } catch (err) {
            console.error('Error saving blog:', err);
            alert('Error connecting to server');
        } finally {
            setModalSubmitting(false);
        }
    };

    const handleDeleteBlog = async (blogId) => {
        const result = await Swal.fire({
            title: 'Delete Blog Post?',
            text: 'Are you sure you want to delete this blog post? This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#64748b',
            confirmButtonText: 'Yes, Delete It'
        });

        if (!result.isConfirmed) return;

        try {
            const res = await fetch(`${API_BASE_URL}/noAuth/mca-blogs/${blogId}`, {
                method: 'DELETE'
            });
            const data = await res.json();
            if (data.success) {
                setBlogs(prev => prev.filter(b => b.id !== blogId));
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: 'The blog post has been deleted.',
                    confirmButtonColor: '#601FEA',
                    timer: 2000
                });
            }
        } catch (err) {
            console.error('Error deleting blog:', err);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to delete blog post.',
                confirmButtonColor: '#601FEA'
            });
        }
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return 'N/A';
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return dateStr;
        return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
    };

    const filteredBlogs = blogs.filter(b =>
        b.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.slug?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isAdmin) {
        return (
            <main className="manage-blogs-page py-24 min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="bg-white p-10 rounded-3xl border border-slate-200 text-center max-w-md shadow-xl">
                    <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                        <FiShield />
                    </div>
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Access Denied</h2>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        Only Admin Zunair Khan has authorization to access the Manage Blogs dashboard.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="manage-blogs-page py-20 min-h-screen bg-slate-50">
            <div className="container-custom max-w-7xl mx-auto">
                {/* Top Action Header: Search & Create Button */}
                <div className="manage-blogs-top-bar flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                    <div className="search-input-box w-full md:w-96">
                        <FiSearch className="search-icon text-slate-400 text-lg" />
                        <input
                            type="text"
                            placeholder="Search blogs by title or slug..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <Link to="/create-blog" className="create-blog-btn flex items-center gap-2">
                        <FiPlus className="text-xl" />
                        <span>Create new blog</span>
                    </Link>
                </div>

                {/* Table Card Wrapper */}
                <div className="table-card-wrapper shadow-2xl">
                    <div className="table-overflow-container">
                        <table className="blogs-table">
                            <thead>
                                <tr>
                                    <th className="th-blog-post">BLOG POST</th>
                                    <th className="th-status">STATUS</th>
                                    <th className="th-created">CREATED AT</th>
                                    <th className="th-actions">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="4" className="text-center py-12 text-slate-500 font-medium">
                                            Loading blogs list...
                                        </td>
                                    </tr>
                                ) : filteredBlogs.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center py-12 text-slate-500 font-medium">
                                            No blogs found.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredBlogs.map(blog => (
                                        <tr key={blog.id} className="blog-row">
                                            {/* BLOG POST Column */}
                                            <td className="td-blog-post">
                                                <div className="blog-info-flex">
                                                    <img
                                                        src={blog.image || '/logo-black.png'}
                                                        alt={blog.title}
                                                        className="blog-thumbnail-img"
                                                        onError={(e) => { e.target.src = '/logo-black.png'; }}
                                                    />
                                                    <div className="blog-text-details">
                                                        <div className="blog-title-text">{blog.title}</div>
                                                        <div className="blog-slug-text">{blog.slug}</div>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* STATUS Column */}
                                            <td className="td-status">
                                                <span className="status-badge badge-published">
                                                    <span className="status-dot"></span>
                                                    Published
                                                </span>
                                            </td>

                                            {/* CREATED AT Column */}
                                            <td className="td-created">
                                                <span className="created-date-text">
                                                    {formatDate(blog.published_date)}
                                                </span>
                                            </td>

                                            {/* ACTIONS Column */}
                                            <td className="td-actions">
                                                <div className="action-buttons-group">
                                                    <Link
                                                        to={`/${blog.slug}`}
                                                        target="_blank"
                                                        className="action-btn view-btn"
                                                        title="View Blog Detail"
                                                    >
                                                        <FiExternalLink />
                                                    </Link>
                                                    <Link
                                                        to={`/edit-blog/${blog.id}`}
                                                        className="action-btn edit-btn"
                                                        title="Edit Blog"
                                                    >
                                                        <FiEdit />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDeleteBlog(blog.id)}
                                                        className="action-btn delete-btn"
                                                        title="Delete Blog"
                                                    >
                                                        <FiTrash2 />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Create / Edit Blog Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-2xl overflow-hidden p-6 sm:p-8">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                            <h3 className="text-xl font-extrabold text-slate-900">
                                {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-slate-400 hover:text-slate-600 text-xl p-1 rounded-full hover:bg-slate-100 transition-colors"
                            >
                                <FiX />
                            </button>
                        </div>

                        <form onSubmit={handleSaveBlog} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Blog Title</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={handleTitleChange}
                                    placeholder="Enter blog title"
                                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none text-sm font-medium transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">URL Slug</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.slug}
                                    onChange={e => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                                    placeholder="my-blog-slug"
                                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none text-sm font-mono transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Featured Image URL (Cloudinary)</label>
                                <input
                                    type="url"
                                    value={formData.image}
                                    onChange={e => setFormData(prev => ({ ...prev, image: e.target.value }))}
                                    placeholder="https://res.cloudinary.com/..."
                                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none text-sm font-medium transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Short Excerpt</label>
                                <textarea
                                    rows="2"
                                    value={formData.excerpt}
                                    onChange={e => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                                    placeholder="Brief summary of the blog..."
                                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none text-sm font-medium transition-all"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Blog Content (HTML supported)</label>
                                <textarea
                                    rows="5"
                                    value={formData.content}
                                    onChange={e => setFormData(prev => ({ ...prev, content: e.target.value }))}
                                    placeholder="Full blog post content..."
                                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none text-sm font-medium transition-all"
                                ></textarea>
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-3 rounded-2xl border border-slate-200 font-bold text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={modalSubmitting}
                                    className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all"
                                >
                                    {modalSubmitting ? 'Saving...' : (editingBlog ? 'Update Blog' : 'Create Blog')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
};

export default ManageBlogs;
