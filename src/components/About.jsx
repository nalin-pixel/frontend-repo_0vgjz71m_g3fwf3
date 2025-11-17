import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">We are Toto</h2>
          <p className="text-slate-300 mt-4 leading-relaxed">
            A compact, senior team working at the intersection of brand and hospitality. We collaborate with founders and operators to craft experiences that feel effortless and look exceptional. Our work is minimalist, modern and grounded in commercial outcomes.
          </p>
          <p className="text-slate-300 mt-4 leading-relaxed">
            From naming to launch kits, we build systems that scale from a single bar to multi-site groups. Clear process, transparent timelines and a partner who understands the flow of service.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
          <img src="https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=1600&auto=format&fit=crop" alt="Studio" className="w-full h-[420px] object-cover" />
        </motion.div>
      </div>
    </section>
  )
}
