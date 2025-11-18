import { motion } from 'framer-motion'
import { Coffee, IceCream, Sandwich } from 'lucide-react'
import PixelBackground from './PixelBackground'
import PixelChurro from './PixelChurro'

export default function Hero({ onScrollToMenu }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <PixelBackground />

      {/* Floating pixel treats */}
      <PixelChurro x={40} y={120} rotate={-10} size={1} delay={0.2} />
      <PixelChurro x={220} y={60} rotate={15} size={0.8} delay={0.4} />
      <PixelChurro x={560} y={180} rotate={-25} size={1.2} delay={0.6} />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_2px_0_#000]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          style={{ imageRendering: 'pixelated' }}
        >
          Churrería • Bocatería • Cafetería
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-blue-200 max-w-xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 120, damping: 16 }}
        >
          Una experiencia retro y deliciosa, con animaciones y estética pixel art.
        </motion.p>

        <motion.div
          className="mt-8 flex items-center justify-center gap-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120, damping: 12 }}
        >
          <button
            onClick={onScrollToMenu}
            className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded shadow-lg transition-colors"
            style={{ imageRendering: 'pixelated' }}
          >
            Ver carta
          </button>
          <a
            href="#contacto"
            className="px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded shadow-lg transition-colors"
            style={{ imageRendering: 'pixelated' }}
          >
            Contacto
          </a>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-6 text-blue-200">
          <span className="inline-flex items-center gap-2"><Coffee size={18} /> Café recién hecho</span>
          <span className="inline-flex items-center gap-2"><IceCream size={18} /> Churros crujientes</span>
          <span className="inline-flex items-center gap-2"><Sandwich size={18} /> Bocadillos calientes</span>
        </div>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
