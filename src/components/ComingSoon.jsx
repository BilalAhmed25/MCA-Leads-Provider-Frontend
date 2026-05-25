import { Link } from 'react-router-dom';
import { FiArrowLeft, FiClock } from 'react-icons/fi';
import './ComingSoon.css';

const ComingSoon = ({ title, description }) => {
    return (
        <div className="coming-soon-container">
            {/* Ambient glows */}
            <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-400/10 rounded-full blur-[130px] pointer-events-none"></div>

            <div className="coming-soon-content">
                <div className="coming-soon-badge">
                    <FiClock className="badge-icon" />
                    <span>Under Development</span>
                </div>
                
                <h1 className="coming-soon-title">
                    {title} <span className="highlight">Coming Soon</span>
                </h1>
                
                <p className="coming-soon-description">
                    {description || "We are preparing a fully-designed, premium layout to display our contents. Check back with us shortly."}
                </p>
                
                <div className="coming-soon-actions">
                    <Link to="/" className="coming-soon-btn">
                        <FiArrowLeft className="btn-icon" /> Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
