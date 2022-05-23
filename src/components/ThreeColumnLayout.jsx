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
          <p>Search for a word that has been added to the list.</p>
        </div>
        <div className="column-container">
          <h1>3. Definitions</h1>
          <p>Click on the word to see it's full definition!</p>
        </div>
      </div>
    </>
  )
}
