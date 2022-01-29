import React, { useEffect, useState } from 'react';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300) {
            setVisible(true)
        } else if(scrolled <= 300) {
            setVisible(false)
        }
    }

    const returnToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        toggleVisible();
        return () => {
          setVisible({}); // This worked for me
        };
    }, []);

    window.addEventListener('scroll', toggleVisible)

  return (
    <div>
        <FaRegArrowAltCircleUp onClick={returnToTop} className='scrollButton' 
             style={{display: visible ? 'inline' : 'none'}}
        />
    </div>
    );
};

export default ScrollToTop;
