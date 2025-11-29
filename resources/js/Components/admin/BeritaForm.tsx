import React, { useState, useEffect } from "react";
import axios from "axios";

interface Region {
    id: number;
    name: string;
    kode_kabupaten_kota?: string;
}

interface District {
    code: string;
    name: string;
}

interface Props {
    auth?: any;
}

const FormBerita: React.FC<Props> = () => {
    const [judul, setJudul] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [isiBerita, setIsiBerita] = useState("");
    const [urlBerita, setUrlBerita] = useState("");
    const [gambar, setGambar] = useState<File | null>(null);

    // PROVINSI
    const [provinces, setProvinces] = useState([]);
    const [provinceId, setProvinceId] = useState("");

    // KABUPATEN
    const [regions, setRegions] = useState<Region[]>([]);
    const [regionId, setRegionId] = useState("");

    // KECAMATAN
    const [districts, setDistricts] = useState<District[]>([]);
    const [districtId, setDistrictId] = useState("");

    // KATEGORI
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState("");

    // AMBIL PROVINSI + KATEGORI
    useEffect(() => {
        axios.get("/provinces").then((res) => setProvinces(res.data));
        axios.get("/kategori-kekeringan").then((res) => setCategories(res.data));
    }, []);

    // AMBIL KABUPATEN BERDASARKAN PROVINSI
    useEffect(() => {
        if (!provinceId) {
            setRegions([]);
            setRegionId("");
            return;
        }

        axios.get("/regions", { params: { province_id: provinceId } })
            .then((res) => setRegions(res.data));
    }, [provinceId]);

    // AMBIL KECAMATAN (DISTRICTS) BERDASARKAN KABUPATEN
    useEffect(() => {
        if (!regionId) {
            setDistricts([]);
            setDistrictId("");
            return;
        }

        const selectedRegion = regions.find(r => r.id === Number(regionId));

        if (!selectedRegion || !selectedRegion.kode_kabupaten_kota) return;

        axios.get("/districts", {
            params: { regency_code: selectedRegion.kode_kabupaten_kota }
        })
            .then((res) => {
                if (res.data && res.data.data) setDistricts(res.data.data);
            })
            .catch((err) => {
                console.error("Gagal ambil kecamatan:", err);
            });
    }, [regionId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("judul", judul);
        formData.append("tanggal_berita", tanggal);
        formData.append("isi_berita", isiBerita);
        formData.append("url_berita", urlBerita);
        formData.append("region_id", regionId);
        formData.append("kecamatan", districtId);
        formData.append("kategori_kekeringan_id", categoryId);
        if (gambar) formData.append("gambar", gambar);

        try {
            await axios.post("/berita", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("Berita berhasil disimpan!");
        } catch (err) {
            console.error(err);
            alert("Gagal menyimpan berita.");
        }
    };

    const baseInput =
        "h-14 rounded-lg border border-gray-300 dark:border-gray-600 " +
        "bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white " +
        "px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none";

    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <div className="flex h-full grow flex-col">
                <div className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
                    <div className="flex w-full max-w-[960px] flex-col">

                        <div className="mb-8">
                            <h1 className="text-4xl font-black text-gray-900 dark:text-white">
                                Formulir Berita Kekeringan
                            </h1>
                            <p className="text-base text-gray-600 dark:text-gray-300">
                                Isi detail untuk menambahkan berita baru.
                            </p>
                        </div>

                        <div className="w-full rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 bg-white dark:bg-gray-800 shadow">
                            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

                                {/* JUDUL + TANGGAL */}
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="flex flex-col">
                                        <label className="font-medium text-gray-800 dark:text-gray-200 pb-2">
                                            Judul Berita
                                        </label>
                                        <input
                                            type="text"
                                            value={judul}
                                            onChange={(e) => setJudul(e.target.value)}
                                            className={baseInput}
                                            placeholder="Masukkan judul"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-medium text-gray-800 dark:text-gray-200 pb-2">
                                            Tanggal Publikasi
                                        </label>
                                        <input
                                            type="date"
                                            value={tanggal}
                                            onChange={(e) => setTanggal(e.target.value)}
                                            className={baseInput}
                                        />
                                    </div>
                                </div>

                                {/* PROVINSI */}
                                <div className="flex flex-col">
                                    <label className="font-medium text-gray-800 dark:text-gray-200 pb-2">
                                        Pilih Provinsi
                                    </label>
                                    <select
                                        value={provinceId}
                                        onChange={(e) => setProvinceId(e.target.value)}
                                        className={baseInput}
                                    >
                                        <option value="">-- Pilih Provinsi --</option>
                                        {provinces.map((prov: any) => (
                                            <option key={prov.id} value={prov.id}>
                                                {prov.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* KABUPATEN */}
                                <div className="flex flex-col">
                                    <label className="font-medium text-gray-800 dark:text-gray-200 pb-2">
                                        Pilih Kabupaten / Kota
                                    </label>
                                    <select
                                        value={regionId}
                                        onChange={(e) => setRegionId(e.target.value)}
                                        disabled={!provinceId}
                                        className={`${baseInput} ${!provinceId ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        <option value="">-- Pilih Kabupaten/Kota --</option>
                                        {regions.map((reg) => (
                                            <option key={reg.id} value={reg.id}>
                                                {reg.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* KECAMATAN */}
                                <div className="flex flex-col">
                                    <label className="font-medium text-gray-800 dark:text-gray-200 pb-2">
                                        Pilih Kecamatan
                                    </label>
                                    <select
                                        value={districtId}
                                        onChange={(e) => setDistrictId(e.target.value)}
                                        disabled={!regionId}
                                        className={`${baseInput} ${!regionId ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        <option value="">-- Pilih Kecamatan --</option>
                                        {districts.map((d: District) => (
                                            <option key={d.code} value={d.name}>
                                                {d.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* KATEGORI */}
                                <div className="flex flex-col">
                                    <label className="font-medium text-gray-800 dark:text-gray-200 pb-2">
                                        Kategori Kekeringan
                                    </label>
                                    <select
                                        value={categoryId}
                                        onChange={(e) => setCategoryId(e.target.value)}
                                        className={baseInput}
                                    >
                                        <option value="">-- Pilih Kategori --</option>
                                        {categories.map((kat: any) => (
                                            <option key={kat.id} value={kat.id}>
                                                {kat.nama_kategori}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* ISI BERITA */}
                                <div className="flex flex-col">
                                    <label className="font-medium text-gray-800 dark:text-gray-200 pb-2">
                                        Isi Berita
                                    </label>
                                    <textarea
                                        value={isiBerita}
                                        onChange={(e) => setIsiBerita(e.target.value)}
                                        className="min-h-[250px] w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="Tulis isi berita..."
                                    />
                                </div>

                                {/* URL + GAMBAR */}
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="flex flex-col">
                                        <label className="font-medium text-gray-800 dark:text-gray-200 pb-2">
                                            URL Berita Eksternal (Opsional)
                                        </label>
                                        <input
                                            type="url"
                                            value={urlBerita}
                                            onChange={(e) => setUrlBerita(e.target.value)}
                                            className={baseInput}
                                            placeholder="https://contoh.com/berita"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-medium text-gray-800 dark:text-gray-200 pb-2">
                                            Gambar Utama Berita
                                        </label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                if (e.target.files) {
                                                    setGambar(e.target.files[0]);
                                                }
                                            }}
                                            className="block w-full cursor-pointer rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-3 text-gray-900 dark:text-white"
                                        />
                                    </div>
                                </div>

                                {/* BUTTON */}
                                <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-4">
                                    <button
                                        type="button"
                                        className="h-12 px-6 rounded-lg border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200"
                                    >
                                        Batalkan
                                    </button>

                                    <button
                                        type="submit"
                                        className="h-12 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow"
                                    >
                                        Simpan Berita
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormBerita;
