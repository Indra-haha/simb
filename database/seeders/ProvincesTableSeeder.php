<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProvincesTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('provinces')->insert([
            ['id' => 1, 'name' => 'Aceh'],
            ['id' => 2, 'name' => 'Sumatera Utara'],
            ['id' => 3, 'name' => 'Sumatera Barat'],
            ['id' => 4, 'name' => 'Riau'],
            ['id' => 5, 'name' => 'Jambi'],
            ['id' => 6, 'name' => 'Sumatera Selatan'],
            ['id' => 7, 'name' => 'Bengkulu'],
            ['id' => 8, 'name' => 'Lampung'],
            ['id' => 9, 'name' => 'Kepulauan Bangka Belitung'],
            ['id' => 10, 'name' => 'Kepulauan Riau'],
            ['id' => 11, 'name' => 'Jawa Barat'],
            ['id' => 12, 'name' => 'Jawa Tengah'],
            ['id' => 13, 'name' => 'DI Yogyakarta'],
            ['id' => 14, 'name' => 'Jawa Timur'],
            ['id' => 15, 'name' => 'Banten'],
            ['id' => 16, 'name' => 'Bali'],
            ['id' => 17, 'name' => 'Nusa Tenggara Barat'],
            ['id' => 18, 'name' => 'Nusa Tenggara Timur'],
            ['id' => 19, 'name' => 'Kalimantan Barat'],
            ['id' => 20, 'name' => 'Kalimantan Tengah'],
            ['id' => 21, 'name' => 'Kalimantan Selatan'],
            ['id' => 22, 'name' => 'Kalimantan Timur'],
            ['id' => 23, 'name' => 'Sulawesi Utara'],
            ['id' => 24, 'name' => 'Sulawesi Tengah'],
            ['id' => 25, 'name' => 'Sulawesi Selatan'],
            ['id' => 26, 'name' => 'Sulawesi Tenggara'],
            ['id' => 27, 'name' => 'Gorontalo'],
            ['id' => 28, 'name' => 'Sulawesi Barat'],
            ['id' => 29, 'name' => 'Maluku'],
            ['id' => 30, 'name' => 'Maluku Utara'],
            ['id' => 31, 'name' => 'Papua'],
            ['id' => 32, 'name' => 'Papua Barat'],
            ['id' => 33, 'name' => 'Papua Barat Daya'],
            ['id' => 34, 'name' => 'Papua Pegunungan'],
            ['id' => 35, 'name' => 'Papua Tengah'],
            ['id' => 36, 'name' => 'Papua Selatan'],
        ]);
    }
}
