<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WilayahController extends Controller
{
    public function getDistricts(Request $request)
    {
        $regencyCode = $request->query('regency_code');

        if (!$regencyCode) {
            return response()->json(['error' => 'regency_code is required'], 400);
        }

        // Ambil 4 digit kode
        $regencyCode = sprintf("%04d", intval($regencyCode));

        $province = substr($regencyCode, 0, 2);
        $district = substr($regencyCode, 2, 2);

        // Format API wilayah.id
        $formatted = "{$province}.{$district}";
        $url = "https://wilayah.id/api/districts/{$formatted}.json";

        try {
            $response = Http::get($url);

            if ($response->failed()) {
                return response()->json([
                    "error" => "Gagal koneksi ke API eksternal",
                    "message" => $response->body()
                ], 500);
            }

            return response()->json($response->json(), 200);
        } catch (\Exception $e) {
            return response()->json([
                "error" => "Gagal koneksi ke API eksternal",
                "message" => $e->getMessage()
            ], 500);
        }
    }
}
