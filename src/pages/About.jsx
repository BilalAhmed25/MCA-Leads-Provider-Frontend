import ComingSoon from '../components/ComingSoon';
import PageHero from '../components/PageHero';

const About = () => {
    return (
        <main>
            <PageHero 
                title="About Us"
                description="With over 8 years of dedicated experience in the MCA industry, our team is committed to delivering unparalleled lead quality. We pride ourselves on strict compliance, innovative qualification methodologies, and a core mission to empower funding businesses with the most reliable prospects."
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
