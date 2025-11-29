<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KategoriKekeringan extends Model
{
    protected $table = 'kategori_kekeringans';

    protected $fillable = [
        'nama_kategori',
    ];
    public function beritas()
    {
        return $this->hasMany(Berita::class, 'kategori_kekeringan_id');
    }
}
