import { useEffect } from 'react';

/**
 * Hook to inject <meta name="robots" content="noindex, nofollow" /> on private / dynamic pages
 * like Checkout, Purchase History, and Thank You pages, ensuring clean cleanup when navigating away.
 */
export const useNoIndex = () => {
    useEffect(() => {
        let meta = document.querySelector('meta[name="robots"]');
        let created = false;
        const prevContent = meta ? meta.getAttribute('content') : null;

        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('name', 'robots');
            document.head.appendChild(meta);
            created = true;
        }

        meta.setAttribute('content', 'noindex, nofollow');

        return () => {
            if (created) {
                meta.remove();
            } else if (prevContent !== null) {
                meta.setAttribute('content', prevContent);
            } else {
                meta.removeAttribute('content');
            }
        };
    }, []);
};

export default useNoIndex;
