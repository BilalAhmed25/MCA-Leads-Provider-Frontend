import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BlogSection.css';

import { API_BASE_URL } from '../config';

const stripHtmlAndTruncate = (html, maxLength = 160) => {
    if (!html) return '';
    const cleanText = html.replace(/<[^>]*>/g, ' ');
    const normalized = cleanText.replace(/\s+/g, ' ').trim();
    if (normalized.length > maxLength) {
        return normalized.substring(0, maxLength) + '...';
    }
    return normalized;
};

const BlogSection = ({ limit }) => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [prefetchedBlogId, setPrefetchedBlogId] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`${API_BASE_URL}/noAuth/mca-blogs`)
            .then(res => res.json())
            .then(data => {
                if (data.success && data.blogs) {
                    const displayedBlogs = (limit ? data.blogs.slice(0, limit) : data.blogs).map(b => ({
                        ...b,
                        title: (b.title || '').replace(/&amp;/g, '&'),
                        excerpt: (b.excerpt || '').replace(/&amp;/g, '&')
                    }));
                    setBlogs(displayedBlogs);
                } else {
                    setBlogs([]);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch blogs from database API:", err);
                setBlogs([]);
                setLoading(false);
            });
    }, [limit]);

    const handleBlogCardClick = async (e, blog) => {
        e.preventDefault();
        if (prefetchedBlogId) return; // Prevent double clicks
        setPrefetchedBlogId(blog.id);

        try {
            // Fetch full blog details in background while button shows loader
            const res = await fetch(`${API_BASE_URL}/noAuth/mca-blogs/${blog.slug}`);
            const data = await res.json();

            if (data.success && data.blog) {
                // Navigate immediately passing prefetched blog in router state
                navigate(`/${blog.slug}/`, { state: { prefetchedBlog: data.blog } });
            } else {
                // Fallback direct navigate
                navigate(`/${blog.slug}/`, { state: { prefetchedBlog: blog } });
            }
        } catch (err) {
            console.error("Error prefetching blog detail:", err);
            navigate(`/${blog.slug}/`, { state: { prefetchedBlog: blog } });
        } finally {
            setPrefetchedBlogId(null);
        }
    };

    const skeletonCount = limit || 6;

    if (loading) {
        return (
            <section className="blog-section">
                <div className="container-custom">
                    {limit && (
                        <div className="blog-header max-w-4xl mx-auto text-center mb-12">
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-wider uppercase mb-3">
                                Our Blogs
                            </span>
                            <h4 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 leading-tight">
                                Insights & Tips for Growing Your MCA Business
                            </h4>
                        </div>
                    )}
                    <div className="blog-grid">
                        {Array.from({ length: skeletonCount }).map((_, idx) => (
                            <div className="blog-card skeleton-card" key={idx}>
                                <div className="blog-image-wrapper">
                                    <div className="skeleton-box skeleton-image"></div>
                                </div>
                                <div className="blog-content-wrapper">
                                    <div className="skeleton-box skeleton-title"></div>
                                    <div className="skeleton-box skeleton-title-short"></div>
                                    <div className="skeleton-box skeleton-text"></div>
                                    <div className="skeleton-box skeleton-text"></div>
                                    <div className="skeleton-box skeleton-text-short"></div>
                                    <div className="blog-footer">
                                        <div className="skeleton-box skeleton-button"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="blog-section">
            <div className="container-custom">
                {limit && (
                    <div className="blog-header max-w-4xl mx-auto text-center mb-12">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-wider uppercase mb-3">
                            Our Blogs
                        </span>
                        <h4 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 leading-tight">
                            Insights & Tips for Growing Your MCA Business
                        </h4>
                    </div>
                )}

                <div className="blog-grid">
                    {blogs.map(blog => {
                        const isThisBlogLoading = prefetchedBlogId === blog.id;
                        return (
                            <div
                                className={`blog-card cursor-pointer ${isThisBlogLoading ? 'blog-card-loading' : ''}`}
                                key={blog.id}
                                onClick={(e) => handleBlogCardClick(e, blog)}
                            >
                                <div className="blog-image-wrapper">
                                    <img
                                        src={blog.image || blog.featured_image || "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"}
                                        alt={blog.title}
                                        className="blog-image"
                                    />
                                </div>
                                <div className="blog-content-wrapper">
                                    <h5 className="blog-title">{blog.title}</h5>
                                    <p className="blog-html-content">
                                        {stripHtmlAndTruncate(blog.content)}
                                    </p>
                                    <div className="blog-footer">
                                        <button
                                            type="button"
                                            className={`blog-read-more ${isThisBlogLoading ? 'loading' : ''}`}
                                            disabled={isThisBlogLoading}
                                        >
                                            {isThisBlogLoading ? (
                                                <span className="read-more-spinner-wrapper">
                                                    <span className="read-more-spinner"></span>
                                                    Loading...
                                                </span>
                                            ) : (
                                                'Read More'
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {limit && (
                    <div className="blog-view-more-container mt-12 flex justify-center text-center">
                        <Link
                            to="/blog/"
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-fluid-base transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            View More Blogs
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;
