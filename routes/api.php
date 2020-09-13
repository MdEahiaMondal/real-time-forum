<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('questions', \App\Http\Controllers\QuestionController::class);
