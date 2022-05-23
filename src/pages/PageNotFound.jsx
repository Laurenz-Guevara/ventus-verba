import React from 'react'
import { NavLink } from 'react-router-dom'
import Breaker from '../components/Breaker'
import Footer from '../components/Footer'
import VentusVerba404 from '../assets/ventus-verba-404.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons'
import '../styles/components/button.scss'
import '../styles/components/page-not-found.scss'

export default function PageNotFound() {
  return (
    <>
      <Breaker />

      <div className="page-not-found-container wrapper">
        <h1>404</h1>

        <div className="not-found-image-container">
          <img src={VentusVerba404} className="not-found-image"></img>
        </div>
        <h2>
          Sorry we couldn't find the page you were looking for.{' '}
          <FontAwesomeIcon icon={faFaceFrown} />
        </h2>
        <button className="button">
          <NavLink to="/">Home</NavLink>
        </button>
      </div>

      <Footer />
    </>
  )
}
