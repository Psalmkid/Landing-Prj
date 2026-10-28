import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<main className="page-shell"><p style={{padding:'2rem'}}>Page not found</p></main>} />
      </Routes>
    </>
  )
}
// create projects page //