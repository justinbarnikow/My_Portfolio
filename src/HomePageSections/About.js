import React from 'react'
import { AboutImageSlideshowData } from '../Slideshows/AboutImageSlideshowData';
import AboutInfoSlideshow from '../Slideshows/AboutInfoSlideshow';
import { AboutInfoSlideshowData } from '../Slideshows/AboutInfoSlideshowData';
import AboutImageSlideshow from '../Slideshows/AboutImageSlideshow';


function About() {
  return (
      <section className="aboutSection">
          <article className="about_titleArticle">
            <div className="about_titleContainer">
              <span className="aboutJustin">
                Here's a little bit about Justin
              </span>
            </div>
          </article>
          <article className='aboutSubtitle_container'>
            <span className='aboutSubtitle_text'>
              Justin is a proud, loving husband currently residing in New Jersey. Since discovering his love for web design, he's been busy learning and there's no looking back!
            </span>
          </article>
          <article className="about_infoArticle">
            <div className="about_infoContainer">
              <AboutInfoSlideshow infoSlides={AboutInfoSlideshowData} />
            </div>
            <div className="about_imageContainer">
              <AboutImageSlideshow slides={AboutImageSlideshowData} />
            </div>
          </article>
      </section>
  );
}

export default About;
