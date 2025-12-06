import React, { useState } from "react";
import AdminLayout from "../../Layouts/Admin";
import FormBerita from "@/Components/admin/BeritaForm";
import { useEffect } from "react";

interface dashboardProps {
    auth: any;
}

const dashboard: React.FC<dashboardProps> = () => {
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
        <AdminLayout>
            <div className="flex flex-col p-6 md:p-8 lg:p-10 gap-8 ">
                
                {/* PageHeading */}
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">
                            Dashboard
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                            Selamat datang kembali, Admin!
                        </p>
                    </div>

                </div>

                {/* Stats */}
                <section className="pb-12 md:pb-20">
                <div className="max-w-[1280px] mx-auto">

                    <div className="flex flex-col md:flex-row md:justify-between gap-8">

                        {/* Kejadian */}
                        <div className="flex flex-col gap-2 rounded-lg p-6 flex-1 border border-[#dbe6e0] dark:border-white/10 bg-white dark:bg-background-dark/50">
                            <p className="text-[#111814] dark:text-white/90 text-base font-medium">Kejadian Kekeringan Tahun Ini</p>
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
                            <p className="text-[#111814] dark:text-white/90 text-base font-medium">Berdampak pada berapa faktor</p>
                            <p className="text-[#111814] dark:text-white text-2xl font-bold">
                                {stats.kategori}
                            </p>
                        </div>

                    </div>

                </div>
            </section>
                
                <FormBerita />
            </div>
        </AdminLayout>
    );
};

export default dashboard;
