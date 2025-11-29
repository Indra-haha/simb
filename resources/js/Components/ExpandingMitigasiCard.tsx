"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SubContent {
  image: string
  text: string
}

interface CardItem {
  id: number
  title: string
  color: string
  subContents: SubContent[]
}

interface ExpandingCardProps {
  cards: CardItem[]
  defaultActive?: number | null
}

export default function ExpandingCard({ cards, defaultActive = null }: ExpandingCardProps) {
  const [active, setActive] = useState<number | null>(defaultActive)
  const [maxHeight, setMaxHeight] = useState<number>(500) // default tinggi awal

  const refs = useRef<(HTMLDivElement | null)[]>([])

  // hitung tinggi terbesar agar semua card punya tinggi yang sama
  useEffect(() => {
    const heights = refs.current.map((el) => el?.scrollHeight || 0)
    const max = Math.max(...heights)
    if (max > 0) setMaxHeight(max)
  }, [cards])

  return (
    <div className="flex gap-6 justify-center items-start px-8 py-10 max-md:flex-col transition-all duration-700">
      {cards.map((card, index) => {
        const isActive = active === card.id
        const hasActive = active !== null

        return (
          <motion.div
            key={card.id}
            layout
            ref={(el) => (refs.current[index] = el)}
            onClick={() => setActive(isActive ? null : card.id)}
            transition={{ layout: { duration: 0.7, ease: "easeInOut" } }}
            className={`relative rounded-3xl cursor-pointer flex flex-col items-center justify-start
              shadow-2xl overflow-hidden transition-all duration-700 ease-in-out ${card.color}`}
            style={{
              flex: isActive ? 3 : 1,
              minWidth: 0,
              height: maxHeight,
              filter: hasActive
                ? isActive
                  ? "brightness(1.05)"
                  : "brightness(0.6)"
                : "brightness(1)",
              transition: "filter 0.4s ease-in-out, flex 0.6s ease-in-out, height 0.6s ease-in-out",
            }}
          >
            {/* Judul (pusat saat belum aktif) */}
            <motion.div
              layout
              className={`flex flex-col items-center text-center text-white w-full px-6 transition-all duration-700 ${
                isActive ? "py-8" : "h-full justify-center"
              }`}
            >
              <motion.h2
                layout
                animate={{
                  opacity: isActive ? 1 : 0.9,
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
                className={`font-bold transition-all duration-500 ${
                  isActive ? "text-3xl mb-6" : "text-2xl"
                }`}
              >
                {card.title}
              </motion.h2>
            </motion.div>

            {/* Isi card (gambar + teks) */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  key="content"
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 w-full"
                >
                  {card.subContents.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white"
                    >
                      <img
                        src={item.image}
                        alt={`sub-${idx}`}
                        className="w-24 h-24 object-cover rounded-xl mb-3"
                      />
                      <p className="text-sm leading-snug">{item.text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Efek gelap untuk card lain */}
            {!isActive && hasActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.25 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-black rounded-3xl pointer-events-none"
              />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
