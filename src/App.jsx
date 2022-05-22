import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NavBar from './components/NavBar'
import Search from './pages/Search'
import Surprise from './pages/Surprise'
import Explore from './pages/Explore'
import Definition from './pages/Definition'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/search" element={<Search />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="/definition/:slug" element={<Definition />} />
      </Routes>
    </Router>
  )
}

export default App
