import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";


const GoToTop = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const handleSmoothScroll = () => {
        const section = document.getElementById('home');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        
        <button onClick={() => handleSmoothScroll()}
            className='fixed bottom-8 right-12 bg-900 p-3 rounded-full shadow-lg animate-bounce'
        ><FaArrowUp className='text-primary' />

        </button>

    );
};

export default GoToTop;
