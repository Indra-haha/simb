"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover brightness-50"
      >
        <source src="/hero-slowvideo.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Setetes Air, Sejuta Kehidupan</h1>
        <p className="text-xl mb-6">Pelajari dampak kekeringan dan cara mitigasinya</p>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded text-white font-semibold">
            Pelajari Kekeringan
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white font-semibold">
            Lihat Statistik
          </button>
        </div>
      </div>
    </section>
  );
}
