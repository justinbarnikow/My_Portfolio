import React from 'react'
import NavBar from './NavBar';

function Hero() {
  return (
    <section className="heroSection">
      <article className='navbar_area'>
        <NavBar />
      </article>
        <article className="heroArticle">
          <div className="heroContainer">
            <div className="heroText">
              <span className="hero_firstLine">
                JUSTIN
              </span>
              <span className="hero_secondLine">
                BARNIKOW
              </span>
              <span className="hero_tagline">
                <span className='heroWeb'>WEB</span>
                <span className="heroDeveloper">DEVELOPER</span>
              </span>
            </div>
          </div>
        </article>
    </section>
    );
}

export default Hero;
