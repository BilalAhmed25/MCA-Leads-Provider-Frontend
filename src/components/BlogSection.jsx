import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogSection.css';

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
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetching from the JSON file in the public directory
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => {
                // If limit is provided, slice the array, otherwise use all
                const displayedBlogs = limit ? data.slice(0, limit) : data;
                setBlogs(displayedBlogs);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch blogs", err);
                setLoading(false);
            });
    }, [limit]);

    if (loading) {
        return <div className="blogs-loading">Loading blogs...</div>;
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
                    {blogs.map(blog => (
                        <div className="blog-card" key={blog.id}>
                            <div className="blog-image-wrapper">
                                <img src={blog.image} alt={blog.title} className="blog-image" />
                            </div>
                            <div className="blog-content-wrapper">
                                <h5 className="blog-title">{blog.title}</h5>
                                <p className="blog-html-content">
                                    {stripHtmlAndTruncate(blog.content)}
                                </p>
                                <div className="blog-footer">
                                    <Link to={`/${blog.slug}`} className="blog-read-more">
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {limit && (
                    <div className="blog-view-more-container mt-12 flex justify-center text-center">
                        <Link
                            to="/blog"
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-fluid-base transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            View more blogs
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;
