import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Work />
      <Services />
      <About />
      <Contact />

      <footer className="bg-slate-950 border-t border-slate-900/80">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Toto Studio — Hospitality-focussed design</p>
          <div className="text-slate-500 text-sm">hello@toto.studio</div>
        </div>
      </footer>
    </div>
  )
}

export default App
