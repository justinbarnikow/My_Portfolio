import React, {useState} from 'react'
import { ProjectSlideshowData } from './ProjectSlideshowData'
import {FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa'

const ProjectSlideshow = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className='project_slideshow'>
                <FaAngleDoubleLeft className='project_leftArrow' onClick={prevSlide}/>
                <FaAngleDoubleRight className='project_rightArrow' onClick={nextSlide}/>
                {ProjectSlideshowData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide_active' : 'slide'} key={index}>
                            <span className='index_slideshow'>{index + 1}/{slides.length}</span>
                            {index === current && (
                                <img src={slide.image} alt='project' className='project_slideshowImage' />
                            )}
                        </div>
                    )
                })}
        </section>
    )
}

ProjectSlideshow.defaultProps = { slides: ''}

export default ProjectSlideshow
