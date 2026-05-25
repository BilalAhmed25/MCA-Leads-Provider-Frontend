import BlogSection from '../components/BlogSection';
import PageHero from '../components/PageHero';

const Blog = () => {
    return (
        <main style={{ backgroundColor: 'var(--white)' }}>
            <PageHero
                title="Latest News from MCA Leads Provider"
                description="Explore our latest industry insights, actionable lead generation strategies, and success stories. Our expert team regularly shares valuable tips and in-depth guides designed to help your funding business maximize conversions and scale efficiently."
                image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
            />
            <BlogSection />
        </main>
    );
};

export default Blog;
