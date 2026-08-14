import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_METADATA } from '../metaData';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        // Normalize pathname (with trailing slash)
        const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
        const meta = PAGE_METADATA[normalizedPath] || PAGE_METADATA[pathname];

        if (meta) {
            // 1. Update Title
            if (meta.title) {
                document.title = meta.title;
            }

            // 2. Update Meta Description
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.setAttribute('name', 'description');
                document.head.appendChild(metaDesc);
            }
            metaDesc.setAttribute('content', meta.description || '');

            // 3. Update OpenGraph Tags
            let ogTitle = document.querySelector('meta[property="og:title"]');
            if (!ogTitle) {
                ogTitle = document.createElement('meta');
                ogTitle.setAttribute('property', 'og:title');
                document.head.appendChild(ogTitle);
            }
            ogTitle.setAttribute('content', meta.title || '');

            let ogDesc = document.querySelector('meta[property="og:description"]');
            if (!ogDesc) {
                ogDesc = document.createElement('meta');
                ogDesc.setAttribute('property', 'og:description');
                document.head.appendChild(ogDesc);
            }
            ogDesc.setAttribute('content', meta.description || '');

            // 4. Update Canonical Link
            let canonical = document.querySelector('link[rel="canonical"]');
            if (!canonical) {
                canonical = document.createElement('link');
                canonical.setAttribute('rel', 'canonical');
                document.head.appendChild(canonical);
            }
            canonical.setAttribute('href', meta.canonical || `https://mcaleadsprovider.com${normalizedPath}`);
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
