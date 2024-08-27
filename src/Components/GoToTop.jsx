import React, { useEffect, useState } from 'react';

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
            className='fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg'
        >
            💛
        </button>

    );
};

export default GoToTop;
