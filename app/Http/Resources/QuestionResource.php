<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'path' => $this->path,
            'content' => $this->content,
            'category' => $this->category,
            'user' => $this->user,
            'replies' => $this->replies,
            'reply_count' => $this->replies->count(),
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}
