import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Sparkles, Github, Linkedin } from 'lucide-react'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <Link to="/" className="nav-brand">
          <Sparkles size={24} color="#c8a45c" />
          Ziad Ashraf
        </Link>
        <div className="nav-links">
          <a href={import.meta.env.BASE_URL + '#experience'}>Experience</a>
          <a href={import.meta.env.BASE_URL + '#skills'}>Skills</a>
          <a href={import.meta.env.BASE_URL + '#projects'}>Projects</a>
          <a href={import.meta.env.BASE_URL + '#certificates'}>Certificates</a>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </main>

      <footer>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
          <a href="https://github.com/Ziadashraf301" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/ziadashraf301" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>
        <p>© 2026 Ziad Ashraf — AI Engineer & Data Scientist</p>
      </footer>
    </div>
  )
}

export default App
