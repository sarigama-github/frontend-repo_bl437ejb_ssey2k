import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Demo only: show a toast-like confirmation
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contacto" className="relative py-20 bg-slate-900">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-white mb-6" style={{ imageRendering: 'pixelated' }}>Contacto</h2>
        <p className="text-slate-300 mb-8">¿Reservas, pedidos o preguntas? Escríbenos y te respondemos pronto.</p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 text-left"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
        >
          <label className="block text-slate-200 text-sm mb-2">Nombre</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full mb-4 px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white" placeholder="Tu nombre" />

          <label className="block text-slate-200 text-sm mb-2">Mensaje</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full mb-4 px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white" placeholder="¿En qué podemos ayudarte?" />

          <button className="px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded shadow-lg transition-colors" style={{ imageRendering: 'pixelated' }}>Enviar</button>
          {sent && <span className="ml-3 text-green-400">¡Mensaje enviado! (demo)</span>}
        </motion.form>
      </div>
    </section>
  )
}
