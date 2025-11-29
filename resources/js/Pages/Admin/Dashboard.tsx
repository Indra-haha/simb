import React from "react";
import AdminLayout from "../../Layouts/Admin";
import FormBerita from "@/Components/admin/BeritaForm";

interface dashboardProps {
    auth: any;
}

const dashboard: React.FC<dashboardProps> = () => {
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

                    <button onClick={() => window.location.href = '/berita/create'}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-5 bg-primary text-white dark:text-black text-sm font-medium leading-normal tracking-wide hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-colors">
                        <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                            add_circle
                        </span>
                        <span className="truncate">Tambah Berita Baru</span>
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-2 rounded-lg p-6 bg-white dark:bg-[#2D3748] border border-slate-200 dark:border-slate-700">
                        <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal">Laporan Bencana Bulan Ini</p>
                        <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">125</p>
                        <p className="text-[#48BB78] text-sm font-medium leading-normal">+15.2% dari bulan lalu</p>
                    </div>

                    <div className="flex flex-col gap-2 rounded-lg p-6 bg-white dark:bg-[#2D3748] border border-slate-200 dark:border-slate-700">
                        <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal">Total Pengguna Aktif</p>
                        <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">1,480</p>
                        <p className="text-[#48BB78] text-sm font-medium leading-normal">+2.1% dari bulan lalu</p>
                    </div>

                    <div className="flex flex-col gap-2 rounded-lg p-6 bg-white dark:bg-[#2D3748] border border-slate-200 dark:border-slate-700">
                        <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal">Berita Dipublikasikan</p>
                        <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">56</p>
                        <p className="text-[#E53E3E] text-sm font-medium leading-normal">-1.5% dari bulan lalu</p>
                    </div>
                </div>

                {/* Charts */}
                <div className="flex flex-wrap gap-6">
                    <div className="flex min-w-72 flex-1 flex-col gap-4 rounded-lg bg-white dark:bg-[#2D3748] border border-slate-200 dark:border-slate-700 p-6">

                        <div className="flex flex-col">
                            <p className="text-slate-800 dark:text-white text-lg font-semibold leading-normal">
                                Tren Laporan Bencana
                            </p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Data 6 bulan terakhir</p>
                        </div>

                        <div className="flex min-h-[200px] flex-1 flex-col gap-4">
                            <svg
                                fill="none"
                                height="100%"
                                preserveAspectRatio="none"
                                viewBox="0 0 475 150"
                                width="100%"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 109C18.2308 109 18.2308 21 36.4615 21C54.6923 21 54.6923 41 72.9231 41C91.1538 41 91.1538 93 109.385 93C127.615 93 127.615 33 145.846 33C164.077 33 164.077 101 182.308 101C200.538 101 200.538 61 218.769 61C237 61 237 45 255.231 45C273.462 45 273.462 121 291.692 121C309.923 121 309.923 149 328.154 149C346.385 149 346.385 1 364.615 1C382.846 1 382.846 81 401.077 81C419.308 81 419.308 129 437.538 129C455.769 129 455.769 25 474 25"
                                    stroke="#3182CE"
                                    strokeLinecap="round"
                                    strokeWidth="3"
                                />

                                <path
                                    d="M0 109C18.2308 109 18.2308 21 36.4615 21C54.6923 21 54.6923 41 72.9231 41C91.1538 41 91.1538 93 109.385 93C127.615 93 127.615 33 145.846 33C164.077 33 164.077 101 182.308 101C200.538 101 200.538 61 218.769 61C237 61 237 45 255.231 45C273.462 45 273.462 121 291.692 121C309.923 121 309.923 149 328.154 149C346.385 149 346.385 1 364.615 1C382.846 1 382.846 81 401.077 81C419.308 81 419.308 129 437.538 129C455.769 129 455.769 25 474 25V150H0V109Z"
                                    fill="url(#chart-gradient)"
                                />

                                <defs>
                                    <linearGradient
                                        gradientUnits="userSpaceOnUse"
                                        id="chart-gradient"
                                        x1="237"
                                        x2="237"
                                        y1="1"
                                        y2="150"
                                    >
                                        <stop stopColor="#3182CE" stopOpacity="0.2" />
                                        <stop offset="1" stopColor="#3182CE" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <div className="flex justify-around">
                                {["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"].map((m) => (
                                    <p key={m} className="text-slate-400 dark:text-slate-500 text-xs font-medium">{m}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* SectionHeader + Data Table */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">
                        Aktivitas Terbaru
                    </h2>

                    <div className="overflow-x-auto bg-white dark:bg-[#2D3748] rounded-lg border border-slate-200 dark:border-slate-700">
                        <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                            <thead className="text-xs text-slate-700 dark:text-slate-300 uppercase bg-slate-50 dark:bg-slate-800">
                                <tr>
                                    <th className="px-6 py-3">Judul Berita</th>
                                    <th className="px-6 py-3">Kategori</th>
                                    <th className="px-6 py-3">Tanggal Publikasi</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3"><span className="sr-only">Aksi</span></th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* Sample rows */}
                                {/* ... (rows kamu tetap sama, tidak ada warning di tabel) */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <FormBerita />
            </div>
        </AdminLayout>
    );
};

export default dashboard;
