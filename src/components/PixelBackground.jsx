import { useMemo } from 'react'
import { motion } from 'framer-motion'

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function PixelBackground() {
  // Pre-generate stars to keep them stable across renders
  const stars = useMemo(() => {
    return Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: randomBetween(2, 4),
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 3,
    }))
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Pixel grid overlay */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)`,
        backgroundSize: '16px 16px',
        imageRendering: 'pixelated'
      }} />

      {/* Twinkling pixel stars */}
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            boxShadow: '0 0 6px rgba(255,255,255,0.9)',
            imageRendering: 'pixelated'
          }}
          initial={{ opacity: 0.2, scale: 1 }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: s.duration, delay: s.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Rising steam stripes for cozy cafe vibe */}
      <div className="absolute bottom-0 left-0 right-0 h-40">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1 bg-white/10"
            style={{ left: `${i * 12.5}%` }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -200, opacity: [0, 0.4, 0] }}
            transition={{ repeat: Infinity, duration: 6 + i, delay: i * 0.5 }}
          />
        ))}
      </div>
    </div>
  )
}
