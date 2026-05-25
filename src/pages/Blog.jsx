import BlogSection from '../components/BlogSection';
import PageHero from '../components/PageHero';

const Blog = () => {
    return (
        <main style={{ backgroundColor: 'var(--white)' }}>
            <PageHero 
                title="Company Blog"
                description="Discover tips, strategies, and stories from our expert team."
                image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
            />
            <BlogSection />
        </main>
    );
};

export default Blog;
