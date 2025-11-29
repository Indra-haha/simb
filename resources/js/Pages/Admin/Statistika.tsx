import React from "react";
import AdminLayout from "../../Layouts/Admin";
import { useForm } from "@inertiajs/react";

interface Props {
    auth?: any;
}

const Statistika: React.FC<Props> = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        jenis_bencana: "",
        wilayah: "",
        periode: "",
        korban_jiwa: "",
        korban_luka: "",
        pengungsi: "",
        kerugian: "",
        catatan: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/Admin/Statistika");
    };

    // Fungsi helper untuk mencegah angka minus
    const positiveNumber = (value: string) => {
        if (Number(value) < 0) return "";
        return value;
    };

    // Fungsi helper untuk hanya mengizinkan angka pada input kerugian
    const sanitizeCurrency = (value: string) => {
        return value.replace(/[^0-9]/g, ""); // hapus semua non-digit
    };

    return (
        <AdminLayout>
            <div className="mx-auto max-w-4xl">
                <div className="flex flex-wrap justify-between gap-4 mb-8">
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-black leading-tight tracking-[-0.033em]">Dashboard Statistik Kekeringan</p>
                        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">Analisis tren kekeringan berdasarkan data historis selama lima tahun terakhir.</p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white dark:bg-[#18232f] p-4 rounded-xl shadow">
                    <div className="flex flex-wrap items-center gap-4">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 shrink-0">Filter Data:</p>
                        <div className="flex flex-wrap gap-2">
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-700/50 pl-4 pr-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                <p className="text-sm font-medium leading-normal">Pilih Wilayah</p>
                                <span className="material-symbols-outlined">arrow_drop_down</span>
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 dark:bg-primary/30 pl-4 pr-2 text-primary hover:bg-primary/25 dark:hover:bg-primary/40 transition-colors">
                                <p className="text-sm font-medium leading-normal">Meteorologis</p>
                                <span className="material-symbols-outlined">arrow_drop_down</span>
                            </button>
                        </div>
                    </div>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                        <span className="material-symbols-outlined">database</span>
                        <span className="truncate">Kelola Data Sumber</span>
                    </button>
                </div>
                <div className="bg-white dark:bg-[#18232f] rounded-xl shadow p-6">
                    <div className="mb-4">
                        <p className="text-gray-900 dark:text-white text-lg font-semibold leading-normal">Grafik Tren Kekeringan (Meteorologis) 5 Tahun Terakhir - Jawa Barat</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Data dari tahun 2020 hingga 2024</p>
                    </div>
                    <div className="min-h-[350px] w-full">
                        <svg fill="none" height="100%" viewBox="0 0 700 350" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <line className="dark:stroke-gray-700" stroke="#E5E7EB" stroke-dasharray="2 2" stroke-width="1" x1="50" x2="50" y1="50" y2="300"></line>
                            <line className="dark:stroke-gray-700" stroke="#E5E7EB" stroke-width="1" x1="50" x2="650" y1="300" y2="300"></line>
                            <line className="dark:stroke-gray-700" stroke="#E5E7EB" stroke-dasharray="2 2" stroke-width="1" x1="50" x2="650" y1="250" y2="250"></line>
                            <line className="dark:stroke-gray-700" stroke="#E5E7EB" stroke-dasharray="2 2" stroke-width="1" x1="50" x2="650" y1="200" y2="200"></line>
                            <line className="dark:stroke-gray-700" stroke="#E5E7EB" stroke-dasharray="2 2" stroke-width="1" x1="50" x2="650" y1="150" y2="150"></line>
                            <line className="dark:stroke-gray-700" stroke="#E5E7EB" stroke-dasharray="2 2" stroke-width="1" x1="50" x2="650" y1="100" y2="100"></line>
                            <text className="dark:fill-gray-400" fill="#6B7280" font-family="Inter" font-size="12" text-anchor="middle" x="100" y="320">2020</text>
                            <text className="dark:fill-gray-400" fill="#6B7280" font-family="Inter" font-size="12" text-anchor="middle" x="225" y="320">2021</text>
                            <text className="dark:fill-gray-400" fill="#6B7280" font-family="Inter" font-size="12" text-anchor="middle" x="350" y="320">2022</text>
                            <text className="dark:fill-gray-400" fill="#6B7280" font-family="Inter" font-size="12" text-anchor="middle" x="475" y="320">2023</text>
                            <text className="dark:fill-gray-400" fill="#6B7280" font-family="Inter" font-size="12" text-anchor="middle" x="600" y="320">2024</text>
                            <text className="dark:fill-gray-400" fill="#6B7280" font-family="Inter" font-size="12" text-anchor="end" x="40" y="305">0</text>
                            <text className="dark:fill-gray-400" fill="#6B7280" font-family="Inter" font-size="12" text-anchor="end" x="40" y="255">25</text>
                            <text className="dark:fill-gray-400" fill="#6B7280" font-family="Inter" font-size="12" text-anchor="end" x="40" y="205">50</text>
                            <text className="dark:fill-gray-400" fill="#6B7280" font-family="Inter" font-size="12" text-anchor="end" x="40" y="155">75</text>
                            <text className="dark:fill-gray-400" fill="#6B7280" font-family="Inter" font-size="12" text-anchor="end" x="40" y="105">100</text>
                            <polyline fill="none" points="100,250 225,220 350,200 475,180 600,150" stroke="#FF6384" stroke-width="2.5"></polyline>
                            <polyline fill="none" points="100,180 225,190 350,170 475,160 600,120" stroke="#4BC0C0" stroke-width="2.5"></polyline>
                            <polyline fill="none" points="100,280 225,260 350,240 475,210 600,190" stroke="#9966FF" stroke-width="2.5"></polyline>
                            <polyline fill="none" points="100,290 225,250 350,210 475,170 600,100" stroke="#36A2EB" stroke-width="2.5"></polyline>
                        </svg>
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-[#FF6384]"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">Penguapan Air Laut</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-[#4BC0C0]"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">Nilai Suhu</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-[#9966FF]"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">Kelembaban Suhu (RH)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-[#36A2EB]"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">Curah Hujan</span>
                        </div>
                    </div>
                </div>
                <div className="mt-8 bg-white dark:bg-[#18232f] rounded-xl shadow p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Input Data Baru (Meteorologis)</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="tahun-data">Tahun Data</label>
                                <input className="w-full h-10 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" id="tahun-data" placeholder="Contoh: 2024" type="number" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="penguapan">Penguapan air laut</label>
                                <input className="w-full h-10 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" id="penguapan" placeholder="Masukkan nilai" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="nilai-suhu">Nilai suhu</label>
                                <input className="w-full h-10 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" id="nilai-suhu" placeholder="Masukkan nilai" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="kelembaban-rh">Kelembaban suhu (Nilai RH)</label>
                                <input className="w-full h-10 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" id="kelembaban-rh" placeholder="Masukkan nilai" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="curah-hujan">Curah hujan</label>
                                <input className="w-full h-10 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" id="curah-hujan" placeholder="Masukkan nilai" type="text" />
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-3 pt-4">
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 gap-2 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors" type="reset">
                                <span className="material-symbols-outlined">refresh</span>
                                <span className="truncate">Reset Form</span>
                            </button>
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" type="submit">
                                <span className="material-symbols-outlined">add</span>
                                <span className="truncate">Tambah Data</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Statistika;
