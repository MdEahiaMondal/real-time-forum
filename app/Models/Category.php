<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function getRouteKeyName()
    {
        return parent::getRouteKeyName($this->slug);
    }


    public function questions(){
        return $this->hasMany(Question::class);
    }
}
