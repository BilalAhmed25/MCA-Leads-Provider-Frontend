import BlogSection from '../components/BlogSection';
import BlogHero from '../components/BlogHero';

const Blog = () => {
    return (
        <main style={{ backgroundColor: 'var(--white)' }}>
            <BlogHero
                title="Blogs"
                description="Explore our latest industry insights, actionable lead generation strategies, and success stories designed to help your funding business maximize conversions."
                bgImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
            />
            <BlogSection />
        </main>
    );
};

export default Blog;
