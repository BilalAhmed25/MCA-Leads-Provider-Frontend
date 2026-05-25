import ComingSoon from '../components/ComingSoon';
import PageHero from '../components/PageHero';

const Services = () => {
    return (
        <main>
            <PageHero 
                title="Our Services"
                description="Leverage our specialized suite of MCA lead generation services to dramatically boost your daily conversion rates. From high-intent Live Transfers and verified Aged Data to targeted B2B Email Lists, we provide all the tools necessary to keep your closing team busy and successful."
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            />
            <ComingSoon 
                title="Service Details" 
                description="Detailed breakdowns of our Live Transfers, Call-Back Leads, Aged Leads, and B2B Email Lists are currently under development. Stay tuned!" 
            />
        </main>
    );
};

export default Services;
