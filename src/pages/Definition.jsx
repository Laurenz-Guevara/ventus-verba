import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import sanityClient from '../client.jsx'
import Breaker from '../components/Breaker'
import Footer from '../components/Footer'
import '../styles/components/definition.scss'
import '../styles/components/button.scss'

export default function definition() {
  const [data, setData] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      word,
      definition,
      slug,
    }`
      )
      .then((data) => setData(data[0]))
      .catch(console.error)
  }, [slug])

  if (!data) return <div>Loading...</div>
  return (
    <>
      <Breaker />

      <div className="definition-wrapper wrapper">
        <h1>Definition</h1>
        <div className="definition-container">
          <h2>{data.word}</h2>
          <p>{data.definition}</p>
          <button className="button">
            <Link to="/search">Return</Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
