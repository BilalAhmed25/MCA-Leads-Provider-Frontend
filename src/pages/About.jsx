import PageHero from '../components/PageHero';
import StorySection from '../components/StorySection';
import BenefitsSection from '../components/BenefitsSection';
import DriveResultsSection from '../components/DriveResultsSection';
import Contact from '../components/Contact';

const About = () => {
    return (
        <main>
            <PageHero
                title="About MCA Leads Provider"
                description="With over 8 years of dedicated experience in the MCA industry, our team is committed to delivering unparalleled lead quality. We pride ourselves on strict compliance, innovative qualification methodologies, and a core mission to empower funding businesses with the most reliable prospects."
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            />
            <StorySection />
            <BenefitsSection />
            <DriveResultsSection 
                title="Our Mission"
                paragraphs={[
                    "The main objective of our company is to provide funding companies with high-quality MCA leads that generate authentic business outcomes. We are committed to helping our clients connect with businesses actively for merchant cash advances through trustworthy data, innovative methods, and client-focused solutions. We are known for our lead quality. We’ve been helping lenders grow their funding business since 2016. MCA Leads Provider targets merchants who are in need of financing and are looking for working capital.",
                    "We believe that lead creation should be unique, parallel, and in line with your growth objectives. That is the reason we collaborate extensively with each client to fully understand their needs and give MCA leads that meet their specific criteria. From call-verified prospects to proven UCC lists, we want to provide you with the highest opportunity of closing business.",
                    "The MCA leads provider is committed to innovation, service excellence, and ongoing improvement. As your go-to source for MCA leads, we want to be more than simply a provider; we want to be a long-term collaborator in your success."
                ]}
                buttonText="Get your leads"
                buttonLink="/contact"
            />
            <Contact />
        </main>
    );
};

export default About;
