import React, {useState} from 'react'
import { AboutImageSlideshowData } from './AboutImageSlideshowData'

const ProjectSlideshow = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className='aboutImage_slideshow'>
            <div className='aboutImage_slideshowContainer'>
                {AboutImageSlideshowData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide_active' : 'slide'} key={index}>
                            {index === current && (<img onClick={nextSlide} src={slide.image} alt='life' className='aboutImage_slideshowImage' />)}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

ProjectSlideshow.defaultProps = { slides: ''}

export default ProjectSlideshow
