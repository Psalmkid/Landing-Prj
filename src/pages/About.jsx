import React from 'react'
import '../App.css'

export default function About() {
  return (
    <main className="page-shell" id="about">
      <section className="portfolio-card" aria-label="About">
        <section className="hero" aria-labelledby="about-title">
          <div className="hero-content">
            <p className="eyebrow">ABOUT</p>
            <h1 className="hero-title" id="about-title">
              About <span className="highlight">me</span>
            </h1>
            <p style={{ marginTop: '1rem', maxWidth: '36rem', lineHeight: 1.6, opacity: 0.85 }}>
              Software developer focused on building clean, useful web experiences.
              Replace this text with your own story, skills, and experience.
            </p>
          </div>
        </section>
      </section>
    </main>
  )
}
