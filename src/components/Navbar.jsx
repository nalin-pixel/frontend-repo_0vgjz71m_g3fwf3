import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm text-slate-200/90 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="group inline-flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center ring-1 ring-white/10 group-hover:ring-white/30 transition-all">
              <span className="font-black text-white">T</span>
            </div>
            <span className="text-white font-semibold tracking-tight">Toto Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <a href="#contact" className="inline-flex items-center gap-1 text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-4 py-2 transition-colors">
              Start a Project <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 border border-white/20 text-white" onClick={() => setOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 bg-slate-950/70 backdrop-blur-sm">
          <div className="absolute right-6 top-6">
            <button className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 text-white" onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="px-6 pt-24">
            <div className="flex flex-col gap-6">
              <a href="#work" onClick={() => setOpen(false)} className="text-xl text-white">Work</a>
              <a href="#services" onClick={() => setOpen(false)} className="text-xl text-white">Services</a>
              <a href="#about" onClick={() => setOpen(false)} className="text-xl text-white">About</a>
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 text-white text-lg bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-5 py-3 w-fit">
                Start a Project <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
