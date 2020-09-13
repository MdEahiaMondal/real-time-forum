<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Like;
use App\Models\Question;
use App\Models\Replay;
use App\Models\User;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(50)->create();
        Category::factory(50)->create();
        Question::factory(100)->create();
        Replay::factory(200)->create()->each(function ($reply) {
            $reply->likes()->save(Like::factory()->make());
        });
    }
}
