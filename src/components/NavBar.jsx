import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../styles/components/navbar.scss'

export default function NavBar() {
  function toggleMenu() {
    document.querySelector('.navbar-element-wrapper').classList.toggle('menu')
    document.querySelector('.menu-shadow').classList.toggle('menu')
    document.querySelector('body').classList.toggle('lock-scroll')
  }

  return (
    <>
      <div className="navbar-wrapper">
        <nav className="navbar-container">
          <div className="navbar-name">
            <NavLink to={'/'}>Laurenz Guevara</NavLink>
            <h4>Web Developer</h4>
          </div>

          <ul className="navbar-element-wrapper">
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/explore'}>Explore</NavLink>
            </li>
            <li>
              <NavLink to={'/search'}>Search</NavLink>
            </li>
          </ul>
          <div className="menu-shadow" onClick={toggleMenu}></div>
          <div className="navbar-menu">
            <span className="nav-menu-icon">
              <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
            </span>
          </div>
        </nav>
      </div>
    </>
  )
}
