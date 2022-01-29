import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectPage(props) {
    const title = props.project.title
    const subtitle = props.project.subtitle
    const first_info = props.project.first_info
    const second_info = props.project.second_info
    const image = props.project.image
    const link = props.project.link

    const navigate = useNavigate()

  return (
        <section className='projectPage'>
            <article className='backButton_article'>
                <button className='back_button' type='button'
                    onClick={() => navigate('/')}>
                        back
                </button>
            </article>
            <article className='projectPage_title'>
                <span className='projectPage_titleText'>
                    {title}
                </span>
                <span className='projectPage_subtitle'>
                    {subtitle}
                </span>
            </article>
            <div className='projectPage_infoArea'>
                <article className='projectPage_image'>
                    <a href={link} target="_blank" rel='noreferrer'>
                        <img src={image} alt='project' className='projectPage_image' />
                    </a>
                </article>
                <article className='projectPage_info'>
                    <div className='projectPage_infoBox'>
                        <form className='projectPage_form'>
                            <fieldset>
                                <legend>About</legend>
                                <span className='projectPage_firstInfo'>
                                    {first_info}
                                </span>
                                <br />
                                <br />
                                <span className='projectPage_secondInfo'>
                                    {second_info}
                                </span>
                            </fieldset>
                        </form>
                    </div>
                </article>
            </div>
        </section>
    );
}

ProjectPage.defaultProps = { project: [] }

export default ProjectPage;
