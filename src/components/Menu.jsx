import { useMemo } from 'react'
import { motion } from 'framer-motion'

const items = {
  churros: [
    { name: 'Churros Clásicos', price: '3,00€', desc: 'Con azúcar o canela' },
    { name: 'Churros con Chocolate', price: '4,50€', desc: 'Taza de chocolate caliente' },
    { name: 'Porras', price: '3,50€', desc: 'Crujientes por fuera, tiernas por dentro' },
  ],
  bocatas: [
    { name: 'Bocata de Jamón', price: '5,50€', desc: 'Pan crujiente, tomate y AOVE' },
    { name: 'Lomo con Queso', price: '6,00€', desc: 'Recién hecho a la plancha' },
    { name: 'Tortilla Española', price: '5,00€', desc: 'Clásica y jugosa' },
  ],
  cafe: [
    { name: 'Café Solo', price: '1,50€', desc: 'Aromático y potente' },
    { name: 'Cortado', price: '1,70€', desc: 'Equilibrio perfecto' },
    { name: 'Capuccino', price: '2,20€', desc: 'Cremoso y espumoso' },
  ],
}

export default function Menu() {
  const categories = useMemo(() => Object.keys(items), [])

  return (
    <section id="carta" className="relative py-20 bg-slate-950/60">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white text-center mb-12" style={{ imageRendering: 'pixelated' }}>Nuestra Carta</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat}
              className="rounded-xl border border-slate-700 bg-slate-900/70 p-5"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 120, damping: 16 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 capitalize">{cat}</h3>
              <div className="space-y-3">
                {items[cat].map((it) => (
                  <div key={it.name} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-white font-semibold">{it.name}</p>
                      <p className="text-sm text-slate-300">{it.desc}</p>
                    </div>
                    <span className="text-amber-400 font-bold">{it.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
