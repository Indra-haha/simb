"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ExpandingMitigasiCard() {
  const [active, setActive] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Sebelum",
      subContents: [
        { image: "images/save-water.png", text: "Menghemat penggunaan air." },
        { image: "images/green-tea.png", text: "Menanam pohon untuk menyimpan cadangan air." },
        { image: "images/plumbing-maintenance.png", text: "Membangun infrastruktur pemeliharaan saluran air." },
      ],
    },
    {
      id: 2,
      title: "Saat",
      subContents: [
        { image: "images/pump.png", text: "Membangun sumur bor untuk mendapatkan air." },
        { image: "images/tank.png", text: "Menyediakan air dari sumber lain yang mendukung." },
        { image: "images/clouds.png", text: "Membuat hujan buatan di daerah terkena kekeringan." },
      ],
    },
    {
      id: 3,
      title: "Sesudah",
      subContents: [
        { image: "images/save-water.png", text: "Menghemat penggunaan air." },
        { image: "images/create-waduk.png", text: "Menyediakan tempat penampungan air cadangan" },
        { image: "images/discussion.png", text: "Sosialisasi kepedulian lingkungan pada masyarakat" },
      ],
    },
  ];

  // Return an inline style object with CSS gradient string (guaranteed applied)
  const getBgStyle = (id) => {
    if (id === 1) {
      // amber -> orange
      return {
        backgroundImage:
          "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)", // from-amber-500 to-orange-600
      };
    } else if (id === 2) {
      // red -> darker red
      return {
        backgroundImage:
          "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)", // from-red-500 to-red-700
      };
    } else if (id === 3) {
      // green -> emerald
      return {
        backgroundImage:
          "linear-gradient(135deg, #10b981 0%, #059669 100%)", // from-green-500 to-emerald-700
      };
    }
    return {};
  };

  // Keep text color classes static so Tailwind will include them
  const getTextColorClass = (id) => {
    // if you want different text color per card change here
    return "text-black";
  };

  return (
    <div className="w-full">
      <h2 className="text-4xl py-5 font-bold text-center text-black">
        Mitigasi Bencana Kekeringan
      </h2>

      <p className="text-center">Beberapa langkah mitigasi yang dapat dilakukan :</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 px-4">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            onClick={() => setActive(active === card.id ? null : card.id)}
            animate={{ scale: active === card.id ? 1.03 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            // Put static utility classes (guaranteed by Tailwind) AND inline style for gradient
            className={
              // keep some tailwind classes to preserve layout & fallback
              "p-6 rounded-xl cursor-pointer shadow-lg transition-all duration-300 " +
              // fallback background in case inline style blocked for some reason
              (card.id === 1
                ? "bg-amber-500/"
                : card.id === 2
                ? "bg-red-500/"
                : "bg-green-500/") +
              // text color class static
              " " +
              getTextColorClass(card.id)
            }
            style={getBgStyle(card.id)}
          >
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>

            {active === card.id && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-4 flex flex-col gap-4"
              >
                {card.subContents.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <img src={item.image} className="w-12 h-12" alt="" />
                    <p className="font-medium">{item.text}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
