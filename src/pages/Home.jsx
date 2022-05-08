import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Welcome to the home page.</h1>
      <Link to="/about">
        <h1>About</h1>
      </Link>
    </div>
  )
}
