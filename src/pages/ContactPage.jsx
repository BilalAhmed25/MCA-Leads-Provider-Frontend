import Contact from '../components/Contact';
import PageHero from '../components/PageHero';

const ContactPage = () => {
    return (
        <main>
            <PageHero 
                title="Contact Us"
                description="Have questions about our lead generation process or ready to scale your funding business? Get in touch with our dedicated team of experts today. We are always available to discuss custom volume packages, lead criteria, and how we can best support your growth goals."
                image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
            />
            <Contact />
        </main>
    );
};

export default ContactPage;
