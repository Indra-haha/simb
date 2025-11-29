<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\KategoriKekeringansTableSeeder;
use Database\Seeders\ProvincesTableSeeder;
use Database\Seeders\RegenciesTableSeeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        
        $this->call(ProvincesTableSeeder::class);
        $this->call(RegenciesTableSeeder::class);
        $this->call(KategoriKekeringansTableSeeder::class);
    }
}
