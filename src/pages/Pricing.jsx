import ComingSoon from '../components/ComingSoon';
import PageHero from '../components/PageHero';

const Pricing = () => {
    return (
        <main>
            <PageHero 
                title="Pricing Plans"
                description="Transparent pricing structures for our exclusive and shared MCA leads."
                image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
            />
            <ComingSoon 
                title="Detailed Tiers" 
                description="Custom pricing tiers, package volumes, and exclusive lead delivery discounts are being structured for you. Stay tuned!" 
            />
        </main>
    );
};

export default Pricing;
