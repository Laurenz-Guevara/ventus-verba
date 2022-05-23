import React from 'react'
import { NavLink } from 'react-router-dom'
import Breaker from './Breaker'
import Footer from './Footer'
import PulseLoader from 'react-spinners/PulseLoader'
import '../styles/components/button.scss'
import '../styles/components/loading.scss'

export default function Loading() {
  return (
    <>
      <Breaker />
      <div className="loading-wrapper wrapper">
        <h1>Loading</h1>
        <PulseLoader color={'#35344e'} loading={true} size={10} />
        <div className="not-found-image-container"></div>
        <h2>
          If this page doesn't load click here to return back to the home page!
        </h2>
        <button className="button">
          <NavLink to="/">Home</NavLink>
        </button>
      </div>
      <Footer />
    </>
  )
}
