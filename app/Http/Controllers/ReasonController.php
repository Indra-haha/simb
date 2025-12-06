<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ReasonController extends Controller
{
    public function show(Request $request)
    {
        $id = $request->query('id'); // ambil ?id=xxx

        // Data statis (tanpa database)
        $reasons = [
            "el-nino" => [
                "title" => "El Nino",
                "img" => "/images/el-nino.png",
                "content" => "El Nino adalah fenomena pemanasan suhu laut Samudera Pasifik yang menyebabkan curah hujan menurun drastis sehingga memicu kekeringan di beberapa wilayah.",
            ],
            "kemarau-panjang" => [
                "title" => "Kemarau Panjang",
                "img" => "/images/kemarau-panjang.png",
                "content" => "Kemarau panjang mengakibatkan kurangnya suplai air tanah dan sumber air permukaan sehingga meningkatkan risiko kekeringan berat.",
            ],
            "global-warming" => [
                "title" => "Global Warming",
                "img" => "/images/global-warming.png",
                "content" => "Pemanasan global memicu peningkatan suhu dan perubahan pola hujan sehingga memperparah kekeringan di banyak wilayah.",
            ],
            "deforestasi" => [
                "title" => "Deforestasi",
                "img" => "/images/deforestasi.png",
                "content" => "Penebangan hutan mengurangi kemampuan tanah menyerap air sehingga mempercepat kekeringan.",
            ],
            "urbanisasi" => [
                "title" => "Urbanisasi",
                "img" => "/images/urbanisasi.png",
                "content" => "Urbanisasi meningkatkan konsumsi air tanpa penambahan sumber air yang memadai.",
            ],
            "penggunaan-air-berlebihan" => [
                "title" => "Penggunaan Air Berlebihan",
                "img" => "/images/penggunaan-air-berlebihan.png",
                "content" => "Penggunaan air yang tidak terkendali menyebabkan cadangan air habis lebih cepat.",
            ],
            "pengelolaan-air-buruk" => [
                "title" => "Infrastruktur Air Buruk",
                "img" => "/images/pengelolaan-air-buruk.png",
                "content" => "Sistem irigasi dan infrastruktur air yang buruk menyebabkan pemborosan air dan kekeringan.",
            ],
        ];

        // Jika id tidak ditemukan
        if (!isset($reasons[$id])) {
            abort(404, "Reason not found");
        }

        return Inertia::render('NewsDetail', [
            'data' => $reasons[$id],
        ]);
    }
}
