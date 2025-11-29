<?php

namespace App\Http\Controllers;

use App\Models\Kecamatan;
use App\Models\Region;
use Illuminate\Http\Request;

class KecamatanController extends Controller
{
    public function index()
    {
        return inertia('Admin/Kecamatan/Index', [
            'kecamatans' => Kecamatan::with('region')->get(),
            'regions' => Region::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_kecamatan' => 'required|string',
            'region_id' => 'required|exists:regions,id',
        ]);

        Kecamatan::create($request->only('nama_kecamatan', 'region_id'));

        return redirect()->back();
    }

    public function destroy(Kecamatan $kecamatan)
    {
        $kecamatan->delete();
        return redirect()->back();
    }
}
