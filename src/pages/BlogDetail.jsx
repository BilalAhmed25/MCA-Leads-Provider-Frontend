import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import BlogSection from '../components/BlogSection';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import '../components/FAQs.css';
import './BlogDetail.css';

const parseFaqs = (htmlContent) => {
    const faqHeaderRegex = /<h2[^>]*>(?:<strong>)?\s*FAQs\s*(?:<\/strong>)?<\/h2>/i;
    const match = htmlContent.match(faqHeaderRegex);
    
    if (!match) {
        return { content: htmlContent, faqs: [] };
    }
    
    const index = match.index;
    const mainContent = htmlContent.substring(0, index).trim();
    const faqSection = htmlContent.substring(index + match[0].length).trim();
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = faqSection;
    
    const pElements = Array.from(tempDiv.querySelectorAll('p'));
    const faqs = [];
    let currentFaq = null;
    
    pElements.forEach(p => {
        const strong = p.querySelector('strong');
        if (strong) {
            if (currentFaq && currentFaq.question && currentFaq.answer) {
                faqs.push(currentFaq);
            }
            let qText = strong.innerHTML.replace(/^(?:Q|q)?\d+[\.\s\-\:]+\s*/g, '').trim();
            currentFaq = { question: qText, answer: '' };
        } else if (currentFaq) {
            let aHtml = p.innerHTML;
            aHtml = aHtml.replace(/^(?:Ans|ans)[\.\s\-\:]+\s*/g, '').trim();
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
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [toc, setToc] = useState([]);
    const [contentWithIds, setContentWithIds] = useState("");
    const [faqs, setFaqs] = useState([]);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaqIndex(activeFaqIndex === index ? null : index);
    };

    useEffect(() => {
        // Scroll to top when switching blogs
        window.scrollTo(0, 0);

        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => {
                const currentBlog = data.find(b => b.slug === slug);

                if (currentBlog) {
                    // 1. Rewrite absolute URLs to relative URLs to support SPA routing
                    let content = currentBlog.content.replace(/href=["']https?:\/\/mcaleadsprovider\.com\/?([^"']*)["']/gi, 'href="/$1"');

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
                    setBlog(currentBlog);
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
