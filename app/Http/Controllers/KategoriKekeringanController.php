<?php

namespace App\Http\Controllers;

use App\Models\KategoriKekeringan;
use Illuminate\Http\Request;

class KategoriKekeringanController extends Controller
{
    public function index()
    {
        return KategoriKekeringan::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_kategori' => 'required',
        ]);

        return KategoriKekeringan::create($request->all());
    }
 
}

