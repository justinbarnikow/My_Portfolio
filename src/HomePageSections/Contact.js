import React from 'react'
import { FaGit, FaInstagram, FaLinkedinIn, FaMailBulk } from 'react-icons/fa'


function Contact() {
  return (
    <section className="contactSection">
        <article className="contact_titleArticle">
          <span className="contactTitle">
            How to Get in Contact
          </span>
        </article>
        <article className='contactSubtitle_container'>
            <span className='contactSubtitle_text'>
              Whether it's in regards to previous projects, or even creating new ones together, please feel free to contact Justin with any of your questions or comments!
            </span>
        </article>
        <article className="contactArticle">
          <div className="contactForm_container">
            <form className="contactForm"
              method="POST" action="https://formspree.io/f/xrgjeojr">
                <fieldset>
                  <legend><FaMailBulk /></legend>
                  <div className='nameAndEmail_box'>
                    <label htmlFor='name'></label>
                    <input type='text' name='name' id='name' placeholder='Name' required />
                    <label htmlFor='email'></label>
                    <input type='text' name='email' id='email' placeholder='Email' required />
                  </div>
                  <label htmlFor='subject'></label>
                  <input type='text' name='subject' id='subject' placeholder='Subject' />
                  <label htmlFor='message'></label>
                  <textarea autoFocus="on" name='message' id='message' placeholder='Message'></textarea>
                  <button type='submit'>Send</button>
                </fieldset>
            </form>
          </div>
          <div className="contactIcons_container">
            <div className="contactIcons_area">
              <a href="https://www.linkedin.com/in/justinbarnikow/" target="_blank" rel="noreferrer">
                <FaLinkedinIn className='contactIcon' />
              </a>
              <a href="https://github.com/justinbarnikow" target="_blank" rel="noreferrer">
                <div className='contactIcon_space'>
                    <FaGit className='contactIcon' />
                </div>
              </a>
              <a href="https://www.instagram.com/jbarnikow/" target="_blank" rel="noreferrer">
                <FaInstagram className='contactIcon' />
              </a>
            </div>
          </div>
        </article>
    </section>
    );
}

export default Contact;
