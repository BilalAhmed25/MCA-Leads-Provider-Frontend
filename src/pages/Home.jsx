import HomeHero from '../components/HomeHero';
import PartnerSection from '../components/PartnerSection';
import DriveResultsSection from '../components/DriveResultsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ServicesSection from '../components/ServicesSection';
import LeadGenerationSection from '../components/LeadGenerationSection';
import BenefitsSection from '../components/BenefitsSection';
import StorySection from '../components/StorySection';
import FAQs from '../components/FAQs';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';

const Home = () => {
    return (
        <>
            <HomeHero />
            <PartnerSection />
            <DriveResultsSection />
            <WhyChooseUsSection />
            <ServicesSection />
            <LeadGenerationSection />
            <BenefitsSection />
            <StorySection />
            <Testimonials />
            <FAQs />
            <Contact />
            <BlogSection limit={3} />
        </>
    );
};

export default Home;
