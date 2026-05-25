import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiHelpCircle } from 'react-icons/fi';
import './FAQs.css';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What type of MCA leads do you provide?",
            answer: "We provide a wide range of merchant cash advance leads, including live transfer leads, call-back leads, aged leads, and business loan leads. Each style is designed to complement various sales methods and budgets."
        },
        {
            question: "How are leads qualified ahead of delivery?",
            answer: "All of our leads are confirmed using a multi-step procedure that includes business validation, revenue checks, and interest confirmation. Before providing each lead to you, we confirm that it fits the minimum eligibility requirements for funding."
        },
        {
            question: "Are these leads specific to my company?",
            answer: "Yes, we offer unique and shared leads. Exclusive MCA leads are offered to a single client, increasing your chances of conversion without competing contact attempts."
        },
        {
            question: "How soon will I obtain my leads after placing an order?",
            answer: "Live transfers and real-time leads are supplied immediately after they are generated. Other leads, such as aged leads or call-backs, are normally supplied within 24 hours, according to volume and criteria."
        },
        {
            question: "Are your leads TCPA and DNC-compliant?",
            answer: "Absolutely. All of our leads comply using TCPA-related rules and DNC filters. We promise legal compliance and ethical outreach by supplying only fully approved contact information."
        }
    ];

    return (
        <section className="faqs-section" id="faqs">
            <div className="container-custom">
                <div className="faqs-grid">

                    {/* Left Column: Heading and Description */}
                    <div className="faqs-info-col">
                        <div className="faqs-badge">
                            <FiHelpCircle className="badge-icon" />
                            <span>Frequently asked questions</span>
                        </div>
                        <h2 className="faqs-heading">
                            Frequently asked <span className="highlight">questions</span>
                        </h2>
                        <p className="faqs-subtext">
                            We understand that choosing the right merchant cash advance leads provider is a major decision for your business. Here are answers to the most common queries about our lead generation, qualification, and compliance standards.
                        </p>
                    </div>

                    {/* Right Column: Accordion list */}
                    <div className="faqs-accordion-col">
                        {faqData.map((item, index) => {
                            const isOpen = activeIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`faq-item ${isOpen ? 'active' : ''}`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="faq-question-row">
                                        <h3 className="faq-question-text">{item.question}</h3>
                                        <div className={`faq-icon-circle ${isOpen ? 'open' : ''}`}>
                                            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                                        </div>
                                    </div>
                                    <div className={`faq-answer-pane ${isOpen ? 'open' : ''}`}>
                                        <div className="faq-answer-inner">
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQs;
