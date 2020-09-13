<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ReplayController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::apiResource('questions', QuestionController::class);
Route::apiResource('questions.replies', ReplayController::class);


Route::apiResource('categories', CategoryController::class);
