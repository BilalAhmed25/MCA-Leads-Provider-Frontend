const https = require('https');
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');
const fs = require('fs');

const urls = [
    "https://mcaleadsprovider.com/how-to-generate-high-converting-mca-leads-in-2025/",
    "https://mcaleadsprovider.com/how-to-generate-high-converting-mca-leads/",
    "https://mcaleadsprovider.com/shared-vs-exclusive-mca-leads/",
    "https://mcaleadsprovider.com/what-are-shared-mca-leads-and-what-is-the-importance-of-using-them/",
    "https://mcaleadsprovider.com/what-are-merchant-cash-advance-leads-and-when-should-you-use-them/"
];

const fetchUrl = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
};

const run = async () => {
    let blogs = [];
    let id = 1;
    for (const url of urls) {
        console.log("Fetching: " + url);
        const html = await fetchUrl(url);
        const dom = new JSDOM(html, { url });
        const document = dom.window.document;

        // Remove typical Elementor table of contents
        document.querySelectorAll('.elementor-widget-table-of-contents').forEach(el => el.remove());
        
        // Remove Contact Us, Recent Posts, sidebars if recognizable
        document.querySelectorAll('form, .widget_recent_entries, .elementor-widget-recent-posts').forEach(el => el.remove());

        // Also remove elements containing "Recent Post" or "CONTACT US"
        document.querySelectorAll('h2, h3, h4, span, div').forEach(el => {
            const text = el.textContent.trim().toUpperCase();
            if ((text === 'RECENT POSTS' || text === 'RECENT POST' || text === 'CONTACT US' || text === 'TABLE OF CONTENTS') && el.parentElement) {
                // Try to remove the whole section or widget wrapper if possible, otherwise just the element
                let parent = el.closest('.elementor-widget-wrap, .elementor-column, section, aside');
                if (parent) {
                    parent.remove();
                } else {
                    el.remove();
                }
            }
        });

        // Extract metadata
        let image = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop";
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) {
            image = ogImage.getAttribute('content');
        }

        let date = "Oct " + id;
        const pubDate = document.querySelector('meta[property="article:published_time"]');
        if (pubDate) {
            const d = new Date(pubDate.getAttribute('content'));
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            date = months[d.getMonth()] + " " + d.getDate();
        }

        let reader = new Readability(document);
        let article = reader.parse();

        let contentHtml = article ? article.content : "<p>Failed to parse content</p>";
        let title = article ? article.title : "Unknown Title";

        // Remove CSS classes and inline styles from the HTML structure
        const contentDom = new JSDOM(contentHtml);
        contentDom.window.document.querySelectorAll('*').forEach(el => {
            el.removeAttribute('class');
            el.removeAttribute('id');
            el.removeAttribute('style');
            
            // Remove empty divs/spans created by Elementor
            if ((el.tagName === 'DIV' || el.tagName === 'SPAN') && el.innerHTML.trim() === '') {
                el.remove();
            }
        });

        let cleanHtml = contentDom.window.document.body.innerHTML;

        blogs.push({
            id: id++,
            image: image,
            category: "MCA Leads",
            title: title,
            content: cleanHtml,
            date: date,
            readTime: "5 min read"
        });
    }

    fs.writeFileSync('public/blogs.json', JSON.stringify(blogs, null, 2));
    console.log("Successfully written to public/blogs.json");
};

run().catch(console.error);
