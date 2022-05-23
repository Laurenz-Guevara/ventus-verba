import { React, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import sanityClient from '../client.jsx'
import Marquee from 'react-fast-marquee'
import Footer from '../components/Footer'
import '../styles/components/explore.scss'

export default function Explore() {
  const [first, setFirst] = useState(null)
  const [second, setSecond] = useState(null)
  const [third, setThird] = useState(null)

  function divide(array, amount) {
    const data = []
    for (let i = 0; i < array.length; i += amount) {
      const chunk = array.slice(i, i + amount)
      data.push(chunk)
    }
    return data
  }

  useEffect(() => {
    let divided = []
    sanityClient
      .fetch(
        `*[_type == "wordlist"]{
          word,
          slug,
          }`
      )
      .then(
        (data) => (
          (divided = divide(data, data.length / 3)),
          setFirst(divided[0]),
          setSecond(divided[1]),
          setThird(divided[2])
        )
      )
      .catch(console.error)
  }, [])

  return (
    <>
      <div className="marquee-wrapper">
        <Marquee
          pauseOnHover
          speed={25}
          className={'infinite-marquee maquee-pos-1'}
          gradient={false}
        >
          {first &&
            first.map((card) => (
              <div key={card.word} className="maquee-word">
                <NavLink
                  to={'/definition/' + card.slug.current}
                  className="explore-slug"
                >
                  <h1>{card.word}</h1>
                </NavLink>
              </div>
            ))}
        </Marquee>
        <Marquee
          pauseOnHover
          speed={35}
          className={'infinite-marquee maquee-pos-2'}
          gradient={false}
        >
          {second &&
            second.map((card) => (
              <div key={card.word} className="maquee-word">
                <NavLink
                  to={'/definition/' + card.slug.current}
                  className="explore-slug"
                >
                  <h1>{card.word}</h1>
                </NavLink>
              </div>
            ))}
        </Marquee>
        <Marquee
          pauseOnHover
          speed={30}
          className={'infinite-marquee maquee-pos-3'}
          gradient={false}
        >
          {third &&
            third.map((card) => (
              <div key={card.word} className="maquee-word">
                <NavLink
                  to={'/definition/' + card.slug.current}
                  className="explore-slug"
                >
                  <h1>{card.word}</h1>
                </NavLink>
              </div>
            ))}
        </Marquee>
      </div>
      <div className="light-mode">
        <Footer className />
      </div>
    </>
  )
}
