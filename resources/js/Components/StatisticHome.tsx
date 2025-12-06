"use client"

import { useEffect, useState } from "react"

export default function StatisticHome() {

    const [stats, setStats] = useState({
        kejadian: 0,
        provinsi: 0,
        kategori: 0,
    });

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch("/statistik-home");
            const data = await res.json();
            setStats(data);
        };
        loadData();
    }, []);

    return (
        <>
            <section className="py-12">
                <div className="px-4">
                    <h1 className="text-[#111814] dark:text-white tracking-light text-3xl md:text-[32px] font-bold leading-tight text-center">
                        Peduli Bumi, Peduli Sesama
                    </h1>
                </div>
            </section>

            {/* Stats Section */}
            <section className="pb-12 md:pb-20">
                <div className="max-w-[1280px] mx-auto">

                    <div className="flex flex-col md:flex-row md:justify-between gap-8">

                        {/* Kejadian */}
                        <div className="flex flex-col gap-2 rounded-lg p-6 flex-1 border border-[#dbe6e0] dark:border-white/10 bg-white dark:bg-background-dark/50">
                            <p className="text-[#111814] dark:text-white/90 text-base font-medium">Jumlah Kejadian</p>
                            <p className="text-[#111814] dark:text-white text-2xl font-bold">
                                {stats.kejadian}
                            </p>
                        </div>

                        {/* Provinsi */}
                        <div className="flex flex-col gap-2 rounded-lg p-6 flex-1 border border-[#dbe6e0] dark:border-white/10 bg-white dark:bg-background-dark/50">
                            <p className="text-[#111814] dark:text-white/90 text-base font-medium">Provinsi Terdampak</p>
                            <p className="text-[#111814] dark:text-white text-2xl font-bold">
                                {stats.provinsi}
                            </p>
                        </div>

                        {/* kategori */}
                        <div className="flex flex-col gap-2 rounded-lg p-6 flex-1 border border-[#dbe6e0] dark:border-white/10 bg-white dark:bg-background-dark/50">
                            <p className="text-[#111814] dark:text-white/90 text-base font-medium">Faktor yang terdampak</p>
                            <p className="text-[#111814] dark:text-white text-2xl font-bold">
                                {stats.kategori}
                            </p>
                        </div>

                    </div>

                </div>
            </section>
            {/* CTA Section */}
            <section className="bg-white bg-background-dark/50 py-16">
                <div className="@container">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[#111814] dark:text-white text-[32px] font-bold leading-tight max-w-2xl @[480px]:text-4xl @[480px]:font-black">
                                Pelajari Lebih Lanjut tentang Bencana dan Cara Mengatasinya
                            </h1>
                            <p className="text-[#111814] dark:text-white/80 text-base max-w-2xl mx-auto">
                                Pengetahuan adalah kunci untuk mitigasi dan membangun ketangguhan komunitas.
                            </p>
                        </div>
                        <button className="h-12 px-5 rounded-lg text-white font-bold bg-blue-500" onClick={() => window.location.href = '/pengetahuan'}>
                            Jelajahi Pusat Edukasi
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
