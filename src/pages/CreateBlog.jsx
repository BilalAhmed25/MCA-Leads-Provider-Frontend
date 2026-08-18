import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../context/AuthContext';
import { useNoIndex } from '../hooks/useNoIndex';
import { API_BASE_URL } from '../config';
import {
    FiArrowLeft, FiEye, FiPlus, FiType, FiLink, FiImage, FiFileText,
    FiCode, FiHelpCircle, FiSave, FiUploadCloud, FiChevronDown, FiShield
} from 'react-icons/fi';
import './CreateBlog.css';

const CreateBlog = () => {
    useNoIndex();
    const { id } = useParams(); // If present, edit mode
    const navigate = useNavigate();
    const { user } = useAuth();
    const fileInputRef = useRef(null);

    const isAdmin = user && user.email === 'zunairkhan742@gmail.com';

    // Form state
    const [title, setTitle] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [image, setImage] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('<h2>Introduction</h2><p>Your content here...</p>');

    // FAQ items
    const [faqs, setFaqs] = useState([]);
    const [faqQuestion, setFaqQuestion] = useState('');
    const [faqAnswer, setFaqAnswer] = useState('');

    // State indicators
    const [uploadingImage, setUploadingImage] = useState(false);
    const [saving, setSaving] = useState(false);
    const [isHeadingsOpen, setIsHeadingsOpen] = useState(false);
    const [previewActive, setPreviewActive] = useState(true);

    const headingsRef = useRef(null);

    useEffect(() => {
        if (id) {
            // Fetch blog details for edit
            fetchBlogDetail(id);
        }

        const handleClickOutside = (e) => {
            if (headingsRef.current && !headingsRef.current.contains(e.target)) {
                setIsHeadingsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [id]);

    const fetchBlogDetail = async (blogId) => {
        try {
            const res = await fetch(`${API_BASE_URL}/noAuth/mca-blogs/${blogId}`);
            const data = await res.json();
            if (data.success && data.blog) {
                const b = data.blog;
                const cleanT = (b.title || '').replace(/\s*\|\s*MCA Leads Provider/gi, '').replace(/\s*-\s*MCA Leads Provider/gi, '');
                setTitle(cleanT);
                setMetaTitle(b.meta_title || cleanT);
                setSlug(b.slug || '');
                setImage(b.image || '');
                setExcerpt(b.excerpt || b.meta_description || '');
                setContent(b.content || '');
            }
        } catch (err) {
            console.error('Error fetching blog detail:', err);
        }
    };

    // Auto slug generator
    const handleTitleChange = (val) => {
        setTitle(val);
        if (!metaTitle) setMetaTitle(val);
        if (!id) {
            const autoSlug = val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            setSlug(autoSlug);
        }
    };

    // Image file upload to Cloudinary
    const handleImageFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        setUploadingImage(true);
        try {
            const res = await fetch(`${API_BASE_URL}/noAuth/mca-upload-image`, {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            if (data.success && data.url) {
                setImage(data.url);
            } else {
                alert(data.message || 'Image upload failed');
            }
        } catch (err) {
            console.error('Error uploading image:', err);
            alert('Failed to upload image to Cloudinary');
        } finally {
            setUploadingImage(false);
        }
    };

    const textareaRef = useRef(null);

    // Text selection-aware HTML tag wrapping
    const insertHtmlTag = (tag) => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = content.substring(start, end);

        let wrappedText = '';
        if (selectedText.length > 0) {
            wrappedText = `<${tag}>${selectedText}</${tag}>`;
        } else {
            const defaultText = tag.startsWith('h') ? 'New Heading' : 'Sample text';
            wrappedText = `<${tag}>${defaultText}</${tag}>`;
        }

        const newContent = content.substring(0, start) + wrappedText + content.substring(end);
        setContent(newContent);

        // Restore focus and selection
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + tag.length + 2, start + tag.length + 2 + (selectedText.length || (tag.startsWith('h') ? 11 : 11)));
        }, 50);
    };

    const handleAddCtaBlock = () => {
        const ctaHtml = `\n<div class="blog-cta-card my-8 p-8 sm:p-10 rounded-3xl bg-[rgba(96,31,234,0.06)] border border-[rgba(96,31,234,0.15)] shadow-sm">
  <h3 class="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B] mb-3 leading-tight">
    Planning to Boost Your MCA Funding Pipeline? Let Us Make it Hassle-Free!
  </h3>
  <p class="text-slate-600 text-sm sm:text-base font-medium mb-6 leading-relaxed">
    From verified live transfers to high-converting callback leads, our team delivers pre-qualified merchant cash advance leads tailored to your target criteria.
  </p>
  <div class="flex flex-wrap items-center gap-3">
    <a href="tel:3477849496" class="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#601FEA] hover:bg-[#4a15ba] text-white font-extrabold text-sm shadow-md transition-all">
      Talk Live With Experts
    </a>
    <a href="/contact-us/" class="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white border-2 border-[#601FEA] text-[#601FEA] hover:bg-purple-50 font-extrabold text-sm transition-all">
      Get A Free Quote Now
    </a>
  </div>
</div>\n`;
        setContent(prev => prev + ctaHtml);
    };

    const handleAddTable = () => {
        const tableHtml = `\n<div class="overflow-x-auto my-8">
  <table class="w-full border-collapse border border-slate-900 rounded-2xl overflow-hidden shadow-sm">
    <thead>
      <tr class="bg-[#601FEA] text-white">
        <th class="border border-slate-900 p-4 text-left font-extrabold text-sm">Feature</th>
        <th class="border border-slate-900 p-4 text-left font-extrabold text-sm">MCA</th>
        <th class="border border-slate-900 p-4 text-left font-extrabold text-sm">Traditional Bank</th>
      </tr>
    </thead>
    <tbody class="bg-white text-slate-800 text-sm font-medium">
      <tr>
        <td class="border border-slate-900 p-4 font-bold">Approval</td>
        <td class="border border-slate-900 p-4">24-72 hours</td>
        <td class="border border-slate-900 p-4">Weeks and months</td>
      </tr>
      <tr>
        <td class="border border-slate-900 p-4 font-bold">Credit Requirements</td>
        <td class="border border-slate-900 p-4">Based on sales</td>
        <td class="border border-slate-900 p-4">Good financial history</td>
      </tr>
      <tr>
        <td class="border border-slate-900 p-4 font-bold">Repayment</td>
        <td class="border border-slate-900 p-4">Daily/weekly % of card sales</td>
        <td class="border border-slate-900 p-4">Fixed months</td>
      </tr>
      <tr>
        <td class="border border-slate-900 p-4 font-bold">Cost Of Financing</td>
        <td class="border border-slate-900 p-4">Heavy fees</td>
        <td class="border border-slate-900 p-4">Less interest rates</td>
      </tr>
      <tr>
        <td class="border border-slate-900 p-4 font-bold">Perfect For</td>
        <td class="border border-slate-900 p-4">Business requires flow</td>
        <td class="border border-slate-900 p-4">Business with growth</td>
      </tr>
    </tbody>
  </table>
</div>\n`;
        setContent(prev => prev + tableHtml);
    };

    // Add FAQ item into content and state
    const handleAddFaq = () => {
        if (!faqQuestion || !faqAnswer) {
            return Swal.fire({
                icon: 'warning',
                title: 'Incomplete FAQ',
                text: 'Please provide both question and answer.',
                confirmButtonColor: '#601FEA'
            });
        }
        const newFaq = { question: faqQuestion, answer: faqAnswer };
        setFaqs(prev => [...prev, newFaq]);

        const hasFaqHeader = content.includes('<h2>Frequently Asked Questions</h2>') || content.includes('<h2>FAQs</h2>');
        const headerPrefix = hasFaqHeader ? '' : '\n<h2>Frequently Asked Questions</h2>\n';

        const faqHtml = `${headerPrefix}<p><strong>${faqQuestion}</strong></p>\n<p>${faqAnswer}</p>\n`;
        setContent(prev => prev + faqHtml);
        setFaqQuestion('');
        setFaqAnswer('');
    };

    // Save or Update Blog Post
    const handlePublishBlog = async () => {
        if (!title || !slug) {
            return Swal.fire({
                icon: 'warning',
                title: 'Missing Required Fields',
                text: 'Blog Title and URL Slug are required before publishing.',
                confirmButtonColor: '#601FEA'
            });
        }

        setSaving(true);
        const blogPayload = { title, meta_title: metaTitle || title, slug, image, content, excerpt };
        const url = id
            ? `${API_BASE_URL}/noAuth/mca-blogs/${id}`
            : `${API_BASE_URL}/noAuth/mca-blogs`;
        const method = id ? 'PUT' : 'POST';

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blogPayload)
            });
            const data = await res.json();

            if (data.success) {
                await Swal.fire({
                    icon: 'success',
                    title: id ? 'Blog Post Updated!' : 'Blog Post Published!',
                    text: id ? 'Your blog post has been successfully updated.' : 'Your new blog post is live and saved to database.',
                    confirmButtonColor: '#601FEA',
                    confirmButtonText: 'Go to Manage Blogs',
                    timer: 3000,
                    timerProgressBar: true
                });
                navigate('/manage-blogs');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to Publish',
                    text: data.message || 'Failed to save blog post.',
                    confirmButtonColor: '#601FEA'
                });
            }
        } catch (err) {
            console.error('Error publishing blog:', err);
            Swal.fire({
                icon: 'error',
                title: 'Connection Error',
                text: 'Unable to connect to backend server. Please try again.',
                confirmButtonColor: '#601FEA'
            });
        } finally {
            setSaving(false);
        }
    };

    if (!isAdmin) {
        return (
            <main className="create-blog-page py-24 min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="bg-white p-10 rounded-3xl border border-slate-200 text-center max-w-md shadow-xl">
                    <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl flex items-center justify-center">
                        <FiShield />
                    </div>
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Access Denied</h2>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        Only Admin Zunair Khan has authorization to create or edit blog posts.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="create-blog-page py-20 min-h-screen bg-slate-50">
            <div className="container-custom max-w-7xl mx-auto">

                {/* Top Action Header */}
                <div className="flex items-center justify-between mb-8">
                    <Link to="/manage-blogs" className="back-to-list-btn flex items-center gap-2 font-bold text-slate-700 hover:text-purple-600 transition-colors">
                        <FiArrowLeft className="text-lg" />
                        <span>Back to List</span>
                    </Link>

                    <button
                        onClick={() => setPreviewActive(!previewActive)}
                        className="live-preview-btn flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 font-bold text-sm text-blue-600 shadow-sm transition-all"
                    >
                        <FiEye className="text-base" />
                        <span>Live Preview</span>
                    </button>
                </div>

                {/* Two Column Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Form Controls Column */}
                    <div className="lg:col-span-7 space-y-8">

                        {/* Card 1: Blog Metadata */}
                        <div className="form-card-box p-6 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-xl space-y-5">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="card-icon-wrapper bg-blue-50 text-blue-600 p-2.5 rounded-2xl font-extrabold">
                                    <FiPlus className="text-xl" />
                                </div>
                                <h2 className="text-2xl font-extrabold text-slate-900">Blog Metadata</h2>
                            </div>

                            {/* Blog Title */}
                            <div className="input-with-icon-wrapper">
                                <span className="input-left-text font-black text-slate-400">T</span>
                                <input
                                    type="text"
                                    placeholder="Blog Title"
                                    value={title}
                                    onChange={e => handleTitleChange(e.target.value)}
                                    className="styled-form-input"
                                />
                            </div>

                            {/* Meta Title (SEO) */}
                            <div className="input-with-icon-wrapper">
                                <span className="input-left-text font-black text-slate-400">T</span>
                                <input
                                    type="text"
                                    placeholder="Meta Title (SEO)"
                                    value={metaTitle}
                                    onChange={e => setMetaTitle(e.target.value)}
                                    className="styled-form-input"
                                />
                            </div>

                            {/* Slug & Image URL + Upload Button Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                                <div className="sm:col-span-6 input-with-icon-wrapper">
                                    <FiLink className="input-left-icon text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Slug (URL Path)"
                                        value={slug}
                                        onChange={e => setSlug(e.target.value)}
                                        className="styled-form-input"
                                    />
                                </div>

                                <div className="sm:col-span-6 flex items-center gap-2">
                                    <div className="input-with-icon-wrapper flex-grow">
                                        <FiImage className="input-left-icon text-slate-400" />
                                        <input
                                            type="url"
                                            placeholder="Feature Image URL"
                                            value={image}
                                            onChange={e => setImage(e.target.value)}
                                            className="styled-form-input"
                                        />
                                    </div>

                                    {/* Upload Image File Button */}
                                    <button
                                        type="button"
                                        disabled={uploadingImage}
                                        onClick={() => fileInputRef.current?.click()}
                                        className="upload-cloud-btn flex items-center gap-1.5 px-5 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all shrink-0 cursor-pointer"
                                    >
                                        <FiPlus className="text-base" />
                                        <span>{uploadingImage ? 'Uploading...' : 'Upload'}</span>
                                    </button>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleImageFileChange}
                                        accept="image/*"
                                        className="hidden"
                                    />
                                </div>
                            </div>

                            {/* Short Description (Meta) */}
                            <div className="input-with-icon-wrapper">
                                <FiFileText className="input-left-icon text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Short Description (Meta)"
                                    value={excerpt}
                                    onChange={e => setExcerpt(e.target.value)}
                                    className="styled-form-input"
                                />
                            </div>
                        </div>

                        {/* Card 2: HTML Content Editor */}
                        <div className="form-card-box p-6 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-xl space-y-4">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="card-icon-wrapper bg-blue-50 text-blue-600 p-2.5 rounded-2xl font-extrabold">
                                    <FiCode className="text-xl" />
                                </div>
                                <h2 className="text-2xl font-extrabold text-slate-900">HTML Content</h2>
                            </div>
                            <p className="text-xs font-semibold text-slate-400">
                                Paste or write your blog HTML code here. You can use standard HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, etc.
                            </p>

                            {/* Dark Editor Box */}
                            <div className="dark-editor-card rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">

                                {/* Editor Toolbar Header */}
                                <div className="dark-editor-toolbar p-3 border-b border-slate-800 flex flex-wrap items-center gap-2 bg-slate-900">

                                    {/* Headings Dropdown */}
                                    <div className="relative" ref={headingsRef}>
                                        <button
                                            type="button"
                                            onClick={() => setIsHeadingsOpen(!isHeadingsOpen)}
                                            className="toolbar-btn flex items-center gap-1 text-xs font-extrabold text-slate-200 bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-xl border border-slate-700"
                                        >
                                            <span>Headings</span>
                                            <FiChevronDown className="text-xs" />
                                        </button>

                                        {isHeadingsOpen && (
                                            <div className="absolute top-full left-0 mt-2 w-32 bg-slate-800 border border-slate-700 rounded-2xl shadow-xl z-30 py-2">
                                                {['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].map(h => (
                                                    <button
                                                        key={h}
                                                        type="button"
                                                        onClick={() => {
                                                            insertHtmlTag(h.toLowerCase());
                                                            setIsHeadingsOpen(false);
                                                        }}
                                                        className="w-full text-left px-4 py-1.5 text-xs font-bold text-slate-200 hover:bg-blue-600 hover:text-white transition-colors"
                                                    >
                                                        {h}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Para */}
                                    <button
                                        type="button"
                                        onClick={() => insertHtmlTag('p', true)}
                                        className="toolbar-btn text-xs font-extrabold text-slate-200 bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-xl border border-slate-700"
                                    >
                                        ¶ Para
                                    </button>

                                    {/* Link */}
                                    <button
                                        type="button"
                                        onClick={() => insertHtmlTag('a', true)}
                                        className="toolbar-btn text-xs font-extrabold text-slate-200 bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-xl border border-slate-700"
                                    >
                                        🔗 Link
                                    </button>

                                    {/* Bold */}
                                    <button
                                        type="button"
                                        onClick={() => insertHtmlTag('strong', true)}
                                        className="toolbar-btn text-xs font-extrabold text-slate-200 bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-xl border border-slate-700"
                                    >
                                        B Bold
                                    </button>

                                    {/* Italic */}
                                    <button
                                        type="button"
                                        onClick={() => insertHtmlTag('em', true)}
                                        className="toolbar-btn text-xs font-extrabold text-slate-200 bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-xl border border-slate-700"
                                    >
                                        I Italic
                                    </button>

                                    {/* List */}
                                    <button
                                        type="button"
                                        onClick={() => insertHtmlTag('ul', true)}
                                        className="toolbar-btn text-xs font-extrabold text-slate-200 bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-xl border border-slate-700"
                                    >
                                        : List
                                    </button>

                                    <div className="flex items-center gap-2 ml-auto">
                                        {/* Add CTA Block */}
                                        <button
                                            type="button"
                                            onClick={handleAddCtaBlock}
                                            className="toolbar-cta-btn bg-[#601FEA] hover:bg-[#4a15ba] text-white font-extrabold text-xs px-3.5 py-2 rounded-xl border border-purple-500 shadow-sm"
                                        >
                                            + Add CTA Block
                                        </button>

                                        {/* Add Table */}
                                        <button
                                            type="button"
                                            onClick={handleAddTable}
                                            className="toolbar-table-btn bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl border border-emerald-500 shadow-sm flex items-center gap-1"
                                        >
                                            <span>⊞</span>
                                            <span>Add Table</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Text Area Editor Body */}
                                <textarea
                                    ref={textareaRef}
                                    rows="14"
                                    value={content}
                                    onChange={e => setContent(e.target.value)}
                                    placeholder="<h2>Introduction</h2><p>Your content here...</p>"
                                    className="dark-editor-textarea w-full bg-slate-950 text-slate-200 font-mono text-sm p-5 outline-none resize-y"
                                ></textarea>
                            </div>
                        </div>

                        {/* Card 3: FAQ Management */}
                        <div className="form-card-box p-6 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-xl space-y-5">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="card-icon-wrapper bg-purple-50 text-[#601FEA] p-2.5 rounded-2xl font-extrabold">
                                    <FiHelpCircle className="text-xl" />
                                </div>
                                <h2 className="text-2xl font-extrabold text-slate-900">FAQ Management</h2>
                            </div>

                            <div className="space-y-4 bg-slate-50/70 p-5 rounded-3xl border border-slate-150">
                                <input
                                    type="text"
                                    placeholder="Question"
                                    value={faqQuestion}
                                    onChange={e => setFaqQuestion(e.target.value)}
                                    className="styled-form-input bg-white"
                                />

                                <input
                                    type="text"
                                    placeholder="Answer"
                                    value={faqAnswer}
                                    onChange={e => setFaqAnswer(e.target.value)}
                                    className="styled-form-input bg-white"
                                />

                                <button
                                    type="button"
                                    onClick={handleAddFaq}
                                    className="w-full py-4 bg-[#601FEA] hover:bg-[#4a15ba] text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <FiPlus className="text-lg" />
                                    <span>Add FAQ Item</span>
                                </button>
                            </div>
                        </div>

                        {/* Publish Big Action Button */}
                        <button
                            type="button"
                            disabled={saving}
                            onClick={handlePublishBlog}
                            className="publish-blog-dark-btn w-full py-5 bg-slate-900 hover:bg-slate-950 text-white font-extrabold text-lg rounded-3xl shadow-2xl transition-all flex items-center justify-center gap-3 cursor-pointer"
                        >
                            <FiSave className="text-xl" />
                            <span>{saving ? 'Publishing...' : (id ? 'Update Blog Post' : 'Publish Blog Post')}</span>
                        </button>
                    </div>

                    {/* Right Live Browser Preview Column */}
                    {previewActive && (
                        <div className="lg:col-span-5 sticky top-28">
                            <div className="live-browser-card bg-white rounded-3xl border border-slate-150 shadow-2xl overflow-hidden">

                                {/* Fake Browser Top Bar */}
                                <div className="browser-header bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                                        LIVE BROWSER PREVIEW
                                    </span>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                                    </div>
                                </div>

                                {/* Preview Body Content */}
                                <div className="preview-body p-6 sm:p-8 space-y-5 max-h-[750px] overflow-y-auto">
                                    <h1 className="preview-title text-3xl font-extrabold text-slate-900 leading-tight">
                                        {title || 'Blog Title'}
                                    </h1>

                                    <div className="preview-meta text-xs text-slate-400 font-semibold flex items-center gap-2">
                                        <span>By Admin</span>
                                        <span>•</span>
                                        <span>{new Date().toLocaleDateString('en-US')}</span>
                                    </div>

                                    {image && (
                                        <img
                                            src={image}
                                            alt="Preview Feature"
                                            className="w-full h-48 object-cover rounded-2xl border border-slate-100"
                                            onError={e => { e.target.style.display = 'none'; }}
                                        />
                                    )}

                                    {excerpt && (
                                        <p className="preview-excerpt text-slate-600 font-medium italic border-l-4 border-purple-500 pl-4 py-1">
                                            {excerpt}
                                        </p>
                                    )}

                                    <div className="preview-html-content text-slate-800 text-sm leading-relaxed space-y-4 pt-2">
                                        {content ? (
                                            <div dangerouslySetInnerHTML={{ __html: content }} />
                                        ) : (
                                            <p className="text-slate-400 italic font-serif text-center py-6">
                                                No content yet...
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </main>
    );
};

export default CreateBlog;
