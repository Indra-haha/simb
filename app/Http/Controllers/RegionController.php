<?php

namespace App\Http\Controllers;

use App\Models\Region;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class RegionController extends Controller
{
    public function index(Request $request)
    {
        $provinceId = $request->query('province_id');

        return Region::where('province_id', $provinceId)
            ->select('id', 'name', 'kode_kabupaten_kota')
            ->orderBy('name')
            ->get();
    }

    // ==========================================
    //  BARU → PROXY API KECAMATAN (districts)
    // ==========================================
   
}
