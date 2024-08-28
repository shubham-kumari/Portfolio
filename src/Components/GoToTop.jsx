import React, { useEffect, useRef } from 'react';
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
    const buttonRef = useRef(null);



    useEffect(() => {
        const checkScroll = () => {
            console.log(window.innerHeight);
            if (window.innerHeight > 100) {
                buttonRef.current.style.display = 'block';
            } else{
                buttonRef.current.style.display = 'none';
            }
        };
    
        const intervalId = setInterval(checkScroll, 1000);
    
        // Initial check
        checkScroll();
    
        // Cleanup function
        return () => clearInterval(intervalId);
    }, []);
    

    const handleSmoothScroll = () => {
        const section = document.getElementById('home');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button
            ref={buttonRef}
            onClick={handleSmoothScroll}
            className='fixed  sm:bottom-8 bottom-7 sm:right-12 right-6 bg-900 p-3 rounded-full shadow-lg animate-bounce'
            aria-label="Scroll to top"
        >
            <FaArrowUp className='text-primary' />
        </button>
    );
};

export default GoToTop;
