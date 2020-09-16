<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionResource;
use App\Models\Question;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class QuestionController extends Controller
{


    public function __construct()
    {
        $this->middleware('jwt');
    }

    public function index()
    {
        return  QuestionResource::collection(Question::latest()->get());
    }


    public function store(Request $request)
    {
        Question::create($request->all());
        return response()->json('created', Response::HTTP_CREATED);
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
