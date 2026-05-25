import { useState, useEffect } from 'react';
import './BlogSection.css';

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
                <div className="blog-header">
                    <h2>Latest Insights</h2>
                    <p>Discover tips, strategies, and stories from our expert team.</p>
                </div>

                <div className="blog-grid">
                    {blogs.map(blog => (
                        <div className="blog-card" key={blog.id}>
                            <div className="blog-image-wrapper">
                                <img src={blog.image} alt={blog.title} className="blog-image" />
                            </div>
                            <div className="blog-content-wrapper">
                                <div className="blog-category-badge">
                                    <span className="blog-category-dot"></span>
                                    {blog.category}
                                </div>
                                <h3 className="blog-title">{blog.title}</h3>
                                <div
                                    className="blog-html-content"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />
                                <div className="blog-footer">
                                    <div className="blog-meta">
                                        {blog.date} &bull; {blog.readTime}
                                    </div>
                                    <a href={`#blog-${blog.id}`} className="blog-read-more">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
