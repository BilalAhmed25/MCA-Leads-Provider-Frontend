import { useState, useRef, useEffect } from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        name: "Sarah M.",
        position: "CEO",
        text: "The live transfer leads from MCA Leads Provider are excellent. Our contact-to-close ratio has noticeably improved. Their support crew is responsive and ready whenever needed.",
        image: "https://i.pravatar.cc/150?img=32",
        bgColor: "#0ea5e9" // blue-ish
    },
    {
        id: 2,
        name: "Brian T.",
        position: "Marketing",
        text: "We’ve used some lead providers over the years, but MCA Leads Provider consistently gives high-quality results. The leads have been thoroughly reviewed, and our agents no longer waste time making cold calls.",
        image: "https://i.pravatar.cc/150?img=44",
        bgColor: "#4ade80" // green-ish
    },
    {

        id: 3,
        name: " Amanda L.",
        position: "Developer",
        text: "I was impressed by the leads’ accuracy. Every contact provided pertinent business information and was eager to discuss funding. It’s made my workflow significantly more efficient.",
        image: "https://i.pravatar.cc/150?img=5",
        bgColor: "#2dd4bf" // teal-ish
    },
    {
        id: 4,
        name: "David K.",
        position: "Designer",
        text: "The callback leads allowed us to engage potential candidates who had previously expressed interest. It’s a lot easier to follow up and close business when the groundwork is already laid. Very satisfied.",
        image: "https://i.pravatar.cc/150?img=11",
        bgColor: "#f43f5e" // rose
    },
    {
        id: 5,
        name: "Kevin S.",
        position: "Product Manager",
        text: "The exclusive leads have changed everything. We have a unique benefit over competitors because we are the only ones reaching out to such companies.",
        image: "https://i.pravatar.cc/150?img=60",
        bgColor: "#a855f7" // purple
    },
    {
        id: 6,
        name: "Olivia H.",
        position: "Sales",
        text: "They have attracted a very interested clientele with their email and SEO-based lead creation tactics. We now have a more reliable and effective sales pipeline.",
        image: "https://i.pravatar.cc/150?img=47",
        bgColor: "#eab308" // yellow
    },
    {
        id: 7,
        name: "Mike D.",
        position: "Sales",
        text: "To try them out, I purchased a batch of aged leads, and to my surprise, they continued to convert. It’s not common. demonstrates that their data is authentic and well-maintained.",
        image: "https://i.pravatar.cc/150?img=15",
        bgColor: "#4ade80" // green
    },
    {
        id: 8,
        name: "Jessica R.",
        position: "Sales",
        text: "What I like the most is their concentration on compliance. The leads are TCPA compliant, so you can contact them with confidence. They prioritize quality over quantity.",
        image: "https://i.pravatar.cc/150?img=28",
        bgColor: "#f43f5e" // rose
    },
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
                <h4 className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-wider uppercase mb-3">
                    Testimonials
                </h4>
                <h4 className="text-fluid-3xl lg:text-fluid-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    See What Our Clients Think About Us!
                </h4>
                <p className="text-fluid-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
                    MCA Leads Provider strives to give the finest client experience to consumers. We prioritize client satisfaction and welcome comments.
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
