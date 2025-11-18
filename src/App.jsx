import { useCallback } from 'react'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Contact from './components/Contact'

function App() {
  const scrollToMenu = useCallback(() => {
    const el = document.getElementById('carta')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero pixel-art header */}
      <Hero onScrollToMenu={scrollToMenu} />

      {/* Menu / Carta */}
      <Menu />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="py-10 text-center bg-slate-950 text-slate-400">
        <p style={{ imageRendering: 'pixelated' }}>© {new Date().getFullYear()} Churrería • Bocatería • Cafetería — Hecho con cariño y pixeles</p>
      </footer>
    </div>
  )
}

export default App
