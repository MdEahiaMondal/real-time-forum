<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class ReplayResource extends JsonResource
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
            'id' => $this->id,
            'body' => $this->body,
            'user' => $this->user,
            'all_likes' => $this->likes->count(),
            'auth_liked' => !! $this->likes->where('user_id',Auth::id())->count(),
            'created_at' => $this->created_at->diffForHumans()
        ];
    }
}
