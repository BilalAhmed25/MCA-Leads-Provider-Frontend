import { useEffect, useRef } from 'react';

const RECAPTCHA_SITE_KEY = '6LeYwTItAAAAAPJ_Z0V1rayL8on8XhGufC6oQNXj';

const Recaptcha = ({ onChange, className = '' }) => {
    const containerRef = useRef(null);
    const widgetIdRef = useRef(null);

    useEffect(() => {
        let isMounted = true;

        const renderRecaptcha = () => {
            if (!containerRef.current || !window.grecaptcha || typeof window.grecaptcha.render !== 'function') {
                return;
            }

            // If already rendered inside this container, avoid double-rendering
            if (widgetIdRef.current !== null) {
                return;
            }

            try {
                containerRef.current.innerHTML = '';
                const id = window.grecaptcha.render(containerRef.current, {
                    sitekey: RECAPTCHA_SITE_KEY,
                    callback: (token) => {
                        if (onChange) onChange(token);
                    },
                    'expired-callback': () => {
                        if (onChange) onChange(null);
                    },
                    'error-callback': () => {
                        if (onChange) onChange(null);
                    }
                });
                if (isMounted) {
                    widgetIdRef.current = id;
                }
            } catch (err) {
                console.error("reCAPTCHA rendering error:", err);
            }
        };

        // If grecaptcha script already loaded
        if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
            renderRecaptcha();
        } else {
            // Check until grecaptcha is ready
            const checkInterval = setInterval(() => {
                if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
                    clearInterval(checkInterval);
                    if (isMounted) {
                        renderRecaptcha();
                    }
                }
            }, 100);

            return () => {
                isMounted = false;
                clearInterval(checkInterval);
            };
        }

        return () => {
            isMounted = false;
        };
    }, [onChange]);

    return (
        <div className={`recaptcha-wrapper flex justify-start my-3 ${className}`}>
            <div ref={containerRef} className="recaptcha-box" />
        </div>
    );
};

export default Recaptcha;
export { RECAPTCHA_SITE_KEY };
