<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ReplayController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function () {

    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});





Route::apiResource('questions', QuestionController::class);
Route::apiResource('questions.replies', ReplayController::class);


Route::apiResource('categories', CategoryController::class);

Route::post('replies/{reply}/likes', [LikeController::class, 'store']);
Route::delete('replies/{reply}/likes', [LikeController::class, 'destroy']);
