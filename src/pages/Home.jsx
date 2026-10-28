import React from "react";
import { Linkedin, Github} from 'lucide-react';
import '../App.css'


function SocialLink ({href, label, children}) {
  return <a className='Social-Link' href={href} aria-label={label} target='_blank' rel='noreferrer'>{children}</a>;
}

export default function Home (){
  return (
    <main className='page-shell' id='home'>
      <section className="portfolio-card" aria-label="Samuel's Portfolio">
        <section className='hero' aria-labelledby='hero-title'>
          <div className='hero-content'>
            <p className='eyebrow'>PORTFOLIO</p>
            <h1 className='hero-title' id='hero-title'>
              Hi, <br />I'm <span className='highlight'>Samuel</span><br />Software Developer
            </h1>
            <a className='btn-contact' href='mailto:samuelabioro@gmail.com' id='contact'>Contact Me <span aria-hidden='true'></span></a>
            <div className='social-links' aria-label='Social Profile'>
              <SocialLink href='https://www.linkedin.com/' label='LinkedIn'><Linkedin /></SocialLink>
              <SocialLink href='https://www.github.com/' label='GitHub'><Github /></SocialLink>
            </div>
          </div>

          <div className='hero-image-wrapper' aria-label='Portrait'>
            <div className='blob-bg'>
              <img src='/img/photo-1519085360753-af0119f7cbe7-removebg-preview.png' alt='Portrait' />
            </div>
            <span className='orbit orbit-one' aria-hidden='true' />
            <span className='orbit orbit-two' aria-hidden='true' />
          </div>
        </section>
        <div className='bottom-note'>
          <span className='status-dot' />Available For Projects <span className='note-divider'>.</span> 2026
        </div>
      </section>
    </main>
  )
}