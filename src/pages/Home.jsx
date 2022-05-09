import React, { useState, useEffect } from 'react'
import sanityClient from '../client.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  const [postData, setPost] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "test"]{
          title,
          description
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error)
  }, [])
  return (
    <div>
      <h1>Welcome to the home page.</h1>
      <Link to="/about">
        <h1>About</h1>
      </Link>
      {postData &&
        postData.map((test, index) => (
          <div key={test.title} className={test.title}>
            <h1>
              {test.title} And {test.description}
            </h1>
          </div>
        ))}
    </div>
  )
}
