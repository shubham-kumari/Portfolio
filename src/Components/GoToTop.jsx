import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        // Attach event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSmoothScroll = () => {
        const section = document.getElementById('home');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        showButton && (
            <button
                onClick={handleSmoothScroll}
                className='fixed bottom-8 right-12 bg-900 p-3 rounded-full shadow-lg animate-bounce'
            >
                <FaArrowUp className='text-primary' />
            </button>
        )
    );
};

export default GoToTop;
