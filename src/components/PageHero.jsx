import { Link } from 'react-router-dom';
import './PageHero.css';

const PageHero = ({ title, description, image }) => {
    return (
        <section className="page-hero">
            <div className="container-custom page-hero-container">
                <div className="page-hero-content">
                    <h1 className="page-hero-title">{title}</h1>
                    <p className="page-hero-description">{description}</p>
                    <div className="page-hero-buttons">
                        <Link to="/contact" className="hero-btn-primary">Get Started</Link>
                        <Link to="/services" className="hero-btn-secondary">Learn More</Link>
                    </div>
                </div>
                <div className="page-hero-image-wrapper">
                    <img src={image} alt={title} className="page-hero-image" />
                </div>
            </div>
        </section>
    );
};

export default PageHero;
