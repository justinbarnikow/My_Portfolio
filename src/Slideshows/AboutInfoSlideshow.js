import React, {useState} from "react";
import { AboutInfoSlideshowData } from "./AboutInfoSlideshowData";
import {FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa'


const AboutInfoSlideshow = ({ infoSlides }) => {

    const [current, setCurrent] = useState(0)
    const length = infoSlides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(infoSlides) || infoSlides.length <= 0) {
        return null
    }

  return (
      <section className="aboutInfo_slideshow">
            <div className='aboutInfo_slideshowContainer'>
            
                {AboutInfoSlideshowData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide_active' : 'slide'} key={index}>
                            {index === current && (<form className='aboutInfo_slideshowText'>
                                <fieldset>
                                <legend>
                                    <span className="info_slideshowTitle">{slide.title}</span>
                                </legend>
                                    {slide.info}
                                    <FaAngleDoubleLeft className='aboutInfo_leftArrow' onClick={prevSlide} />
            <FaAngleDoubleRight className='aboutInfo_rightArrow' onClick={nextSlide}/>
                                    <span className="info_indexSlide">{index + 1}/{infoSlides.length}</span>
                                </fieldset>
                            </form>)}
                        </div>
                    )
                })}
            </div>
      </section>
  );
};

AboutInfoSlideshow.defaultProps = { infoSlides: ''}

export default AboutInfoSlideshow;
