import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/components/navbar.scss'

export default function NavBar() {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <div className="navbar-name">
            <NavLink to={'/'}>Laurenz Guevara</NavLink>
            <h4>Web Developer</h4>
          </div>
          <div className="navbar-element-wrapper">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/explore'}>Explore</NavLink>
            <NavLink to={'/search'}>Search</NavLink>
            <NavLink to={'/suprise'}>Suprise</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
