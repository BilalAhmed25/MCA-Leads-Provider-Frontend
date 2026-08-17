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
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import PurchaseHistory from './pages/PurchaseHistory';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import ManageUsers from './pages/ManageUsers';
import ManageBlogs from './pages/ManageBlogs';
import CreateBlog from './pages/CreateBlog';
import AddLeads from './pages/AddLeads';
import ContactPage from './pages/ContactPage';
import SitemapXml from './pages/SitemapXml';
import NotFound from './pages/NotFound';
import { AuthProvider } from './context/AuthContext';
import './index.css';

function App() {
    return (
        <AuthProvider>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/" element={<Services />} />
                <Route path="/mca-live-transfer-leads" element={<LiveTransfers />} />
                <Route path="/mca-live-transfer-leads/" element={<LiveTransfers />} />
                <Route path="/mca-callback-leads" element={<CallBacks />} />
                <Route path="/mca-callback-leads/" element={<CallBacks />} />
                <Route path="/aged-mca-leads" element={<AgedLeads />} />
                <Route path="/aged-mca-leads/" element={<AgedLeads />} />
                <Route path="/business-loan-leads" element={<BusinessLoans />} />
                <Route path="/business-loan-leads/" element={<BusinessLoans />} />
                <Route path="/digital-marketing-leads" element={<DigitalMarketing />} />
                <Route path="/digital-marketing-leads/" element={<DigitalMarketing />} />
                <Route path="/b2b-email-lists" element={<B2BEmailLists />} />
                <Route path="/b2b-email-lists/" element={<B2BEmailLists />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/pricing/" element={<Pricing />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkout/" element={<Checkout />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/thank-you/" element={<ThankYou />} />
                <Route path="/purchase-history" element={<PurchaseHistory />} />
                <Route path="/purchase-history/" element={<PurchaseHistory />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/" element={<Blog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register/" element={<Register />} />
                <Route path="/manage-users" element={<ManageUsers />} />
                <Route path="/manage-users/" element={<ManageUsers />} />
                <Route path="/manage-blogs" element={<ManageBlogs />} />
                <Route path="/manage-blogs/" element={<ManageBlogs />} />
                <Route path="/add-leads" element={<AddLeads />} />
                <Route path="/add-leads/" element={<AddLeads />} />
                <Route path="/edit-lead/:id" element={<AddLeads />} />
                <Route path="/edit-lead/:id/" element={<AddLeads />} />
                <Route path="/create-blog" element={<CreateBlog />} />
                <Route path="/create-blog/" element={<CreateBlog />} />
                <Route path="/edit-blog/:id" element={<CreateBlog />} />
                <Route path="/edit-blog/:id/" element={<CreateBlog />} />
                <Route path="/contact-us" element={<ContactPage />} />
                <Route path="/contact-us/" element={<ContactPage />} />
                <Route path="/sitemap.xml" element={<SitemapXml />} />
                <Route path="/sitemap" element={<SitemapXml />} />
                <Route path="/:slug" element={<BlogDetail />} />
                <Route path="/:slug/" element={<BlogDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <BackToTop />
        </AuthProvider>
    );
}

export default App;
