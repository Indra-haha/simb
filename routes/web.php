<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\ProvinceController;
use App\Http\Controllers\RegionController;
use App\Http\Controllers\KategoriKekeringanController;
use App\Http\Controllers\WilayahController;
use App\Http\Controllers\StatisticController;
use App\Http\Controllers\ReasonController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Beranda', [
    ]);
});
Route::get('/pengetahuan', function () {
    return Inertia::render('Kenali', [
    ]);
});
Route::get('/statistika', function () {
    return Inertia::render('Statistika', [
    ]);
});
Route::get('/Admin/Dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/Admin/Manajemen', function () {
    return Inertia::render('Admin/Kenali');
})->middleware(['auth', 'verified'])->name('kenali');
Route::get('/Admin/Statistika', function () {
    return Inertia::render('Admin/Statistika');
})->middleware(['auth', 'verified'])->name('statistika');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/provinces', [ProvinceController::class, 'index']);
Route::get('/regions', [RegionController::class, 'index']);
Route::get('/districts', [WilayahController::class, 'getDistricts']);
Route::get('/berita/create', [WilayahController::class, 'create']);
Route::get('/kategori-kekeringan', [KategoriKekeringanController::class, 'index']);

Route::middleware('auth')->group(function () {
    Route::post('/berita', [BeritaController::class, 'store']);
});

Route::get('/berita', [BeritaController::class, 'all']);
Route::get('/statistik-home', [StatisticController::class, 'index']);

Route::get('/news', [ReasonController::class, 'show'])->name('news.show');

require __DIR__.'/auth.php';
