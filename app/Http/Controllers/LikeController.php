<?php

namespace App\Http\Controllers;

use App\Events\LikeEvent;
use App\Models\Like;
use App\Models\Replay;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{


    public function store(Request $request, Replay $reply)
    {
        $reply->likes()->create([
            'user_id' => Auth::id()
        ]);

        broadcast(new LikeEvent($reply->id, 1))->toOthers();

        /*return response()->json([
            'message' => 'successfully you like.',
            'like' => null
        ], 201);*/
    }


    public function destroy(Replay $reply)
    {
        $reply->likes->where('user_id', '=', Auth::id())->first()->delete();

        broadcast(new LikeEvent($reply->id, 0))->toOthers();

        /*return response()->json([
            'message' => 'successfully you unlike.',
            'like' => null
        ], 200);*/
    }
}
