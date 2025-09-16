import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/hompage.jsx'
import About from './pages/about.jsx'
import NotFound from './pages/notfound.jsx'
import Navbar from './components/Navbar.jsx'

export default function App() {
  return (
<>
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>
</>  
)
}
