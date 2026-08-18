import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';
import BlogSection from '../components/BlogSection';
import NotFound from './NotFound';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { API_BASE_URL } from '../config';
import '../components/FAQs.css';
import './BlogDetail.css';

const parseFaqs = (htmlContent) => {
    const faqHeaderRegex = /<h2[^>]*>(?:<strong>)?\s*(?:Frequently Asked Questions|FAQs)\s*(?:<\/strong>)?<\/h2>/i;
    const match = htmlContent.match(faqHeaderRegex);

    let mainContent = htmlContent;
    let faqSection = '';

    if (match) {
        const index = match.index;
        mainContent = htmlContent.substring(0, index).trim();
        faqSection = htmlContent.substring(index + match[0].length).trim();
    } else {
        // Check if there are inline div.faq-item blocks in the HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        const faqItems = tempDiv.querySelectorAll('.faq-item');
        if (faqItems.length > 0) {
            const faqs = [];
            faqItems.forEach(item => {
                const qEl = item.querySelector('h4, h3, strong, p');
                const aEl = item.querySelector('p:last-child, div');
                let qText = qEl ? qEl.innerHTML.replace(/^(?:Q|q)?\d*[\.\s\-\:]+\s*/g, '').trim() : '';
                let aText = aEl ? aEl.innerHTML.replace(/^(?:Ans|A|a)?[\.\s\-\:]+\s*/g, '').trim() : '';
                if (qText) faqs.push({ question: qText, answer: aText });
            });
            // Remove div.faq-item elements from mainContent
            faqItems.forEach(el => el.remove());
            return { content: tempDiv.innerHTML, faqs };
        }
    }

    if (!faqSection) {
        return { content: htmlContent, faqs: [] };
    }

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = faqSection;

    const pElements = Array.from(tempDiv.querySelectorAll('p, div.faq-item'));
    const faqs = [];
    let currentFaq = null;

    pElements.forEach(p => {
        const strong = p.querySelector('strong, h4, h3');
        if (strong) {
            if (currentFaq && currentFaq.question && currentFaq.answer) {
                faqs.push(currentFaq);
            }
            let qText = strong.innerHTML.replace(/^(?:Q|q)?\d*[\.\s\-\:]+\s*/g, '').trim();
            currentFaq = { question: qText, answer: '' };
        } else if (currentFaq) {
            let aHtml = p.innerHTML;
            aHtml = aHtml.replace(/^(?:Ans|A|a)[\.\s\-\:]+\s*/g, '').trim();
            if (currentFaq.answer) {
                currentFaq.answer += `<p>${aHtml}</p>`;
            } else {
                currentFaq.answer = aHtml;
            }
        }
    });

    if (currentFaq && currentFaq.question && currentFaq.answer) {
        faqs.push(currentFaq);
    }

    return { content: mainContent, faqs };
};

