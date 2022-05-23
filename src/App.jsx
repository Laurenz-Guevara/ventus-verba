import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NavBar from './components/NavBar'
import Search from './pages/Search'
import Explore from './pages/Explore'
import Definition from './pages/Definition'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/search" element={<Search />} />
        <Route path="/definition/:slug" element={<Definition />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
