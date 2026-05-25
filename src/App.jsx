import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
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
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog">
                    <Route index element={<Blog />} />
                    <Route path=":slug" element={<BlogDetail />} />
                </Route>
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
            <BackToTop />
        </>
    );
}

export default App;
