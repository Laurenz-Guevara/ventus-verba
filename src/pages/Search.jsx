import React, { useState, useEffect } from 'react'
import sanityClient from '../client.jsx'
import Breaker from '../components/Breaker'
import Footer from '../components/Footer'
import '../styles/components/search.scss'

export default function Search() {
  const [data, setData] = useState(null)
  const [words, setWords] = useState(null)
  const [inputValue, setInputValue] = useState('')

  const handleUserInput = (e) => {
    setInputValue(e.target.value)
    setWords(
      data.filter((item) => {
        return (
          item.word.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.definition.toLowerCase().includes(e.target.value.toLowerCase())
        )
      })
    )
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "wordlist"]{
          word,
          definition,
          }`
      )
      .then((data) => (setData(data), setWords(data)))
      .catch(console.error)
  }, [])

  return (
    <>
      <Breaker />
      <div className="search-wrapper">
        <div className="search-text-box">
          <h1>Search Words</h1>
          <p>
            If you would like to learn more about a word you can search it by
            name or definition. Click the circle to see more about a word.
          </p>
        </div>
      </div>
      <div className="search-form">
        <input
          type="search"
          placeholder="Enter a word or definition"
          className="search-box"
          value={inputValue}
          onChange={handleUserInput}
        ></input>
        <button
          className="clear-button"
          id="clear"
          title="Clear text button"
          onClick={() => setInputValue('')}
        >
          Clear
        </button>
      </div>
      <div className="word-list" id="list">
        {words &&
          words.map((card) => (
            <div key={card.word} className="card-content">
              <h1 className="card-word">{card.word}</h1>
              <h2>{card.definition}</h2>
            </div>
          ))}
      </div>
      <Footer />
    </>
  )
}
