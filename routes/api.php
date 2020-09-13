<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ReplayController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::apiResource('questions', QuestionController::class);
Route::apiResource('questions.replies', ReplayController::class);


Route::apiResource('categories', CategoryController::class);

Route::post('replies/{reply}/likes', [LikeController::class, 'store']);
Route::delete('replies/{reply}/likes', [LikeController::class, 'destroy']);
