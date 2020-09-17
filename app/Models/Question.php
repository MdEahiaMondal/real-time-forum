<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use phpDocumentor\Reflection\Types\This;

class Question extends Model
{
    use HasFactory;


    protected $fillable = [
        'title',
        'content',
        'slug',
        'category_id',
        'user_id',
    ];


    protected $with = ['replies', 'user'];

    public static function boot()
    {
        parent::boot(); // we use parent of Model boot

        // using for automatic create a slug using title
        static::creating(function ($question){
            $question->slug = Str::slug($question->title);
        });
    }

    public function getRouteKeyName()
    {
       return 'slug';
    }


    public function getPathAttribute(){
        return asset('api/questions/'.$this->slug);
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function replies()
    {
        return $this->hasMany(Replay::class, 'question_id');
    }

}
