import { useState, useRef, useEffect } from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        name: "Lena Pearce",
        position: "CEO",
        text: "The quality of MCA leads provided transformed our conversion rates. We closed three major funding deals in our first week alone!",
        image: "https://i.pravatar.cc/150?img=32",
        bgColor: "#0ea5e9" // blue-ish
    },
    {
        id: 2,
        name: "Sophia Bach",
        position: "Marketing",
        text: "Finding reliable merchants looking for cash advances used to be our biggest hurdle. Now, we have a steady stream of highly qualified prospects.",
        image: "https://i.pravatar.cc/150?img=44",
        bgColor: "#4ade80" // green-ish
    },
    {
        id: 3,
        name: "Arielle Copper",
        position: "Developer",
        text: "Their lead generation system is incredibly efficient. We've scaled our lending operations by 40% since partnering with them.",
        image: "https://i.pravatar.cc/150?img=5",
        bgColor: "#2dd4bf" // teal-ish
    },
    {
        id: 4,
        name: "John Doe",
        position: "Designer",
        text: "The data accuracy is top-notch. Unlike other providers, these merchants actually pick up the phone and are actively seeking working capital.",
        image: "https://i.pravatar.cc/150?img=11",
        bgColor: "#f43f5e" // rose
    },
    {
        id: 5,
        name: "Jane Smith",
        position: "Product Manager",
        text: "Exceptional service and unparalleled lead quality. Our ROI has never been better. Highly recommended for any MCA broker.",
        image: "https://i.pravatar.cc/150?img=16",
        bgColor: "#a855f7" // purple
    },
    {
        id: 6,
        name: "Mike Johnson",
        position: "Sales",
        text: "We stopped wasting time on dead-end calls. The exclusive leads provided here have significantly shortened our sales cycle.",
        image: "https://i.pravatar.cc/150?img=12",
        bgColor: "#eab308" // yellow
    }
];

const displayData = [...testimonialsData, ...testimonialsData, ...testimonialsData];

const Testimonials = () => {
    // Start at index 6 (middle set) so we can loop infinitely in both directions
    const [currentIndex, setCurrentIndex] = useState(testimonialsData.length);
    const sliderRef = useRef(null);

    // Auto slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (sliderRef.current) {
            const cards = sliderRef.current.querySelectorAll('.testimonial-card-wrapper');
            const container = sliderRef.current;
            
            if (cards[currentIndex]) {
                const totalOriginal = testimonialsData.length;

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
    }, [currentIndex]);

    const handleDotClick = (idx) => {
        // Go to the corresponding item in the middle set
        setCurrentIndex(testimonialsData.length + idx);
    };

    return (
        <section className="testimonials-section container-custom">
            <div className="testimonials-header">
                <h2>TESTIMONIALS</h2>
                <p>Hear from top brokers and funding specialists who have accelerated their business growth with our exclusive, high-converting MCA leads.</p>
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
                {testimonialsData.map((_, idx) => (
                    <button
                        key={idx}
                        className={`testimonial-dot ${currentIndex % testimonialsData.length === idx ? 'active' : ''}`}
                        onClick={() => handleDotClick(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
