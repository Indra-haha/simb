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

  const API_URL = "/berita"  // <-- ganti ke API Laravel

  // Fetch data dari database Laravel
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL)
        const data = await res.json()

        const mapped = data.map((item: any) => ({
          id: item.id,
          title: item.judul,
          tgl: item.tanggal_berita,
          img: item.gambar ? `/storage/${item.gambar}` : "",
          url: item.url_berita ?? "#",
        }))

        setCards(mapped)
      } catch (err) {
        console.error("Fetch error:", err)
      }
    }

    fetchData()
  }, [])

  // Auto-slide
  useEffect(() => {
    if (cards.length === 0) return
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % cards.length)
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
                  style={{ backgroundImage: `url(${card.img})` }}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <div className="flex items-center mx-10 px-15 py-12">
                    <div className="relative flex size-5">
                      <span className="absolute animate-ping size-5 rounded-full bg-yellow-300 opacity-90"></span>
                      <span className="relative inline-flex size-5 rounded-full bg-yellow-400"></span>
                    </div>
                    <span className="text-white text-2xl px-5 drop-shadow-lg">
                      Breaking News
                    </span>
                  </div>

                  <div className="text-3xl text-white text-start px-20 py-6 bg-black/40 backdrop-blur-sm">
                    <h2 className="text-3xl font-bold">{card.title}</h2>
                    <span className="text-xl opacity-90">{card.tgl}</span>
                  </div>
                </motion.a>
              )
          )}
      </AnimatePresence>

      {/* indikator */}
      {cards.length > 0 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {cards.slice(0, 4).map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-yellow-400 scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
