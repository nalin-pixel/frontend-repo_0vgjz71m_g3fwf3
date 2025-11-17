import { motion } from 'framer-motion'
import { Image, Wine, Utensils } from 'lucide-react'

const projects = [
  {
    title: 'Maison Felix',
    subtitle: 'Wine Bar Identity',
    tags: ['Branding', 'Menu Design', 'Signage'],
    image: 'https://images.unsplash.com/photo-1653859272553-464d08e36f03?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYWlzb24lMjBGZWxpeHxlbnwwfDB8fHwxNzYzNDA3Mzg2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Noodle Union',
    subtitle: 'Fast Casual Rebrand',
    tags: ['Logo', 'Packaging', 'Campaign'],
    image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'The Atrium',
    subtitle: 'Hotel Lobby Bar',
    tags: ['Art Direction', 'Wayfinding', 'Launch'],
    image: 'https://images.unsplash.com/photo-1488747279002-c8523379faaa?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Selected Work</h2>
            <p className="text-slate-300 mt-2 max-w-xl">A snapshot of recent identities, menus and launch campaigns crafted for hospitality brands.</p>
          </div>
          <div className="hidden md:flex gap-3 text-slate-400">
            <Wine className="w-5 h-5" />
            <Utensils className="w-5 h-5" />
            <Image className="w-5 h-5" />
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent">
                <h3 className="text-white font-medium tracking-tight">{p.title}</h3>
                <p className="text-slate-300 text-sm">{p.subtitle}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wide text-slate-300/90 bg-white/5 border border-white/10 rounded-full px-2 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
