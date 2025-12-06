<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Province;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BeritaController extends Controller
{
    public function index()
    {
        $beritas = Berita::with(['user', 'province'])->latest()->get();
        return view('berita.index', compact('beritas'));
    }
    public function all()
    {
        return Berita::all();
    }
    public function create()
    {
        $provinces = Province::orderBy('name')->get();
        return view('berita.create', compact('provinces'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'judul'           => 'required',
            'tanggal_berita'  => 'required|date',
            'gambar'          => 'required|image|mimes:jpg,jpeg,png|max:2048',
            'isi_berita'      => 'required',
            'url_berita'      => 'nullable|url',
            'kategori_kekeringan_id' => 'required|exists:kategori_kekeringans,id',
            'kecamatan_name'   => 'required|string|max:255',
            'region_id'       => 'required|exists:regions,id',
        ]);

        // Upload gambar
        $fileName = time() . '-' . $request->gambar->getClientOriginalName();
        $path = $request->file('gambar')->storeAs('berita', $fileName, 'public');

        // Simpan berita
        Berita::create([
            'judul'          => $request->judul,
            'tanggal_berita' => $request->tanggal_berita,
            'isi_berita'     => $request->isi_berita,
            'url_berita'     => $request->url_berita,
            'province_id'    => $request->province_id,
            'region_id'      => $request->region_id,
            'kategori_kekeringan_id' => $request->kategori_kekeringan_id,
            'gambar'         => $path,
            'kecamatan_name'   => $request->kecamatan,
            'user_id'        => auth()->id(),
        ]);

        return back()->with('success', 'Berita berhasil disimpan!');
    }

    public function show(Berita $berita)
    {
        return view('berita.show', compact('berita'));
    }

    public function destroy(Berita $berita)
    {
        $berita->delete();
        return back()->with('success', 'Berita berhasil dihapus!');
    }
}
