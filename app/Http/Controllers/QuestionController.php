<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionResource;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class QuestionController extends Controller
{
    public function index()
    {
        return  QuestionResource::collection(Question::latest()->get());
    }


    public function store(Request $request)
    {
//        $request['slug'] = Str::slug($request->title);
        $question = Auth::user()->questions()->create($request->all());
//        Question::create($request->all());
        return response()->json([
            'success' => true,
            'message' => 'Question created success',
            'question' => new QuestionResource($question)
        ], Response::HTTP_CREATED);
    }


    public function show(Question $question)
    {
        return new QuestionResource($question);
    }


    public function edit(Question $question)
    {
        //
    }


    public function update(Request $request, Question $question)
    {
        $question->update($request->all());
        return response()->json('updated', Response::HTTP_ACCEPTED);
    }


    public function destroy(Question $question)
    {
        $question->delete();
        return response()->json('deleted', Response::HTTP_OK);
    }
}
