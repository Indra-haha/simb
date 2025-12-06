<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class StatisticController extends Controller
{
    public function index()
    {
        // 1. Kejadian kekeringan tahun ini
        $kejadian = DB::table('beritas')
            ->whereYear('tanggal_berita', now()->year)
            ->count();

        // 2. Provinsi terdampak (hitung unik province_id)
        $provinsi = DB::table('beritas')
            ->distinct()
            ->count('province_id');

        // 3. Kerusakan: hitung kategori yang terkena (unik)
        $kategori = DB::table('beritas')
            ->distinct()
            ->count('kategori_kekeringan_id');

        return response()->json([
            'kejadian' => $kejadian,
            'provinsi' => $provinsi,
            'kategori' => $kategori,
        ]);
    }
}
