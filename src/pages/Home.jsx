import HomeHero from '../components/HomeHero';
import FAQs from '../components/FAQs';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';

const Home = () => {
    return (
        <>
            <HomeHero />
            <Testimonials />
            <FAQs />
            <Contact />
            <BlogSection limit={3} />
        </>
    );
};

export default Home;
