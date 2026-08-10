import { useState, useRef, useEffect } from 'react';
import { defaultTestimonialsData } from '../data/testimonialsData';
import './Testimonials.css';

const Testimonials = ({
    items,
    badge = "Testimonials",
    title = "See What Our Clients Think About Us!",
    description = "MCA Leads Provider strives to give the finest client experience to consumers. We prioritize client satisfaction and welcome comments."
}) => {
    const list = items && items.length > 0 ? items : defaultTestimonialsData;
    const displayData = [...list, ...list, ...list];
    const totalOriginal = list.length;

    const [currentIndex, setCurrentIndex] = useState(totalOriginal);
    const sliderRef = useRef(null);

    // Reset index if items list changes dynamically
    useEffect(() => {
        setCurrentIndex(list.length);
    }, [list.length]);

    // Auto slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 4000);
        return () => clearInterval(interval);
    }, [list.length]);

    useEffect(() => {
        if (sliderRef.current) {
            const cards = sliderRef.current.querySelectorAll('.testimonial-card-wrapper');
            const container = sliderRef.current;

            if (cards[currentIndex]) {
                const scrollToCard = (index, smooth = true) => {
                    const targetCard = cards[index];
                    if (!targetCard) return;

                    // Calculate center position relative to the container
                    const scrollLeft = targetCard.offsetLeft - (container.offsetWidth / 2) + (targetCard.offsetWidth / 2);

                    if (smooth) {
                        container.style.scrollBehavior = 'smooth';
                        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
                    } else {
                        container.style.scrollBehavior = 'auto';
                        container.scrollTo({ left: scrollLeft, behavior: 'auto' });
                    }
                };

                // Check if we reached the 3rd set
                if (currentIndex >= totalOriginal * 2) {
                    scrollToCard(currentIndex, true);

                    // Silently jump back to the 2nd set after scroll completes
                    setTimeout(() => {
                        if (sliderRef.current) {
                            const jumpIndex = currentIndex - totalOriginal;
                            scrollToCard(jumpIndex, false);
                            setCurrentIndex(jumpIndex);
                        }
                    }, 800);
                }
                // Check if we jumped backwards into the 1st set (e.g. by manual dot click)
                else if (currentIndex < totalOriginal) {
                    scrollToCard(currentIndex, true);

                    setTimeout(() => {
                        if (sliderRef.current) {
                            const jumpIndex = currentIndex + totalOriginal;
                            scrollToCard(jumpIndex, false);
                            setCurrentIndex(jumpIndex);
                        }
                    }, 800);
                }
                // Normal scrolling inside the middle set
                else {
                    scrollToCard(currentIndex, true);
                }
            }
        }
    }, [currentIndex, totalOriginal]);

    const handleDotClick = (idx) => {
        // Go to the corresponding item in the middle set
        setCurrentIndex(totalOriginal + idx);
    };

    return (
        <section className="testimonials-section container-custom relative z-10">
            <div className="testimonials-header">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-wider uppercase mb-3">
                    {badge}
                </span>
                <h4 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    {title}
                </h4>
                <p className="text-fluid-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
                    {description}
                </p>
            </div>

            <div className="testimonials-slider-container">
                <div className="testimonials-slider" ref={sliderRef}>
                    {displayData.map((testimonial, idx) => (
                        <div className="testimonial-card-wrapper" key={`${testimonial.id}-${idx}`}>
                            <div
                                className="testimonial-backdrop"
                                style={{ backgroundColor: testimonial.bgColor }}
                            ></div>
                            <div className="testimonial-card">
                                <div className="testimonial-image-container">
                                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                                </div>
                                <h3 className="testimonial-name">{testimonial.name}</h3>
                                <span className="testimonial-position">{testimonial.position}</span>
                                <p className="testimonial-text">{testimonial.text}</p>
                                <div className="testimonial-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="testimonial-dots">
                {list.map((_, idx) => (
                    <button
                        key={idx}
                        className={`testimonial-dot ${currentIndex % totalOriginal === idx ? 'active' : ''}`}
                        onClick={() => handleDotClick(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
