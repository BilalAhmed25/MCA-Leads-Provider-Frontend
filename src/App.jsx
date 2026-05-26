import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import LiveTransfers from './pages/LiveTransfers';
import CallBacks from './pages/CallBacks';
import AgedLeads from './pages/AgedLeads';
import B2BEmailLists from './pages/B2BEmailLists';
import DigitalMarketing from './pages/DigitalMarketing';
import BusinessLoans from './pages/BusinessLoans';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/mca-live-transfer-leads" element={<LiveTransfers />} />
                <Route path="/mca-callback-leads" element={<CallBacks />} />
                <Route path="/aged-mca-leads" element={<AgedLeads />} />
                <Route path="/business-loan-leads" element={<BusinessLoans />} />
                <Route path="/digital-marketing-leads" element={<DigitalMarketing />} />
                <Route path="/b2b-email-lists" element={<B2BEmailLists />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog">
                    <Route index element={<Blog />} />
                    <Route path=":slug" element={<BlogDetail />} />
                </Route>
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/:slug" element={<BlogDetail />} />
            </Routes>
            <Footer />
            <BackToTop />
        </>
    );
}

export default App;
