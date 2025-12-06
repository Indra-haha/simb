<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Berita extends Model
{
    use HasFactory;

    protected $fillable = [
        'judul',
        'tanggal_berita',
        'gambar',
        'isi_berita',
        'url_berita',
        'user_id',
        'province_id',
        'region_id',
        'kecamatan_name',
        'kategori_kekeringan_id',
    ];

    // Berita dimiliki oleh User
    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function region()
    {
        return $this->belongsTo(Region::class);
    }

      public function kecamatan()
    {
        return $this->belongsTo(Kecamatan::class);
    }



    public function kategoriBeritas()
    {
        return $this->belongsTo(KategoriKekeringan::class);
    }
}
