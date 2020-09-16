<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CategoryController extends Controller
{

    public function __construct()
    {
        $this->middleware('jwt');
    }

    public function index()
    {
        return response()->json(Category::latest()->get());
    }



    public function store(Request $request)
    {
        Category::create($request->all());
        return response()->json('created', Response::HTTP_CREATED);
    }


    public function show(Category $category)
    {
        return response()->json($category, Response::HTTP_OK);
    }




    public function update(Request $request, Category $category)
    {
        $category->update($request->all());
        return response()->json('updated', Response::HTTP_OK);
    }


    public function destroy(Category $category)
    {
        $category->delete();
        return \response()->json('deleted', Response::HTTP_OK);
    }
}
