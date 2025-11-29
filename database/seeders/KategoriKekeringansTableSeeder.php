<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\KategoriKekeringan;

class KategoriKekeringansTableSeeder extends Seeder
{
    public function run()
    {
        $kategori = [
            'Curah Hujan',
            'Suhu Udara',
            'Kelembapan Tanah',
            'Debit Sungai',
            'Volume Waduk',
            'Vegetasi',
            'Dampak Masyarakat',
        ];

        foreach ($kategori as $nama) {
            KategoriKekeringan::create([
                'nama_kategori' => $nama
            ]);
        }
    }
}
