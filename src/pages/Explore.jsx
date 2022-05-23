import { React, useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import '../styles/components/explore.scss'

export default function Explore() {
  let words = ['Apple', 'Banana', 'Cake', 'Donut', 'Egg', 'Fennel']

  return (
    <>
      <div className="infinite-marquee wrapper">
        <maquee className="danmaku" scrollamount="1">
          <h1>Apple</h1>
          <h1>Banana</h1>
          <h1>Cake</h1>
          <h1>Donut</h1>
          <h1>Egg</h1>
          <h1>Fennel</h1>
        </maquee>
      </div>
      <Footer />
    </>
  )
}
