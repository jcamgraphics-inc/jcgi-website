import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Commercial from './pages/Commercial'
import Residential from './pages/Residential'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-1 pt-[68px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/residential" element={<Residential />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
