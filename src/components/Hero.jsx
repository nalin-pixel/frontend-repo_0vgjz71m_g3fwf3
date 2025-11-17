import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Hospitality-focussed creative studio
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white">
            Design that fills seats and starts conversations
          </h1>
          <p className="mt-6 text-lg text-slate-200 max-w-xl">
            We craft brand systems, menus, signage and campaigns for bars and restaurants. Minimal, modern and built to convert curiosity into bookings.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 font-medium px-6 py-3 hover:bg-slate-100 transition">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white border border-white/20 px-6 py-3 hover:bg-white/20 transition">
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