const BlogDetail = () => {
    const { slug: rawSlug } = useParams();
    const slug = (rawSlug || '').replace(/^\/+|\/+$/g, '');
    const location = useLocation();
    const prefetched = location.state?.prefetchedBlog;

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(!prefetched);
    const [toc, setToc] = useState([]);
    const [contentWithIds, setContentWithIds] = useState("");
    const [faqs, setFaqs] = useState([]);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaqIndex(activeFaqIndex === index ? null : index);
    };

    const processBlogData = (currentBlog) => {
        if (!currentBlog) return;

        // Ensure date formatting
        let formattedDate = currentBlog.date;
        if (!formattedDate && currentBlog.published_date) {
            const d = new Date(currentBlog.published_date);
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            formattedDate = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        }

        const cleanTitle = (currentBlog.title || '').replace(/&amp;/g, '&');
        const dbExcerpt = currentBlog.excerpt || currentBlog.meta_description || currentBlog.metaDescription || currentBlog.short_description || currentBlog.description || '';
        const cleanExcerpt = dbExcerpt.replace(/&amp;/g, '&').replace(/<[^>]*>/g, '').trim();

        const blogObj = {
            ...currentBlog,
            title: cleanTitle,
            excerpt: cleanExcerpt,
            date: formattedDate || "Recent",
            category: currentBlog.category || "MCA Leads",
            readTime: currentBlog.readTime || "5 min read",
            image: currentBlog.image || currentBlog.featured_image || "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
        };

        // 1. Rewrite absolute URLs to relative URLs and clean &amp; entities
        let content = (blogObj.content || '').replace(/&amp;/g, '&').replace(/href=["']https?:\/\/mcaleadsprovider\.com\/?([^"']*)["']/gi, 'href="/$1"');

        // 2. Parse FAQs out of the content
        const parsed = parseFaqs(content);

        // 3. Inject IDs into headings and extract TOC on main content
        let currentId = 0;
        const extractedToc = [];
        const contentWithHeadingIds = parsed.content.replace(/<h([2-3])[^>]*>(.*?)<\/h\1>/gi, (match, level, text) => {
            const plainText = text.replace(/<[^>]+>/g, '').trim();
            const id = `heading-${currentId++}`;
            extractedToc.push({ id, text: plainText, level: parseInt(level) });
            return `<h${level} id="${id}">${text}</h${level}>`;
        });

        setToc(extractedToc);
        setContentWithIds(contentWithHeadingIds);
        setFaqs(parsed.faqs);
        setActiveFaqIndex(null);
        setBlog(blogObj);

        // 1. Format Meta Title (Remove "| MCA Leads Provider" suffix)
        const rawTitle = currentBlog.meta_title || currentBlog.metaTitle || currentBlog.title || '';
        const cleanMetaTitle = rawTitle
            .replace(/\s*\|\s*MCA Leads Provider/gi, '')
            .replace(/\s*-\s*MCA Leads Provider/gi, '')
            .replace(/&amp;/g, '&')
            .trim();

        // 2. Format Meta Description from database fields
        const rawDesc = currentBlog.excerpt || 
                        currentBlog.meta_description || 
                        currentBlog.metaDescription || 
                        currentBlog.short_description || 
                        currentBlog.description || 
                        '';
        const cleanMetaDesc = rawDesc
            .replace(/<[^>]*>/g, '')
            .replace(/&amp;/g, '&')
            .replace(/\s+/g, ' ')
            .trim();

        // Update Document Title (without | MCA Leads Provider)
        document.title = cleanMetaTitle;

        // Update Meta Description
        let metaDescriptionTag = document.querySelector('meta[name="description"]');
        if (!metaDescriptionTag) {
            metaDescriptionTag = document.createElement('meta');
            metaDescriptionTag.setAttribute('name', 'description');
            document.head.appendChild(metaDescriptionTag);
        }
        metaDescriptionTag.setAttribute('content', cleanMetaDesc);

        // Update OpenGraph Title & Description
        let ogTitleTag = document.querySelector('meta[property="og:title"]');
        if (!ogTitleTag) {
            ogTitleTag = document.createElement('meta');
            ogTitleTag.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitleTag);
        }
        ogTitleTag.setAttribute('content', cleanMetaTitle);

        let ogDescTag = document.querySelector('meta[property="og:description"]');
        if (!ogDescTag) {
            ogDescTag = document.createElement('meta');
            ogDescTag.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescTag);
        }
        ogDescTag.setAttribute('content', cleanMetaDesc);

        // Update Twitter Meta Tags
        let twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
        if (!twitterTitleTag) {
            twitterTitleTag = document.createElement('meta');
            twitterTitleTag.setAttribute('name', 'twitter:title');
            document.head.appendChild(twitterTitleTag);
        }
        twitterTitleTag.setAttribute('content', cleanMetaTitle);

        let twitterDescTag = document.querySelector('meta[name="twitter:description"]');
        if (!twitterDescTag) {
            twitterDescTag = document.createElement('meta');
            twitterDescTag.setAttribute('name', 'twitter:description');
            document.head.appendChild(twitterDescTag);
        }
        twitterDescTag.setAttribute('content', cleanMetaDesc);

        // Update Canonical Link
        let canonicalTag = document.querySelector('link[rel="canonical"]');
        if (!canonicalTag) {
            canonicalTag = document.createElement('link');
            canonicalTag.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalTag);
        }
        const canonicalUrl = `https://mcaleadsprovider.com/${(blogObj.slug || slug || '').replace(/^\/+|\/+$/g, '')}/`;
        canonicalTag.setAttribute('href', canonicalUrl);
    };

    useEffect(() => {
        // Scroll to top when switching blogs
        window.scrollTo(0, 0);

        setLoading(true);
        fetch(`${API_BASE_URL}/noAuth/mca-blogs/${slug}`)
            .then(res => res.json())
            .then(data => {
                if (data.success && data.blog) {
                    processBlogData(data.blog);
                    setLoading(false);
                } else if (prefetched) {
                    processBlogData(prefetched);
                    setLoading(false);
                } else {
                    throw new Error("Blog not found in database");
                }
            })
            .catch(err => {
                console.error("Failed to fetch blog from database API:", err);
                if (prefetched) {
                    processBlogData(prefetched);
                } else {
                    setBlog(null);
                }
                setLoading(false);
            });
    }, [slug]);

    const handleTocClick = (e, headingId) => {
        e.preventDefault();
        const targetEl = document.getElementById(headingId);
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (loading) {
        return (
            <main className="bg-slate-50 min-h-screen">
                <section className="page-hero bg-slate-900/90 py-16">
                    <div className="container-custom page-hero-container flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/2 space-y-4">
                            <div className="skeleton-box h-10 w-3/4 bg-slate-700/60 rounded-xl"></div>
                            <div className="skeleton-box h-5 w-1/2 bg-slate-700/40 rounded-lg"></div>
                        </div>
                        <div className="w-full md:w-1/2 h-64">
                            <div className="skeleton-box w-full h-full bg-slate-700/50 rounded-3xl"></div>
                        </div>
                    </div>
                </section>

                <section className="py-8 lg:py-12">
                    <div className="container-custom">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                            <aside className="hidden lg:block w-full lg:w-[30%] shrink-0">
                                <div className="bg-white p-8 rounded-4xl border border-slate-100 space-y-4">
                                    <div className="skeleton-box h-6 w-1/2 mb-6"></div>
                                    <div className="skeleton-box h-4 w-5/6"></div>
                                    <div className="skeleton-box h-4 w-4/6"></div>
                                    <div className="skeleton-box h-4 w-5/6"></div>
                                    <div className="skeleton-box h-4 w-3/4"></div>
                                </div>
                            </aside>

                            <article className="w-full lg:w-[70%] bg-white p-8 lg:p-14 rounded-4xl border border-slate-100 space-y-4">
                                <div className="skeleton-box h-8 w-2/3 mb-6"></div>
                                <div className="skeleton-box h-4 w-full"></div>
                                <div className="skeleton-box h-4 w-full"></div>
                                <div className="skeleton-box h-4 w-4/5"></div>
                                <div className="skeleton-box h-4 w-full mt-6"></div>
                                <div className="skeleton-box h-4 w-11/12"></div>
                                <div className="skeleton-box h-4 w-3/4"></div>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    if (!blog) {
        return <NotFound />;
    }

    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHero
                title={blog.title}
                description={`${blog.date} • ${blog.category} • ${blog.readTime}`}
                image={blog.image}
            />

            <section className="py-8 lg:py-12">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                        {/* Left Side: Table of Contents Sidebar */}
                        <aside className="hidden lg:block w-full lg:w-[30%] lg:sticky lg:top-28 shrink-0">
                            <div className="bg-white p-8 rounded-4xl border border-slate-100">
                                <h3 className="font-extrabold text-slate-900 mb-6 text-xl">Table of Contents</h3>
                                <ul className="space-y-4">
                                    {toc.map(item => (
                                        <li key={item.id} className={item.level === 3 ? "ml-4" : ""}>
                                            <a
                                                href={`#${item.id}`}
                                                onClick={(e) => handleTocClick(e, item.id)}
                                                className="toc-clean-link cursor-pointer"
                                            >
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>

                        {/* Right Side: Main Content */}
                        <article className="w-full lg:w-[70%] bg-white p-8 lg:p-14 rounded-4xl border border-slate-100">
                            <div
                                className="blog-detail-content"
                                dangerouslySetInnerHTML={{ __html: contentWithIds }}
                            />

                            {faqs && faqs.length > 0 && (
                                <div className="blog-faqs-wrapper mt-12 pt-10 border-t border-slate-100">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-left">Frequently Asked Questions</h2>
                                    <div className="faqs-accordion-col">
                                        {faqs.map((item, index) => {
                                            const isOpen = activeFaqIndex === index;
                                            return (
                                                <div
                                                    key={index}
                                                    className={`faq-item ${isOpen ? 'active' : ''}`}
                                                    onClick={() => toggleFaq(index)}
                                                >
                                                    <div className="faq-question-row">
                                                        <h3 className="faq-question-text">{item.question}</h3>
                                                        <div className={`faq-icon-circle ${isOpen ? 'open' : ''}`}>
                                                            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                                                        </div>
                                                    </div>
                                                    <div className={`faq-answer-pane ${isOpen ? 'open' : ''}`}>
                                                        <div className="faq-answer-inner">
                                                            <div
                                                                className="text-slate-600 text-fluid-base leading-relaxed text-left"
                                                                dangerouslySetInnerHTML={{ __html: item.answer }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </article>

                    </div>
                </div>
            </section>

            {/* Related Blogs Section */}
            <BlogSection limit={3} />
        </main>
    );
};

export default BlogDetail;
