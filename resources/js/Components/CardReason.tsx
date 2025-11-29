"use client"

interface CardItem {
  id: number
  title: string
  url?: string
  img?: string
}

interface ReasonCardsProps {
  cards: CardItem[]
  defaultActive?: number | null
}

export default function CardReason({ cards, defaultActive = null }: ReasonCardsProps) {
  return (
    <div className="flex flex-row flex-wrap gap-8 justify-center py-10">
      {cards.map((card) => (
        <div key={card.id}
            className="group relative h-[300px] w-[250px] rounded-xl overflow-hidden shadow-md 
                       flex flex-col justify-between bg-[#f3f3f3]
                       transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl"
        >
            {/* Area Gambar */}
            <div
                className="flex items-center justify-center h-full transition-all duration-500 
                           group-hover:blur-sm group-hover:brightness-75"
            >
                <img
                    src={card.img}
                    alt={card.title}
                    className="object-cover w-[150px] h-[150px] transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Overlay gelap lembut saat hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

            {/* Teks nama di bawah */}
            <h3
                className="z-10 flex items-center justify-center text-center text-[#000000] 
                           bg-amber-500 h-[110px] px-7 font-semibold 
                           transition-colors duration-300 group-hover:bg-amber-400"
            >
                {card.title}
            </h3>

            {/* Tombol See More di tengah (hidden sebelum hover) */}
            <div
                className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-4
                           transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
            >
                <a
                    href={card.url}
                    className="px-6 py-2 rounded-full bg-[#868686] text-white text-sm uppercase 
                               shadow-md transition-all duration-300 group-hover:bg-amber-400 group-hover:scale-110"
                >
                    See More
                </a>
            </div>
        </div>
      ))}
    </div>
  );
}
