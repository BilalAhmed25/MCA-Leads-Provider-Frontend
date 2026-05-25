import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './BlogDetail.css';

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [toc, setToc] = useState([]);
    const [contentWithIds, setContentWithIds] = useState("");

    useEffect(() => {
        // Scroll to top when switching blogs
        window.scrollTo(0, 0);

        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => {
                const currentBlog = data.find(b => b.slug === slug);

                if (currentBlog) {
                    // Inject IDs into headings and extract TOC
                    let currentId = 0;
                    const extractedToc = [];
                    const modifiedContent = currentBlog.content.replace(/<h([2-3])[^>]*>(.*?)<\/h\1>/gi, (match, level, text) => {
                        const plainText = text.replace(/<[^>]+>/g, '').trim();
                        const id = `heading-${currentId++}`;
                        extractedToc.push({ id, text: plainText, level: parseInt(level) });
                        return `<h${level} id="${id}">${text}</h${level}>`;
                    });

                    setToc(extractedToc);
                    setContentWithIds(modifiedContent);
                    setBlog(currentBlog);

                    // Get 2 related blogs
                    const others = data.filter(b => b.slug !== slug);
                    setRelatedBlogs(others.slice(0, 2));
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load blog", err);
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-xl font-medium text-slate-500">Loading blog...</div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-xl font-medium text-slate-500">Blog not found.</div>
            </div>
        );
    }

    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHero
                title={blog.title}
                description={`${blog.date} • ${blog.category} • ${blog.readTime}`}
                image={blog.image}
            />

            <section className="py-16 lg:py-24">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                        {/* Left Side: Table of Contents Sidebar */}
                        <aside className="w-full lg:w-[30%] lg:sticky lg:top-28 shrink-0">
                            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                                <h3 className="font-extrabold text-slate-900 mb-6 text-xl">Table of Contents</h3>
                                <ul className="space-y-4">
                                    {toc.map(item => (
                                        <li key={item.id} className={item.level === 3 ? "ml-4" : ""}>
                                            <a
                                                href={`#${item.id}`}
                                                className="text-slate-600 hover:text-primary transition-colors text-sm font-medium leading-relaxed block"
                                            >
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>

                        {/* Right Side: Main Content */}
                        <article className="w-full lg:w-[70%] bg-white p-8 lg:p-14 rounded-[2rem] shadow-sm border border-slate-100">
                            <div
                                className="blog-detail-content"
                                dangerouslySetInnerHTML={{ __html: contentWithIds }}
                            />
                        </article>

                    </div>
                </div>
            </section>

            {/* Related Blogs Section */}
            {relatedBlogs.length > 0 && (
                <section className="py-20 bg-white border-t border-slate-100">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-fluid-3xl lg:text-fluid-4xl font-extrabold text-slate-900">Read Other Blogs</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {relatedBlogs.map(rb => (
                                <Link to={`/blog/${rb.slug}`} key={rb.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col group">
                                    <div className="h-64 overflow-hidden relative">
                                        <img src={rb.image} alt={rb.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm">
                                            {rb.category}
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-snug">{rb.title}</h3>
                                        <div className="mt-auto flex items-center justify-between text-sm text-slate-500 font-medium">
                                            <span>{rb.date} • {rb.readTime}</span>
                                            <span className="font-bold text-primary group-hover:translate-x-2 transition-transform duration-300">Read more &rarr;</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};

export default BlogDetail;
