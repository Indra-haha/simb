<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    protected $fillable = ['province_id', 'name', 'kode_kabupaten_kota'];

    public function province()
    {
        return $this->belongsTo(Province::class);
    }
    public function kecamatans()
    {
        return $this->hasMany(Kecamatan::class);
    }
}
