"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CardItem {
  id: number
  title: string
  tgl?: string
  img?: string
  url?: string
}

export default function NewsCard() {
  const [cards, setCards] = useState<CardItem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const SHEET_ID = "14f8XtTPeGjd2gIQBXwZG9fcJPSjGIG0hxClQmiQv5d0"
  const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`

  // Fetch data dari Google Sheet
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(SHEET_URL)
        const text = await res.text()
        const json = JSON.parse(text.substr(47).slice(0, -2))

        const rows = json.table.rows.map((r: any, i: number) => ({
          id: parseInt(r.c[0]?.v || i.toString()),
          title: r.c[2]?.v || "",
          tgl: r.c[3]?.v || "",
          img: r.c[4]?.v || "",
          url: r.c[5]?.v || "#",
        }))

        const filtered = rows.filter((r: CardItem) => r.title !== "")
        setCards(filtered)
      } catch (err) {
        console.error("Fetch error:", err)
      }
    }

    fetchData()
  }, [])

  // Auto slide setiap 3 detik
  useEffect(() => {
    if (cards.length === 0) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [cards.length])

  return (
    <div className="relative w-full h-[562px] overflow-hidden mt-10 mb-20 rounded-2xl">
      <AnimatePresence initial={false} custom={currentIndex}>
        {cards.length > 0 &&
          cards.map(
            (card, index) =>
              index === currentIndex && (
                <motion.a
                  key={card.id}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex flex-col justify-between bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${card.img})`,
                  }}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  {/* Header "Breaking News" */}
                  <div className="flex items-center mx-10 px-15 py-12">
                    <div className="relative flex size-5">
                      <span className="absolute animate-ping size-5 rounded-full bg-yellow-300 opacity-90"></span>
                      <span className="relative inline-flex size-5 rounded-full bg-yellow-400"></span>
                    </div>
                    <span className="text-white text-2xl px-5 drop-shadow-lg">
                      Breaking News
                    </span>
                  </div>

                  {/* Konten berita */}
                  <div className="text-3xl text-white text-start px-20 py-6 bg-black/40 backdrop-blur-sm">
                    <h2 className="text-3xl font-bold">{card.title}</h2>
                    <span className="text-xl opacity-90">{card.tgl}</span>
                  </div>
                </motion.a>
              )
          )}
      </AnimatePresence>

      {/* Indikator bawah dengan sliding window 3 */}
      {cards.length > 0 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {(() => {
            const windowSize = 3
            const total = cards.length
            const windowStart = Math.floor(currentIndex / windowSize) * windowSize
            const windowEnd = Math.min(windowStart + windowSize, total)
            return cards.slice(windowStart, windowEnd).map((_, idx) => {
              const actualIndex = windowStart + idx
              return (
                <span
                  key={actualIndex}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    actualIndex === currentIndex ? "bg-yellow-400 scale-125" : "bg-white/50"
                  }`}
                />
              )
            })
          })()}
        </div>
      )}
    </div>
  )
}
