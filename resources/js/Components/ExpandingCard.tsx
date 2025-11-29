"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"

interface CardItem {
  id: number
  title: string
  description?: string
  icon?: React.ReactNode
  image?: string   // gambar yang TIDAK berubah ukuran
  color?: string   // backup jika tidak ada gambar
}

interface ExpandingCardsProps {
  cards: CardItem[]
  defaultActive?: number | null
}

export default function ExpandingCards({ cards, defaultActive = null }: ExpandingCardsProps) {
  const [active, setActive] = useState<number | null>(defaultActive)

  return (
    <div className="flex gap-4 justify-center items-center h-[60vh] px-20">
      {cards.map((card) => {
        const isActive = active === card.id
        const hasActive = active !== null

        return (
          <motion.div
            key={card.id}
            layout
            onClick={() => setActive(isActive ? null : card.id)}
            transition={{ layout: { duration: 0.55, ease: "easeInOut" } }}
            className={`
              relative rounded-3xl cursor-pointer flex items-center justify-center 
              shadow-xl overflow-hidden
              ${isActive ? "flex-[2]" : "flex-1"}
            `}
            style={{
              height: "26rem",
              minWidth: 0,
              filter: hasActive
                ? isActive
                  ? "brightness(1)"
                  : "brightness(0.7)"
                : "brightness(1)",
              transition: "filter 0.4s ease-in-out",
            }}
          >

            {/* FIXED IMAGE — tidak pernah mengecil/bergerak */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={card.image}
                className="absolute w-full h-full object-cover"
                style={{
                  // ukuran & posisi selalu sama dengan kondisi expand
                  transform: "scale(1)", 
                  left: 0,
                  top: 0,
                }}
              />
            </div>

            {/* CONTENT */}
            <motion.div
              layout
              animate={{ scale: isActive ? 0.85 : 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center text-white px-4"
            >
              {/* Icon */}
              <motion.div
                layout
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1, scale: isActive ? 1.15 : 1 }}
                transition={{ duration: 0.35 }}
                className="text-5xl mb-3"
              >
                {card.icon}
              </motion.div>

              {/* Title */}
              <AnimatePresence>
                {isActive && (
                  <motion.h2
                    key="title"
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl font-bold mb-2"
                  >
                    {card.title}
                  </motion.h2>
                )}
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence>
                {isActive && card.description && (
                  <motion.p
                    key="desc"
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    className="text-center text-white/90 text-lg max-w-sm"
                  >
                    {card.description}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Button */}
              {isActive && card.description && (
                <Button className="mt-5 px-6" ><a href="#">Pelajari lebih lanjut</a></Button>
              )}
            </motion.div>

            {/* Overlay card lain */}
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
