import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Footer } from './components/Footer'
import { Contact } from './components/sections/Contact'
import { Computer } from './components/sections/Computer'
import { Portfolio } from './components/sections/Portfolio'
import './index.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative">
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute inset-0 bg-gray-950" />
        
        <div className="absolute inset-0 opacity-10 bg-noise-texture" />
        
        <div className="absolute top-[15%] left-[15%] w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-[25%] right-[25%] w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] right-[10%] w-64 h-64 rounded-full bg-violet-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-[15%] left-[20%] w-72 h-72 rounded-full bg-blue-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }} />
      </div>

      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      <div className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <main className="text-gray-100">
          <div className="bg-gray-900/80 backdrop-blur-sm">
            <Home />
            <About />
            <Experience />
            <Computer />
            <Portfolio />
            <Contact />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default App