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

    const positive = (v: string) => Number(v) < 0 ? "" : v;
    const currency = (v: string) => v.replace(/[^0-9]/g, "");

    return (
        <AdminLayout>
            <div className="max-w-4xl mx-auto">
                {/* PageHeading */}
                <div className="flex flex-wrap justify-between gap-3 mb-8">
                    <p className="text-gray-800 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Input Informasi Bencana Kekeringan</p>
                </div>
                <div className="flex flex-col gap-6">
                    {/* Section 1: Pengertian Bencana */}
                    <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-gray-200 dark:border-[#344d65]">
                        <h3 className="text-gray-800 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Pengertian Bencana</h3>
                        <label className="flex flex-col w-full">
                            <p className="text-gray-600 dark:text-white text-base font-medium leading-normal pb-2">Deskripsi Pengertian Bencana Kekeringan</p>
                            <textarea className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#344d65] bg-gray-50 dark:bg-[#111921] focus:border-primary min-h-36 placeholder:text-gray-400 dark:placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal" placeholder="Jelaskan secara umum apa itu bencana kekeringan..."></textarea>
                        </label>
                    </div>
                    {/* Section 2: Penyebab Bencana */}
                    <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-gray-200 dark:border-[#344d65]">
                        <h3 className="text-gray-800 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Penyebab Bencana</h3>
                        <div className="flex flex-col gap-6">
                            {/* Dynamic Input Group Item */}
                            <div className="border border-gray-200 dark:border-[#344d65] rounded-lg p-4 flex flex-col gap-4 relative">
                                <button className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 dark:hover:text-red-400">
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <label className="flex flex-col min-w-40 flex-1">
                                        <p className="text-gray-600 dark:text-white text-sm font-medium leading-normal pb-2">Nama Penyebab</p>
                                        <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#344d65] bg-gray-50 dark:bg-[#111921] focus:border-primary placeholder:text-gray-400 dark:placeholder:text-[#93adc8] p-3 text-sm font-normal leading-normal" placeholder="cth. Curah Hujan Rendah" type="text" />
                                    </label>
                                    <label className="flex flex-col min-w-40 flex-1">
                                        <p className="text-gray-600 dark:text-white text-sm font-medium leading-normal pb-2">Unggah Gambar</p>
                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 dark:border-[#344d65] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-[#111921] hover:bg-gray-100 dark:hover:border-gray-500 dark:hover:bg-[#1a2632]" htmlFor="dropzone-file-1">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 mb-2">cloud_upload</span>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Klik untuk unggah</span></p>
                                                </div>
                                                <input className="hidden" id="dropzone-file-1" type="file" />
                                            </label>
                                        </div>
                                    </label>
                                </div>
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-gray-600 dark:text-white text-sm font-medium leading-normal pb-2">Penjelasan</p>
                                    <textarea className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#344d65] bg-gray-50 dark:bg-[#111921] focus:border-primary min-h-24 placeholder:text-gray-400 dark:placeholder:text-[#93adc8] p-3 text-sm font-normal leading-normal" placeholder="Jelaskan penyebabnya..."></textarea>
                                </label>
                            </div>
                        </div>
                        <button className="mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 hover:bg-primary/30 text-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors duration-200">
                            <span className="material-symbols-outlined mr-2">add_circle</span>
                            <span className="truncate">Tambah Penyebab</span>
                        </button>
                    </div>
                    {/* Section 3: Mitigasi Bencana */}
                    <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-gray-200 dark:border-[#344d65]">
                        <h3 className="text-gray-800 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Strategi Mitigasi</h3>
                        <div className="border-b border-gray-200 dark:border-gray-700">
                            <nav aria-label="Tabs" className="-mb-px flex space-x-6">
                                <a aria-current="page" className="shrink-0 border-b-2 border-primary px-1 pb-4 text-sm font-medium text-primary" href="#">Sebelum Bencana</a>
                                <a className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300" href="#">Saat Bencana</a>
                                <a className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300" href="#">Setelah Bencana</a>
                            </nav>
                        </div>
                        <div className="pt-6">
                            <label className="flex flex-col w-full">
                                <p className="text-gray-600 dark:text-white text-base font-medium leading-normal pb-2">Penjelasan Mitigasi Sebelum Bencana</p>
                                <textarea className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#344d65] bg-gray-50 dark:bg-[#111921] focus:border-primary min-h-36 placeholder:text-gray-400 dark:placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal" placeholder="Jelaskan langkah-langkah mitigasi yang dapat dilakukan sebelum bencana terjadi..."></textarea>
                            </label>
                        </div>
                    </div>
                    {/* Section 4: Dampak Bencana */}
                    <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-gray-200 dark:border-[#344d65]">
                        <h3 className="text-gray-800 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Karakteristik Dampak Kekeringan</h3>
                        <div className="space-y-4">
                            {/* Accordion Item */}
                            <details className="group rounded-lg bg-gray-50 dark:bg-[#111921] p-4 [&amp;_summary::-webkit-details-marker]:hidden" open>
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white">
                                    <h2 className="font-medium">Meteorologi</h2>
                                    <span className="relative size-5 shrink-0">
                                        <span className="material-symbols-outlined absolute inset-0 opacity-100 group-open:opacity-0">add</span>
                                        <span className="material-symbols-outlined absolute inset-0 opacity-0 group-open:opacity-100">remove</span>
                                    </span>
                                </summary>
                                <div className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200 flex flex-col gap-4">
                                    <label className="flex flex-col min-w-40 flex-1">
                                        <p className="text-gray-600 dark:text-white text-sm font-medium leading-normal pb-2">Penjelasan</p>
                                        <textarea className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#344d65] bg-gray-100 dark:bg-[#1a2632] focus:border-primary min-h-24 placeholder:text-gray-400 dark:placeholder:text-[#93adc8] p-3 text-sm font-normal leading-normal" placeholder="Jelaskan dampak dari sisi meteorologi..."></textarea>
                                    </label>
                                    <label className="flex flex-col min-w-40 flex-1">
                                        <p className="text-gray-600 dark:text-white text-sm font-medium leading-normal pb-2">Unggah Gambar</p>
                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 dark:border-[#344d65] border-dashed rounded-lg cursor-pointer bg-gray-100 dark:hover:bg-bray-800 dark:bg-[#1a2632] hover:bg-gray-200 dark:hover:border-gray-500 dark:hover:bg-[#111921]" htmlFor="dropzone-file-2">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 mb-2">cloud_upload</span>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Klik untuk unggah</span></p>
                                                </div>
                                                <input className="hidden" id="dropzone-file-2" type="file" />
                                            </label>
                                        </div>
                                    </label>
                                </div>
                            </details>
                            {/* More Accordion Items */}
                            <details className="group rounded-lg bg-gray-50 dark:bg-[#111921] p-4 [&amp;_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white">
                                    <h2 className="font-medium">Hidrologi</h2>
                                    <span className="relative size-5 shrink-0">
                                        <span className="material-symbols-outlined absolute inset-0 opacity-100 group-open:opacity-0">add</span>
                                        <span className="material-symbols-outlined absolute inset-0 opacity-0 group-open:opacity-100">remove</span>
                                    </span>
                                </summary>
                            </details>
                            <details className="group rounded-lg bg-gray-50 dark:bg-[#111921] p-4 [&amp;_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white">
                                    <h2 className="font-medium">Sosial Ekonomi</h2>
                                    <span className="relative size-5 shrink-0">
                                        <span className="material-symbols-outlined absolute inset-0 opacity-100 group-open:opacity-0">add</span>
                                        <span className="material-symbols-outlined absolute inset-0 opacity-0 group-open:opacity-100">remove</span>
                                    </span>
                                </summary>
                            </details>
                            <details className="group rounded-lg bg-gray-50 dark:bg-[#111921] p-4 [&amp;_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white">
                                    <h2 className="font-medium">Agrikultur</h2>
                                    <span className="relative size-5 shrink-0">
                                        <span className="material-symbols-outlined absolute inset-0 opacity-100 group-open:opacity-0">add</span>
                                        <span className="material-symbols-outlined absolute inset-0 opacity-0 group-open:opacity-100">remove</span>
                                    </span>
                                </summary>
                            </details>
                        </div>
                    </div>
                    {/* Form Actions */}
                    <div className="flex justify-end gap-4 mt-4">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-[#344d65] text-gray-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-[#4a637d] transition-colors duration-200">
                            <span className="truncate">Batalkan</span>
                        </button>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-200">
                            <span className="truncate">Simpan Informasi</span>
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Statistika;
