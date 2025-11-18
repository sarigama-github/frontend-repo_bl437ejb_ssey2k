import { motion } from 'framer-motion'

export default function PixelChurro({ x = 0, y = 0, rotate = 0, size = 1, delay = 0 }) {
  const pixel = 8 * size

  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y, rotate }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, type: 'spring', stiffness: 120, damping: 12 }}
    >
      {/* Stick */}
      <div className="relative" style={{ width: pixel * 10, height: pixel * 2 }}>
        {/* Base */}
        <div className="absolute inset-0" style={{ imageRendering: 'pixelated' }}>
          {[...Array(10)].map((_, i) => (
            <div key={i} className="absolute" style={{
              left: i * pixel,
              top: 0,
              width: pixel,
              height: pixel * 2,
              background: i % 2 === 0 ? '#B7772A' : '#A9681E',
              boxShadow: 'inset -2px -2px 0 rgba(0,0,0,0.2), inset 2px 2px 0 rgba(255,255,255,0.1)'
            }} />
          ))}
        </div>
        {/* Sugar */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute bg-white/70" style={{
            left: (i * 1.7 + 1) * pixel,
            top: pixel * 0.2,
            width: pixel * 0.3,
            height: pixel * 0.3,
            boxShadow: '0 0 6px rgba(255,255,255,0.7)',
            imageRendering: 'pixelated'
          }} />
        ))}
      </div>
    </motion.div>
  )
}
