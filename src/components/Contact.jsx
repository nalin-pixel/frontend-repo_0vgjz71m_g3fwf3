import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const res = await fetch((import.meta.env.VITE_BACKEND_URL || '') + '/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget)))
      })

      if (!res.ok) throw new Error('Request failed')

      setStatus('Thanks — we will be in touch within 24 hours.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please email hello@toto.studio')
    }
  }

  return (
    <section id="contact" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Start a project</h2>
          <p className="text-slate-300 mt-2">Tell us a little about your venue and goals. We usually reply same day.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid sm:grid-cols-2 gap-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6">
          <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <input name="email" required type="email" placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <input name="business" placeholder="Business name" className="sm:col-span-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <textarea name="message" rows="4" placeholder="What do you need?" className="sm:col-span-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <button className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 font-medium px-6 py-3 hover:bg-slate-100 transition">Send inquiry</button>
            <p className="text-sm text-slate-400">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
