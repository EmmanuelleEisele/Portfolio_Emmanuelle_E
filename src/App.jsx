import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/homepage.jsx'
import About from './pages/about.jsx'
import NotFound from './pages/notfound.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import LandingPage from './pages/landingPage.jsx'
import Contact from './pages/contact.jsx'
import ProjectDetail from './pages/project_detail.jsx'
import MentionsLegales from './pages/legal.jsx'
import { SpeedInsights } from "@vercel/speed-insights/next"

function AnimatedRoutes() {
  const location = useLocation()
  

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <SpeedInsights />
      </Routes>
    </AnimatePresence>
  )
}

function AppContent() {
  const location = useLocation()
  const isLandingPage = location.pathname === '/'

  return (
    <>
      {!isLandingPage && <Navbar />}
      <AnimatedRoutes />
      {!isLandingPage && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
