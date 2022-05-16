import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import '../styles/components/footer.scss'

export default function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-container wrapper">
          <h1>Laurenz Guevara</h1>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/laurenzguevara/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icons" />
            </a>
            <a
              href="https://github.com/Laurenz-Guevara?tab=repositories"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faGithub} className="icons" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
