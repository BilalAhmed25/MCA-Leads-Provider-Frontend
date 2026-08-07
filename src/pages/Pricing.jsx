import ComingSoon from '../components/ComingSoon';
import PageHero from '../components/PageHero';

const Pricing = () => {
    return (
        <main>
            <PageHero
                title="Plans and Pricing"
                description={
                    <>
                        <a style={{ color: "#601FEA" }} href="/">MCA Leads Provider</a> serves clients and helps them in merchant cash advance lead generation by using the latest marketing tools and techniques. We have modern resources and technology and it helps us to reach the target audience.
                    </>
                }
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
