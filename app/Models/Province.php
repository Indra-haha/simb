<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Province extends Model
{
    protected $fillable = ['name'];
    public function regiones()
    {
        return $this->hasMany(Region::class);
    }
    public function beritas()
    {
        return $this->hasMany(Berita::class);
    }
}
