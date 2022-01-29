import React from 'react'

function Hero() {
  return (
    <section className="heroSection">
      <article className='background_text'>
        <span className='background_justinBarnikow'>
          JUSTIN
        </span>
      </article>
      <article className='introArticle'>
        <span className='professional_portfolio'>
          Portfolio by Justin Barnikow
        </span>
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
