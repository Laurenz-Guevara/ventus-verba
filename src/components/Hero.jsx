import React from 'react'
import { Link } from 'react-router-dom'
import VentusVerbaHero from '../assets/ventus-verba-hero.png'
import '../styles/components/hero.scss'
import '../styles/components/button.scss'

export default function Hero() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-container wrapper">
          <div className="hero-text-container">
            <h1>Ventus Verba</h1>
            <p>
              A repository for some fun, interesting and useful words you may
              come across in daily life or on the internet.
            </p>
            <button className="button">
              <Link to="/explore">Explore</Link>
            </button>
          </div>
          <div className="hero-image-container">
            <img src={VentusVerbaHero} className="hero-image"></img>
          </div>
        </div>
      </div>
    </>
  )
}
