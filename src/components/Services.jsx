import { motion } from 'framer-motion'
import { Palette, Megaphone, LayoutGrid, Type } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'Logos, color systems and visual worlds built to feel timeless and attract your crowd.',
  },
  {
    icon: LayoutGrid,
    title: 'Menu & Collateral',
    desc: 'Menus, takeaway, signage and packaging designed to convert curiosity into orders.',
  },
  {
    icon: Megaphone,
    title: 'Campaigns',
    desc: 'Launch and seasonal campaigns with crisp art direction and social assets.',
  },
  {
    icon: Type,
    title: 'Type & Art Direction',
    desc: 'Custom type treatments, motion and photography guidelines for coherent brands.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">What we do</h2>
          <p className="text-slate-300 mt-2">Full-service design for hospitality, from first impression to last sip.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl p-6 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800"
            >
              <s.icon className="w-6 h-6 text-white" />
              <h3 className="text-white font-medium mt-4">{s.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
