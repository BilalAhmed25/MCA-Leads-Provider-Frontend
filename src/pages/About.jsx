import ComingSoon from '../components/ComingSoon';
import PageHero from '../components/PageHero';

const About = () => {
    return (
        <main>
            <PageHero 
                title="About Us"
                description="We are currently designing a comprehensive overview of our 8+ years history, core values, lead-qualification methodologies, and compliance guidelines."
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            />
            <ComingSoon 
                title="More Content" 
                description="Stay tuned!" 
            />
        </main>
    );
};

export default About;
