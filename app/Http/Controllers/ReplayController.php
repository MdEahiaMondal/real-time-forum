<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReplayResource;
use App\Models\Question;
use App\Models\Replay;
use App\Notifications\NewReplyNotification;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ReplayController extends Controller
{

    public function index(Question $question)
    {
        return response()->json([
            'replies' => ReplayResource::collection($question->replies),
            'message' => null
        ], Response::HTTP_OK);
    }


    public function store(Question $question, Request $request)
    {
        $replay = $question->replies()->create($request->all());
        $user = $question->user;

        if ($replay->user_id !== $user->id){
            $user->notify(new NewReplyNotification($replay));
        }
        return response()->json([
            'reply' => new ReplayResource($replay),
            'message' => 'A new replay created success'
        ], Response::HTTP_CREATED);

    }


    public function show(Question $question, Replay $reply)
    {
        $reply = new ReplayResource($reply);
        return response()->json([
            'reply' => $reply,
            'message' => null
        ], 200);
    }


    public function update(Question $question, Request $request, Replay $reply)
    {
        $reply->update($request->all());
        return response()->json([
            'reply' => new ReplayResource($reply),
            'message' => 'Replay updated success'
        ], 200);
    }


    public function destroy(Question $question, Replay $reply)
    {
        $reply->delete();
        return response()->json([
            'replay' => null,
            'message' => 'Replay deleted success'
        ], 200);
    }
}
