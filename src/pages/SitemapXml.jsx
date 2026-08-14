import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config';

const SitemapXml = () => {
    const [xmlContent, setXmlContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/noAuth/mca-sitemap.xml`)
            .then(res => res.text())
            .then(data => {
                setXmlContent(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load sitemap:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div style={{ padding: '2rem', fontFamily: 'monospace' }}>Loading dynamic sitemap.xml...</div>;
    }

    return (
        <pre style={{
            margin: 0,
            padding: '24px',
            backgroundColor: '#0f172a',
            color: '#38bdf8',
            fontFamily: 'Consolas, Monaco, monospace',
            fontSize: '14px',
            lineHeight: '1.6',
            minHeight: '100vh',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all'
        }}>
            {xmlContent}
        </pre>
    );
};

export default SitemapXml;
