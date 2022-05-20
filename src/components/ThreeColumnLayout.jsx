import React from 'react'
import '../styles/components/three-column-layout.scss'

export default function ThreeColumnLayout() {
  return (
    <>
      <div className="column-wrapper wrapper">
        <div className="column-container">
          <h1>1. Explore</h1>
          <p>Discover some new words added by myself.</p>
        </div>
        <div className="column-container">
          <h1>2. Search</h1>
          <p>Search for a word or definition to look further.</p>
        </div>
        <div className="column-container">
          <h1>3. Surpise</h1>
          <p>Not sure what to look for? Surprise yourself!</p>
        </div>
      </div>
    </>
  )
}
