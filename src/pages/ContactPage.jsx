import Contact from '../components/Contact';
import PageHero from '../components/PageHero';

const ContactPage = () => {
    return (
        <main>
            <PageHero 
                title="Contact Us"
                description="Get in touch with our team of experts today."
                image="https://images.unsplash.com/photo-1516387693574-8451c85d8869?q=80&w=2070&auto=format&fit=crop"
            />
            <Contact />
        </main>
    );
};

export default ContactPage;
