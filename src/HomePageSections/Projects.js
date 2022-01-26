import React from 'react'
import ProjectSlideshow from '../Slideshows/ProjectSlideshow';
import { ProjectSlideshowData } from '../Slideshows/ProjectSlideshowData';

function Projects() {
  return (
    <section className="projectsSection">
        <article className="projects_titleArticle">
          <span className="projects_title">
            Some of Justin's Projects &#38; Work
          </span>
        </article>
        <article className='projectsSubtitle_container'>
          <span className='projectsSubtitle_text'>
            Here are some of the projects Justin has made since his boot camp. 
            Each one makes use of one or more public APIs to serve a unique function or present data differently.
          </span>
        </article>
        <article className="projects_slideshowArticle">
          <ProjectSlideshow slides={ProjectSlideshowData} />
        </article>
    </section>
    );
}

export default Projects;
